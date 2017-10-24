import React from 'react';
import '../styles/Page.css'
import { Link } from 'react-router-dom'

function Page6 (props) {
  let answer = (
    <div onClick={props.increasePage}>
      <div className='list'>
        <h3>COMRADERY</h3>
        <ul>
          <li>I am not looking for just another job but to be <br/>a part of a team who shares the same passion <br/>and drive to solve problems</li>
        </ul>
      </div>
    </div>
  )

  return (
    <div className='page-container'>
      [page6]
      <div className='page-box question animated slideInRight' onClick={props.flip}>
        <h1>REASON #6</h1>
      </div>
      {props.flip6 === false ? null :
        <Link to='/page7' style={{ textDecoration: 'none' }}>
          <div className='page-box answer animated slideInLeft'>{answer}</div>
        </Link>}
    </div>
  )
}

export default Page6;
