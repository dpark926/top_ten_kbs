import React from 'react';
import '../styles/Page.css'
import { Link } from 'react-router-dom'

function Page2 (props) {
  let answer = (
    <div onClick={props.increasePage}>
      <div className='list'>
        <p>POSITIVE VIBE</p>
        <div className='answer-answer'>Positivity is contagious and <br/>encourages creativity</div>
      </div>
    </div>
  )

  return (
    <div className='page-container'>
      [page2]
      <div className='page-box question animated slideInRight' onClick={props.flip}>
        <p>#2</p>
      </div>
      {props.flip2 === false ? null :
        <Link to='/page3' style={{ textDecoration: 'none' }}>
          <div className='page-box answer animated slideInLeft'>{answer}</div>
        </Link>}
    </div>
  )
}

export default Page2;
