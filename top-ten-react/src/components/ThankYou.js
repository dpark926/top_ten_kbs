import React from 'react';

function ThankYou (props) {
  return (
    <div className='topten animated zoomIn'>
      <h1 className="page-box" onClick={props.flip}>
        THANK YOU!
      </h1>
      <div>
        <p>I LOOK FORWARD TO <br/>HEARING FROM YOU!</p>
      </div>
    </div>
  )
}

export default ThankYou;
