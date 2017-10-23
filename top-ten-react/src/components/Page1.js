// import React, {Component} from 'react'
// import '../styles/Page.css'
//
// class Page1 extends Component {
//   constructor () {
//     super()
//
//     this.state = {
//       flip: false,
//     }
//   }
//
//   flip = () => {
//     this.setState({
//       flip: !this.state.flip
//     })
//   }
//
//   render = () => {
//     let answer = (
//       <div>
//         <h3>I LOVE TO CODE</h3>
//         <p>I'm always creating new projects</p>
//       </div>
//     )
//     return (
//       <div className='page-container animated slideInRight'>
//         [page1]
//         <div className="page-box" onClick={this.flip}>
//           {this.state.flip === false ? <div className="animated flipInX">REASON #1</div> : <div className="animated flip">{answer}</div>}
//         </div>
//       </div>
//     )
//   }
// }
//
// export default Page1

import React from 'react';

function Page1 (props) {
  return (
    <div className='page-container animated slideInRight'>
      [page1]
      <div className="page-box" onClick={props.flip}>
        {props.flip1 === false ? <div className="animated flipInX" id='flip1'>[question]</div> : <div className="animated flip" id='flip1'>[answer]</div>}
      </div>
    </div>
  )
}

export default Page1;
