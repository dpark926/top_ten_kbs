import React from 'react';

function Page2 (props) {
  return (
    <div className='page-container animated slideInRight'>
      [page2]
      <div className="page-box" onClick={props.flip}>
        {props.flip2 === false ? <div className="animated flipInX" id='flip2'>REASON #2</div> : <div className="animated flip" id='flip2'>[answer]</div>}
      </div>
    </div>
  )
}

export default Page2;
