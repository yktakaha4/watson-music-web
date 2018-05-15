import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import uuidv4 from 'uuid/v4';
import Stomp from 'stompjs';
import SockJS from 'sockjs-client';

import Header from './components/container/header';
import Postbox from './components/container/postbox';
import Playlist from './components/presentational/playlist';
import History from './components/presentational/history';
import Hr from './components/presentational/hr';
import * as Actions from './actions';

import './styles/app.css';

class Container extends Component {
  componentDidMount() {
    const {
      initializedApp,
      getRequests,
      getNowPlaying,
    } = this.props;

    let userId;
    try {
      userId = localStorage.getItem('userId');
      if (!userId) {
        userId = uuidv4().toUpperCase();
        localStorage.setItem('userId', userId);
      }
    } catch (e) {
      userId = uuidv4().toUpperCase();
    }

    const client = Stomp.over(new SockJS('./api/sockets'));
    client.debug = null;
    client.connect({}, () => {
      console.log('connected sockets.');
      client.subscribe('/api/topic/actions', (payload) => {
        console.log(payload.body);
        const actiontypes = JSON.parse(payload.body);
        actiontypes.forEach((actionType) => {
          switch (actionType) {
            case Actions.GET_REQUESTS: {
              getRequests();
              break;
            }
            case Actions.GET_NOW_PLAYING: {
              getNowPlaying();
              break;
            }
            default: {
              break;
            }
          }
        });
        getRequests();
        getNowPlaying();
      });
    });
    initializedApp({
      userId,
      client,
    });
  }
  render() {
    const {
      nowPlaying, requestQueue, history,
    } = this.props;
    return (
      <div>
        <Header />
        <div className="my-3"><Postbox /></div>
        <div className="my-2"><Hr /></div>
        <div className="my-3"><Playlist data={{ nowPlaying, requestQueue }} /></div>
        <div className="my-2"><Hr /></div>
        <div className="my-3"><History data={history} /></div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const {
    app, header, nowPlaying, requestQueue, history,
  } = state;
  return {
    app,
    header,
    nowPlaying,
    requestQueue,
    history,
  };
};

const mapDispatchToProps = dispatch => bindActionCreators(Actions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Container);
