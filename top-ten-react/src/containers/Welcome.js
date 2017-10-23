import React, {Component} from 'react'
import { Route, Redirect, Link } from 'react-router-dom'
import '../styles/Welcome.css'

class Welcome extends Component {
  constructor () {
    super()

    this.state = {
      currentPage: 0,

    }
  }

  decreasePage = () => {
    this.setState({
      currentPage: this.state.currentPage - 1
    })
  }

  increasePage = () => {
    this.setState({
      currentPage: this.state.currentPage + 1
    })
  }

  render = () => {
    return (
      <div>
        <div>
          <h1>WELCOME!</h1>
        </div>
        {this.state.currentPage === 0 ?
          null :
          <Link to={`page${this.state.currentPage - 1}`}>
            <div className='arrow left-arrow' onClick={this.decreasePage}>{"<"}</div>
          </Link>
        }

        {this.state.currentPage === 10 ?
          null :
          <Link to={`page${this.state.currentPage + 1}`}>
            <div className='arrow right-arrow' onClick={this.increasePage}>{">"}</div>
          </Link>
        }

      </div>
    )
  }
}

export default Welcome
