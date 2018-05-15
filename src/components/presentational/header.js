import React from 'react';
import ReactTooltip from 'react-tooltip';

const component = (props) => {
  const {
    updateMusicMessage,
    learnFeedbacksMessage,
    checkStatus,
    updateMusic,
    learnFeedbacks,
  } = props.data;
  return (
    <nav className="navbar navbar-expand-md navbar-dark bg-gradient m-0">
      <div className="container">
        <a className="navbar-brand" href="./">Watson Music</a>
        <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarLightSupportedContent" aria-controls="navbar2SupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse text-center justify-content-end" id="navbarLightSupportedContent">
          <ul className="navbar-nav">
            <li className="nav-item mx-1">
              <span className="nav-link" role="button" tabIndex="0" onMouseEnter={checkStatus} onClick={updateMusic} onKeyUp={updateMusic} data-tip data-for="updateMusic"><i className="fa d-inline fa-music" />&nbsp; update music</span>
              <ReactTooltip id="updateMusic" place="bottom" type="dark" effect="solid">
                <strong>Status: {updateMusicMessage}</strong>
              </ReactTooltip>
            </li>
            <li className="nav-item mx-1">
              <span className="nav-link" role="button" tabIndex="0" onMouseEnter={checkStatus} onClick={learnFeedbacks} onKeyUp={learnFeedbacks} data-tip data-for="learnFeedbacks"><i className="fa d-inline fa-graduation-cap" />&nbsp; learn feedbacks</span>
              <ReactTooltip id="learnFeedbacks" place="bottom" type="dark" effect="solid">
                <strong>Status: {learnFeedbacksMessage}</strong>
              </ReactTooltip>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default component;
