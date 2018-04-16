import React, {Component} from 'react'
import '../css/page.css'
import {
  Button,
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';

export default class Navigation extends Component {
  constructor(props) {
    super(props)

    this.state = {
      loggedin: this.props.logged
    }

    this.renderNoLog = this.renderNoLog.bind(this)
    this.renderLog = this.renderLog.bind(this)
  }

  renderNoLog() {
    return(
      <Navbar color="white" light expand="md">
        <NavbarBrand onClick={this.props.info}><h1>Gun Ho</h1></NavbarBrand>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink><Button onClick={this.props.leader} color="primary">Leaderboards</Button></NavLink>
            </NavItem>
            <NavItem>
              <NavLink><Button onClick={this.props.signup} color="info">Signup</Button></NavLink>
            </NavItem>
            <NavItem>
              <NavLink><Button onClick={this.props.login} color="success">Login</Button></NavLink>
            </NavItem>
          </Nav>
      </Navbar>
    )
  }

  renderLog() {
    <Navbar color="white" light expand="md">
      <NavbarBrand onClick={this.props.info}><h1>Gun Ho</h1></NavbarBrand>
        <Nav className="ml-auto" navbar>
          <NavItem>
            <NavLink><Button onClick={this.props.leader} color="primary">Leaderboards</Button></NavLink>
          </NavItem>
          <NavItem>
            <NavLink><Button onClick={this.props.profile} color="info">Profile</Button></NavLink>
          </NavItem>
        </Nav>
    </Navbar>
  }

  render() {
    return( this.state.loggedin ? this.renderLog() : this.renderNoLog())
  }
}
