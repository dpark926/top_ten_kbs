import React from 'react';
import '../styles/Page.css'

function Page2 () {
  return (
    <div className='page-container'>
      <div className='page-wrapper'>

        <div className='page-box question animated slideInRight'>
          <div className='question-header'>#2</div>
        </div>

        <div className='page-box answer animated slideInLeft'>
          <div className='list'>
            <p>POSITIVE VIBE</p>
            <div className='answer-answer'>Positivity is contagious and <br/>encourages creativity</div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Page2;
