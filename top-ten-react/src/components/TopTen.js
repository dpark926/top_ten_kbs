import React from 'react';
import '../styles/TopTen.css'

function TopTen (props) {
  return (
    <div className='topten animated pulse'>
      <div className='topten-wrapper'>
        <div className="topten-page-box" onClick={props.flip}>
          10 REASONS
        </div>
        <div className='loveto'>
          <p>WHY I'D LOVE TO BE THE NEWEST MEMBER OF THE KBS FAMILY</p>
        </div>
      </div>
    </div>
  )
}

export default TopTen;
