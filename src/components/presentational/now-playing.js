import React from 'react';
import { Transition } from 'react-transition-group';
import isMobile from 'ismobilejs';
import width from 'text-width';

const component = (props) => {
  const {
    title = '',
    detail = '',
    progress = 0,
    remaining = 0,
    artwork = './images/empty.png',
    feedback,
    progressBarInProp,
    updateFeedbacksVisibility,
    postFeedback,
    startProgressBarTransition,
  } = props.data;
  const {
    visibility,
  } = feedback;
  const tabIndex = visibility ? 0 : -1;

  const w = width(title, {
    family: 'sans-serif',
    size: 10,
  });
  const titleStyle = `${w >= 300 ? 'display-5' : 'display-4'} text-light text-right`;
  const progressTransitionDefaultStyle = {
    width: `${progress}%`,
    transition: 'width 0ms linear',
  };
  const progressTransitionStyles = {
    entered: {
      width: `${progress}%`,
      transition: 'width 0ms linear',
    },
    exited: {
      width: '100%',
      transition: `width ${remaining}s linear`,
    },
  };
  const feedbackAreaStyle = {
    visibility: visibility ? 'visible' : 'hidden',
  };
  const handleMouseEnter = () => {
    if (!isMobile.any) {
      updateFeedbacksVisibility(true);
    }
  };
  const handleMouseLeave = () => {
    if (!isMobile.any) {
      updateFeedbacksVisibility(false);
    }
  };
  const handleClick = () => {
    if (isMobile.any) {
      updateFeedbacksVisibility(!visibility);
    }
  };
  const handleLike = () => {
    postFeedback('LIKE');
  };
  const handleDislike = () => {
    postFeedback('DISLIKE');
  };
  const handleEntered = () => {
    startProgressBarTransition();
  };
  return (
    <div className="card" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} onClick={handleClick} onKeyUp={handleClick} role="menu" tabIndex={tabIndex}>
      <div className="card-img-overlay align-items-center d-flex">
        <div className="card-body align-self-end p-0">
          <h3 className={titleStyle}>{title}</h3>
          <p className="text-light text-right">{detail}</p>
          <div className="progress">
            <Transition in={progressBarInProp} mountOnEnter timeout={0} onEntered={handleEntered}>
              {state => (
                <div className="progress-bar progress-bar-striped progress-bar-animated bg-primary" role="progressbar" style={{ ...progressTransitionDefaultStyle, ...progressTransitionStyles[state] }} aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" />
              )}
            </Transition>
          </div>
        </div>
      </div>
      <div className="card-img-overlay d-flex align-items-center bg-gradient-dark" style={feedbackAreaStyle}>
        <div className="card-body p-0 align-self-center text-center">
          <h2 className="text-light">お気に召しましたか？</h2>
          <span className="btn btn-lg btn-primary mx-3 my-1" role="button" tabIndex="0" onClick={handleLike} onKeyUp={handleLike}><i className="fa fa-thumbs-up fa-fw fa-2x" /></span>
          <span className="btn btn-lg btn-secondary mx-3 my-1" role="button" tabIndex="0" onClick={handleDislike} onKeyUp={handleDislike}><i className="fa fa-thumbs-down fa-fw fa-2x" /></span>
        </div>
      </div>
      <img className="img-fluid w-100" alt="Artwork" src={artwork} />
    </div>
  );
};

export default component;
