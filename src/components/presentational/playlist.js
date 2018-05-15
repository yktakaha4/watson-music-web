import React from 'react';
import NowPlaying from '../container/now-playing';
import RequestQueue from '../container/request-queue';

const component = () => (
  <div className="container">
    <div className="row">
      <div className="col-md-5 order-md-2 my-2">
        <NowPlaying />
      </div>
      <div className="col-md-7 my-2 h-100">
        <RequestQueue />
      </div>
    </div>
  </div>
);

export default component;
