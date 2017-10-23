import React, {Component} from 'react'
import { Route, Redirect, Link } from 'react-router-dom'
import '../styles/Welcome.css'
import Page1 from '../components/Page1.js'
import Page2 from '../components/Page2.js'
import Page3 from '../components/Page3.js'
import Page4 from '../components/Page4.js'
import Page5 from '../components/Page5.js'
import Page6 from '../components/Page6.js'
import Page7 from '../components/Page7.js'
import Page8 from '../components/Page8.js'
import Page9 from '../components/Page9.js'
import Page10 from '../components/Page10.js'

class Welcome extends Component {
  constructor () {
    super()

    this.state = {
      currentPage: 0,
      flip1: false,
      flip2: false,
      flip3: false,
      flip4: false,
      flip5: false,
      flip6: false,
      flip7: false,
      flip8: false,
      flip9: false,
      flip10: false,
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

  flip = (event) => {
    let name = event.target.id
    this.setState({
      [name]: !this.state[name]
    })
  }

  render = () => {
    return (
      <div className='welcome-container'>
        <div>
          <h1>WELCOME!</h1>
          <p>Here are 10 top reasons why I'd love to be the newest member of the KBS family</p>
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
        <Route path="/page1" render={() => <Page1 flip={this.flip} flip1={this.state.flip1}/>}/>
        <Route path="/page2" render={() => <Page2 flip={this.flip} flip2={this.state.flip2}/>}/>
        <Route path="/page3" render={() => <Page3 flip={this.flip} flip3={this.state.flip3}/>}/>
        <Route path="/page4" render={() => <Page4 flip={this.flip} flip4={this.state.flip4}/>}/>
        <Route path="/page5" render={() => <Page5 flip={this.flip} flip5={this.state.flip5}/>}/>
        <Route path="/page6" render={() => <Page6 flip={this.flip} flip6={this.state.flip6}/>}/>
        <Route path="/page7" render={() => <Page7 flip={this.flip} flip7={this.state.flip7}/>}/>
        <Route path="/page8" render={() => <Page8 flip={this.flip} flip8={this.state.flip8}/>}/>
        <Route path="/page9" render={() => <Page9 flip={this.flip} flip9={this.state.flip9}/>}/>
        <Route path="/page10" render={() => <Page10 flip={this.flip} flip10={this.state.flip10}/>}/>
      </div>
    )
  }
}

export default Welcome
