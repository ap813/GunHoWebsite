import React, { Component } from 'react'
import '../css/page.css'
import { Button } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';

export default class LeaderButton extends Component {

    constructor(props) {
      super()

      this.state = {
        visible: true
      }

      this.renderNotVisibleBack = this.renderNotVisibleBack.bind(this)
      this.renderVisibleBack = this.renderVisibleBack.bind(this)
      this.renderNotVisibleNext = this.renderNotVisibleNext.bind(this)
      this.renderVisibleNext = this.renderVisibleNext.bind(this)
    }

    componentWillMount() {
      // Check which button we have
      if(this.props.type) {
        this.setState({
          visible: false
        })
      }
    }

    renderNotVisibleBack() {
      return(
        <Button disabled>Back</Button>
      )
    }

    renderVisibleBack() {
      return(
        <Button onClick={this.props.action}>Back</Button>
      )
    }

    renderNotVisibleNext() {
      return(
        <Button disabled>Next</Button>
      )
    }

    renderVisibleNext() {
      return(
        <Button onClick={this.props.action}>Next</Button>
      )
    }

    render() {
      // 4 types
      // 1) Back Button not visible
      // 2) Back Button visible
      // 3) Next Button not visible
      // 4) Next Button visible
      return(
        (this.props.type && this.props.counter<10) ?
        (this.renderNotVisibleBack()) :
        (this.props.type && this.props.counter>=10) ?
        (this.renderVisibleBack()) :
        (!this.props.type && this.props.counter>=90) ?
        (this.renderNotVisibleNext()) :
        (this.renderVisibleNext())
      )
    }
}
