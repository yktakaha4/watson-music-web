import React from 'react';
import * as moment from 'moment-timezone';

const component = (props) => {
  const {
    tracks = [],
  } = props.data;
  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <h4 className="my-2">再生履歴</h4>
        </div>
        <div className="col-12">
          <table className="table tracklist">
            <tbody>
              {tracks.map((track, index) => (
                <tr key={track.trackTag}>
                  <td>{tracks.length - index}</td>
                  <td>{moment.unix(track.playedAt).utc().format('HH:mm:ss')}</td>
                  <td>{track.title}</td>
                  <td>{track.detail}</td>
                </tr>
              )).slice(0, 10)}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};


export default component;
