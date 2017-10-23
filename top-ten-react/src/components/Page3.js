import React from 'react';

function Page3 (props) {
  return (
    <div className='page-container animated slideInRight'>
      [page3]
      <div className="page-box" onClick={props.flip}>
        {props.flip3 === false ? <div className="animated flipInX" id='flip3'>REASON #3</div> : <div className="animated flip" id='flip3'>[answer]</div>}
      </div>
    </div>
  )
}

export default Page3;
