import React, {Component} from 'react'
import '../styles/Page.css'

class Page4 extends Component {
  constructor () {
    super()

    this.state = {
      flip: false,
    }
  }

  flip = () => {
    this.setState({
      flip: !this.state.flip
    })
  }

  render = () => {
    let answer = (
      <div>
        <h3>I LOVE TO CODE</h3>
        <p>I'm always creating new projects</p>
      </div>
    )
    return (
      <div className='page-container animated slideInRight'>
        [page4]
        <div className="page-box" onClick={this.flip}>
          {this.state.flip === false ? <div className="animated flipInX">REASON #4</div> : <div className="animated flip">{answer}</div>}
        </div>
      </div>
    )
  }
}

export default Page4
