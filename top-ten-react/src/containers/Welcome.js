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
import img1 from '../styles/imgs/spies_logo.jpg'
import img2 from '../styles/imgs/spy_1.png'


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

  flip1 = (event) => {
    // debugger
    // let name = event.target.id
    // this.setState({
    //   [name]: !this.state[name]
    // })
    // console.log(event.target)

    this.setState({
      flip1: !this.state.flip1
    })
  }

  flip2 = () => {
    this.setState({
      flip2: !this.state.flip2
    })
  }

  flip3 = () => {
    this.setState({
      flip3: !this.state.flip3
    })
  }

  flip4 = () => {
    this.setState({
      flip4: !this.state.flip4
    })
  }

  flip5 = () => {
    this.setState({
      flip5: !this.state.flip5
    })
  }

  flip6 = () => {
    this.setState({
      flip6: !this.state.flip6
    })
  }

  flip7 = () => {
    this.setState({
      flip7: !this.state.flip7
    })
  }

  flip8 = () => {
    this.setState({
      flip8: !this.state.flip8
    })
  }

  flip9 = () => {
    this.setState({
      flip9: !this.state.flip9
    })
  }

  render = () => {
    return (
      <div className='welcome-container'>
        <div>
          <img src={img2}></img>
          <h1>WELCOME!</h1>
          {/* <p>Here are 10 top reasons why I'd love to be the newest member of the KBS family</p> */}
        </div>
        {this.state.currentPage === 0 ?
          null :
          <Link to={`page${this.state.currentPage - 1}`}>
            <div className='arrow left-arrow' onClick={this.decreasePage}>
              <div className='arrow-icon fa fa-arrow-circle-o-left'></div>
            </div>
          </Link>
        }

        {this.state.currentPage === 10 ?
          null :
          <Link to={`page${this.state.currentPage + 1}`}>
            <div className='arrow right-arrow' onClick={this.increasePage}>
              <span className='arrow-icon fa fa-arrow-circle-o-right'></span>
            </div>
          </Link>
        }
        <Route path="/page0" render={() => <TopTen flip={this.flip} flip0={this.state.flip0}/>}/>
        <Route path="/page1" render={() => <Page1 flip={this.flip1} flip1={this.state.flip1} increasePage={this.increasePage}/>}/>
        <Route path="/page2" render={() => <Page2 flip={this.flip2} flip2={this.state.flip2} increasePage={this.increasePage}/>}/>
        <Route path="/page3" render={() => <Page3 flip={this.flip3} flip3={this.state.flip3} increasePage={this.increasePage}/>}/>
        <Route path="/page4" render={() => <Page4 flip={this.flip4} flip4={this.state.flip4} increasePage={this.increasePage}/>}/>
        <Route path="/page5" render={() => <Page5 flip={this.flip5} flip5={this.state.flip5} increasePage={this.increasePage}/>}/>
        <Route path="/page6" render={() => <Page6 flip={this.flip6} flip6={this.state.flip6} increasePage={this.increasePage}/>}/>
        <Route path="/page7" render={() => <Page7 flip={this.flip7} flip7={this.state.flip7} increasePage={this.increasePage}/>}/>
        <Route path="/page8" render={() => <Page8 flip={this.flip8} flip8={this.state.flip8} increasePage={this.increasePage}/>}/>
        <Route path="/page9" render={() => <Page9 flip={this.flip9} flip9={this.state.flip9} increasePage={this.increasePage}/>}/>
        <Route path="/page10" render={() => <Page10 flip={this.flip} flip10={this.state.flip10}/>}/>
      </div>
    )
  }
}

export default Welcome
