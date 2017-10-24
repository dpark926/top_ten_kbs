import React from 'react';
import '../styles/Page.css'
import { Link } from 'react-router-dom'

function Page3 (props) {
  let answer = (
    <div onClick={props.increasePage}>
      <div className='list'>
        <h3>THINK BIG</h3>
        <ul>
          <li>On a mission to crush the <br/>status quo</li>
        </ul>
      </div>
    </div>
  )

  return (
    <div className='page-container'>
      [page3]
      <div className='page-box question animated slideInRight' onClick={props.flip}>
        <h1>REASON #3</h1>
      </div>
      {props.flip3 === false ? null :
        <Link to='/page4' style={{ textDecoration: 'none' }}>
          <div className='page-box answer animated slideInLeft'>{answer}</div>
        </Link>}
    </div>
  )
}

export default Page3;
