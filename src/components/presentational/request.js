import React from 'react';
import * as moment from 'moment-timezone';

const component = (props) => {
  const {
    requestId, text = '', type = '', postedAt = 0, playing = false, deletable = false, yours = false, deleteRequest,
  } = props.data;
  let typeText;
  switch (type) {
    case 'WEB': {
      typeText = 'Webから';
      break;
    }
    case 'GOOGLE_ASSISTANT': {
      typeText = 'Google アシスタントから';
      break;
    }
    default: {
      typeText = undefined;
      break;
    }
  }
  const subText = `${moment.unix(postedAt).utc().format('YYYY/MM/DD HH:mm:ss')}に${typeText || ''}${yours ? 'あなたが' : ''}投稿`;
  const alertClassName = playing ? 'bg-gradient' : '';
  const closeButtonStyle = {
    visibility: deletable ? 'visible' : 'hidden',
  };
  const handleClick = () => {
    deleteRequest(requestId);
  };
  return (
    <div className={`alert alert-info ${alertClassName}`}>
      <button type="button" className="close" style={closeButtonStyle} onClick={handleClick}>×</button>
      <h4 className="alert-heading">{text}</h4>
      <p className="mb-0 text-right">{subText}</p>
    </div>
  );
};

export default component;
