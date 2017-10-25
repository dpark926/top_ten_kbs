import React from 'react';
import '../styles/Page.css'
import { Link } from 'react-router-dom'

function Page7 (props) {
  let answer = (
    <div onClick={props.increasePage}>
      <div className='list'>
        <p>LETHAL SAMURAI</p>
        <div className='answer-answer'>I am most crafty and skilled who <br/>honor to your clan</div>
      </div>
    </div>
  )

  return (
    <div className='page-container'>
      [page7]
      <div className='page-box question animated slideInRight' onClick={props.flip}>
        <p>#7</p>
      </div>
      {props.flip7 === false ? null :
        <Link to='/page8' style={{ textDecoration: 'none' }}>
          <div className='page-box answer animated slideInLeft'>{answer}</div>
        </Link>}
    </div>
  )
}

export default Page7;
