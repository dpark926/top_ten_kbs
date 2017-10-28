import React from 'react';
import '../styles/Page.css'

function Page1 () {
  return (
    <div className='page-container'>
      <div className='page-wrapper'>

        <div className='page-box question animated slideInRight'>
          <div className='question-header'>#1</div>
        </div>

        <div className='page-box answer animated slideInLeft'>
          <div className='list'>
            <p>I LOVE TO CODE</p>
            <div className='answer-answer'>I enjoy my craft and always looking at <br/>how I can improve on my work</div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Page1;
