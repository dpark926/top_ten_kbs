import React from 'react';
import '../styles/Page.css'
import { Link } from 'react-router-dom'

function Page10 (props) {
  let answer = (
    <div onClick={props.increasePage}>
      <div className='list'>
        <p>HUMILITY</p>
        <div className='answer-answer'>I enjoy my craft and always looking at <br/>how I can improve on my work.</div>
      </div>
    </div>
  )

  return (
    <div className='page-container'>
      [page10]
      <div className='page-box question animated slideInRight' onClick={props.flip}>
        <p>#10</p>
      </div>
      {props.flip10 === false ? null :
        <Link to='/page11' style={{ textDecoration: 'none' }}>
          <div className='page-box answer animated slideInLeft'>{answer}</div>
        </Link>}
    </div>
  )
}

export default Page10;
