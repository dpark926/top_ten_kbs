import React from 'react';
import '../styles/Page.css'
import { Link } from 'react-router-dom'

function Page3 (props) {
  let answer = (
    <div onClick={props.increasePage}>
      <div className='list'>
        <p>THINK BIG</p>
        <div className='answer-answer'>On a mission to crush the <br/>status quo</div>
      </div>
    </div>
  )

  return (
    <div className='page-container'>
      [page3]
      <div className='page-box question animated slideInRight' onClick={props.flip}>
        <p>#3</p>
      </div>
      {props.flip3 === false ? null :
        <Link to='/page4' style={{ textDecoration: 'none' }}>
          <div className='page-box answer animated slideInLeft'>{answer}</div>
        </Link>}
    </div>
  )
}

export default Page3;
