import React from 'react';

const component = (props) => {
  const {
    text = '',
    updatePostboxText,
    postRequest,
  } = props.data;
  const handleChange = (event) => {
    updatePostboxText(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    postRequest(event.target.post_text.value);
  };
  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <h4 className="my-2">どんな音楽が聞きたいですか？</h4>
          <form className="form-inline" onSubmit={handleSubmit}>
            <div className="input-group w-100">
              <input type="text" className="form-control" name="post_text" onChange={handleChange} value={text} maxLength="300" autoComplete="off" />
              <div className="input-group-append">
                <button className="btn btn-primary" type="submit">投稿する</button>
              </div>
            </div>
            <input type="text" className="dummy-text" style={{ display: 'none' }} />
          </form>
        </div>
      </div>
    </div>
  );
};

export default component;
