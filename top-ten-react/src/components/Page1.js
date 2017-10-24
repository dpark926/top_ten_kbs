import React from 'react';
import '../styles/Page.css'
import img1 from '../styles/imgs/spies_logo.jpg'
import img2 from '../styles/imgs/spy_1.png'

function Page1 (props) {
  let answer = (
    <div>
      {/* <img src={img2}></img> */}
      <div className='list'>
        <h3>I LOVE TO CODE</h3>
        <ul>
          <li>I always making new projects</li>
        </ul>
      </div>
    </div>
  )

  return (
    <div className='page-container' onClick={props.flip}>
      [page1]
      {/* <div className="animated flipInX" onClick={props.flip} id='flip1'>{question}</div>
      <div className="page-box">
        {props.flip1 === false ? null : <div className="animated flip" id='flip1'>{answer}</div>}
      </div> */}
      <div className='page-box question animated slideInRight'>
        <h1>REASON #1</h1>
        {/* <img src={img1}></img> */}
      </div>
      {props.flip1 === false ? null : <div className='page-box answer animated slideInLeft'>{answer}</div> }
    </div>
  )
}

export default Page1;
