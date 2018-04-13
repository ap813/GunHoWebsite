import React, { Component } from 'react'
import '../css/page.css'
import {
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  Row,
  Col
} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';

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
            Gun Ho uses the newly released ARKit 1.5.
            <br />
            This means that you will have to have a
            <br />
            iPhone 6+ or better. It can also be played iPad
            <br />
            if you have an iPad Air 2 or better.
            <br />
            <br />
            <Button onClick={this.splash}>Back</Button>
          </p>
        </div>
      </div>
    )
  }

  renderSplash() {
    return(
      <div className="outer">
        <div className="info">
          <h1 className="middle">Welcome</h1>
          <p>
            Gun Ho is an exciting Augmented Reality Tower Defense Game.
          </p>
          <Row>
            <Col>
              <p className="middle">
                <Button onClick={this.requirements}>Requirements</Button>
              </p>
            </Col>
            <Col>
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
        <div className="info">
          <h2 className="middle">How To Play</h2>
          <p className="middle">

            <br />
            <Button onClick={this.splash}>Back</Button>
          </p>
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
