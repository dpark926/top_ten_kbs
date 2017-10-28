import React, {Component} from 'react'
import { Route, Link } from 'react-router-dom'
import '../styles/Welcome.css'
import TopTen from '../components/TopTen.js'
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
import ThankYou from '../components/ThankYou.js'
import img1 from '../styles/imgs/spies_logo.jpg'
import img2 from '../styles/imgs/spy_1.png'


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

  reset = () => {
    this.setState({
      currentPage: 0
    })
  }

  render = () => {
    return (
      <div className='welcome-container'>
        <div onClick={this.reset}>
          <Link to='/page0'><img src={img2}></img></Link>
        </div>
        {this.state.currentPage === 0 ?
          null :
          <Link to={`page${this.state.currentPage - 1}`}>
            <div className='arrow left-arrow' onClick={this.decreasePage}>
              <div className='arrow-icon fa fa-arrow-circle-o-left'></div>
            </div>
          </Link>
        }

        {this.state.currentPage === 11 ?
          null :
          <Link to={`page${this.state.currentPage + 1}`}>
            <div className='arrow right-arrow' onClick={this.increasePage}>
              <span className='arrow-icon fa fa-arrow-circle-o-right'></span>
            </div>
          </Link>
        }
        <Route path="/page0" component={TopTen}/>
        <Route path="/page1" component={Page1}/>
        <Route path="/page2" component={Page2}/>
        <Route path="/page3" component={Page3}/>
        <Route path="/page4" component={Page4}/>
        <Route path="/page5" component={Page5}/>
        <Route path="/page6" component={Page6}/>
        <Route path="/page7" component={Page7}/>
        <Route path="/page8" component={Page8}/>
        <Route path="/page9" component={Page9}/>
        <Route path="/page10" component={Page10}/>
        <Route path="/page11" component={ThankYou}/>
      </div>
    )
  }
}

export default Welcome
