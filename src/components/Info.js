import React, { Component } from 'react'
import '../css/page.css'
import {
  Button,
  Row,
  Col
} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';
import CarouselRotator from './CarouselRotator'

export default class Info extends Component {
  constructor(props) {
    super(props)

    this.state = {
      Splash: true,
      Req: false
    }

    this.renderReq = this.renderReq.bind(this)
    this.renderSplash = this.renderSplash.bind(this)
    this.renderGame = this.renderGame.bind(this)
    this.requirements = this.requirements.bind(this)
    this.splash = this.splash.bind(this)
    this.game = this.game.bind(this)
  }

  requirements() {
    this.setState({
      Splash: false,
      Req: true
    })
  }

  splash() {
    this.setState({
      Splash: true,
      Req: false
    })
  }

  game() {
    this.setState({
      Splash: false,
      Req: false
    })
  }

  // Renders the requires necessary to play Gun Ho
  renderReq() {
    return(
      <div className="outer">
        <div className="info">
          <h2 className="middle">Requirements</h2>
          <p className="middle">
            Requires iOS 11.3 or later.
            <br />
            <br />
            Compatibile devices:
            <br />
            iPhone 6s / 6s Plus
            <br />
            iPhone 7 / 7 Plus
            <br />
            iPhone SE
            <br />
            iPhone 8 / 8 Plus
            <br />
            iPhone X
            <br />
            iPad Pro: 12.9-inch, 10.5-inch, 9.7-inch
            <br />
            iPad (2017)

          </p>
        </div>
      </div>
    )
  }

  renderSplash() {
    return(
      <div className="outer">
        <div className="info">
          <h1 className="middle">Welcome{this.props.user}</h1>
          <p className="middle">
            <br />
            Gun Ho is a Pirate themed Augmented Reality Tower Defense Game.
          </p>
          <Row>
            <Col>
            <br />
            <br />
            <br />
              <p className="middle">
                <Button onClick={this.requirements}>Requirements</Button>
              </p>
            </Col>
            <Col>
              <br />
              <br />
              <br />
              <p className="middle">
                <Button onClick={this.game}>How To Play</Button>
              </p>
            </Col>
          </Row>
        </div>
      </div>
    )
  }

  renderGame() {
    return(
      <div className="outer">
        <div className="gameplay">
          <h2 className="middle">How To Play</h2>

          <div className="middle">

          <CarouselRotator />

            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <Button onClick={this.splash}>Back</Button>
          </div>
        </div>
      </div>
    )
  }

  render() {
    return (this.state.Splash ? this.renderSplash() :
           (this.state.Req ? this.renderReq() :
           this.renderGame()))
  }
}
