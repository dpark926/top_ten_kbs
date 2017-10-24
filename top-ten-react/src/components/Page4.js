import React from 'react';
import '../styles/Page.css'
import { Link } from 'react-router-dom'

function Page4 (props) {
  let answer = (
    <div onClick={props.increasePage}>
      <div className='list'>
        <h3>GET SH*T DONE</h3>
        <ul>
          <li>I have a strong work ethic and <br/>the dedication to succeed</li>
        </ul>
      </div>
    </div>
  )

  return (
    <div className='page-container'>
      [page4]
      <div className='page-box question animated slideInRight' onClick={props.flip}>
        <h1>REASON #4</h1>
      </div>
      {props.flip4 === false ? null :
        <Link to='/page5' style={{ textDecoration: 'none' }}>
          <div className='page-box answer animated slideInLeft'>{answer}</div>
        </Link>}
    </div>
  )
}

export default Page4;
