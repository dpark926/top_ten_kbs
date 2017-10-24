import React from 'react';
import '../styles/TopTen.css'
// import img1 from '../styles/imgs/kbs_logo.jpeg'

function TopTen (props) {
  return (
    <div className='topten animated pulse'>
      {/* [topten] */}
      <h1 className="page-box" onClick={props.flip}>
        TOP 10 REASONS
        {/* Here are 10 top reasons why I'd love to be the newest member of the KBS family */}
      </h1>
      <div className='loveto'>
        <p>WHY I'D LOVE TO BE <br/>THE NEWEST MEMBER <br/>OF THE KBS FAMILY</p>
      </div>
    </div>
  )
}

export default TopTen;
