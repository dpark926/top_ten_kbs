import React from 'react';
import '../styles/Page.css'
import { Link } from 'react-router-dom'

function Page8 (props) {
  let answer = (
    <div onClick={props.increasePage}>
      <div className='list'>
        <p>ENTREPRENEURIAL</p>
        <div className='answer-answer'>I abilty to wear multiple hats and I work well in ambiguity</div>
      </div>
    </div>
  )

  return (
    <div className='page-container'>
      [page8]
      <div className='page-box question animated slideInRight' onClick={props.flip}>
        <p>#8</p>
      </div>
      {props.flip8 === false ? null :
        <Link to='/page9' style={{ textDecoration: 'none' }}>
          <div className='page-box answer animated slideInLeft'>{answer}</div>
        </Link>}
    </div>
  )
}

export default Page8;
