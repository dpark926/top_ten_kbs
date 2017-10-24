import React from 'react';
import '../styles/Page.css'
import { Link } from 'react-router-dom'

function Page2 (props) {
  let answer = (
    <div onClick={props.increasePage}>
      <div className='list'>
        <h3>POSITIVE VIBE</h3>
        <ul>
          <li>Positivity is contagious and <br/>encourages creativity</li>
        </ul>
      </div>
    </div>
  )

  return (
    <div className='page-container'>
      [page2]
      <div className='page-box question animated slideInRight' onClick={props.flip}>
        <h1>REASON #2</h1>
      </div>
      {props.flip2 === false ? null :
        <Link to='/page3' style={{ textDecoration: 'none' }}>
          <div className='page-box answer animated slideInLeft'>{answer}</div>
        </Link>}
    </div>
  )
}

export default Page2;
