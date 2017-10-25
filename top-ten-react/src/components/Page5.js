import React from 'react';
import '../styles/Page.css'
import { Link } from 'react-router-dom'

function Page5 (props) {
  let answer = (
    <div onClick={props.increasePage}>
      <div className='list'>
        <p>DEFIANCE</p>
        <div className='answer-answer'>I want to be constantly challenged and <br/>be stretched in many different ways</div>
      </div>
    </div>
  )

  return (
    <div className='page-container'>
      [page5]
      <div className='page-box question animated slideInRight' onClick={props.flip}>
        <p>#5</p>
      </div>
      {props.flip5 === false ? null :
        <Link to='/page6' style={{ textDecoration: 'none' }}>
          <div className='page-box answer animated slideInLeft'>{answer}</div>
        </Link>}
    </div>
  )
}

export default Page5;
