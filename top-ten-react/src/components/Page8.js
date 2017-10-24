import React from 'react';
import '../styles/Page.css'
import { Link } from 'react-router-dom'

function Page8 (props) {
  let answer = (
    <div onClick={props.increasePage}>
      <div className='list'>
        <h3>I LOVE TO CODE</h3>
        <ul>
          <li>I enjoy my craft and always looking at <br/>how I can improve on my work.</li>
        </ul>
      </div>
    </div>
  )

  return (
    <div className='page-container'>
      [page8]
      <div className='page-box question animated slideInRight' onClick={props.flip}>
        <h1>REASON #8</h1>
      </div>
      {props.flip8 === false ? null :
        <Link to='/page9' style={{ textDecoration: 'none' }}>
          <div className='page-box answer animated slideInLeft'>{answer}</div>
        </Link>}
    </div>
  )
}

export default Page8;
