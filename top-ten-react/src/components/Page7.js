import React from 'react';
import '../styles/Page.css'
import { Link } from 'react-router-dom'

function Page7 (props) {
  let answer = (
    <div onClick={props.increasePage}>
      <div className='list'>
        <h3>LETHAL SAMURAI</h3>
        <ul>
          <li>I am highly skilled and lethal who is on a quest of an <br/>elite team bring honor to your clan</li>
        </ul>
      </div>

       {/* I am a software engineer ninja who lives by the code.   */}
       Your clan, Headgeable, is most crafty and impressive.
       I am on a quest of an elite team and you are looking for a lethal frontend engineer.
       I have a considerable zeal for single page applications like React, Angular and Vue.
       Please instruct me the rendezvous where I may prove to you that I am highly skilled and honorable.
    </div>
  )

  return (
    <div className='page-container'>
      [page7]
      <div className='page-box question animated slideInRight' onClick={props.flip}>
        <h1>REASON #7</h1>
      </div>
      {props.flip7 === false ? null :
        <Link to='/page8' style={{ textDecoration: 'none' }}>
          <div className='page-box answer animated slideInLeft'>{answer}</div>
        </Link>}
    </div>
  )
}

export default Page7;
