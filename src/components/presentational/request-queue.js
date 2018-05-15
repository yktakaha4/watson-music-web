import React from 'react';
import Request from './request';

const component = (props) => {
  const {
    requests = [], deleteRequest,
  } = props.data;
  return (
    <div>
      {requests.map(request => (
        <Request data={Object.assign({ deleteRequest }, request)} key={request.requestId} />
      )).slice(0, 5)}
    </div>
  );
};

export default component;
