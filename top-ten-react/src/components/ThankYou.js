import React from 'react';
import { Route, Link } from 'react-router-dom'
import '../styles/ThankYou.css'
import resume from '../styles/imgs/dpark_resume 0915.pdf'

function ThankYou (props) {
  return (
    <div className='thankyou animated zoomIn'>
      <div className='name'>DANIEL PARK</div>

      <div className='links'>
        <div className='each-link'><Link to={resume} target="_blank" className="fa fa-file-pdf-o" style={{color: 'white', textDecoration: 'none'}}><span className="label">   Resume</span></Link></div>
        <div className='each-link'><Link to="https://dpark926.github.io" target="https://dpark926.github.io" className="fa fa-code" style={{color: 'white', textDecoration: 'none'}}><span className="label">  Portfolio</span></Link></div>
        <div className='each-link'><Link to="https://www.linkedin.com/in/devdanielpark/" target="https://www.linkedin.com/in/devdanielpark/" className="fa fa-linkedin-square" style={{color: 'white', textDecoration: 'none'}}><span className="label">  LinkedIn</span></Link></div>
        <div className='each-link'><Link to="https://github.com/dpark926" target="https://github.com/dpark926" className="fa fa-github" style={{color: 'white', textDecoration: 'none'}}><span className="label">   GitHub</span></Link></div>
        <div className='each-link'><Link to="https://medium.com/@dpark/" target="https://medium.com/@dpark/" className="fa fa-medium" style={{color: 'white', textDecoration: 'none'}}><span className="label">  Medium</span></Link></div>
      </div>
    </div>
  )
}

export default ThankYou;
