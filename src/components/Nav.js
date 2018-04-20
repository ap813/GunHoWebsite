import React, {Component} from 'react'
import '../css/page.css'
import {
  Button,
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';

export default class Navigation extends Component {
  constructor(props) {
    super(props)

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
    return(
      <Navbar color="white" light expand="md">
        <NavbarBrand onClick={this.props.info}><h1>Gun Ho</h1></NavbarBrand>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink><Button onClick={this.props.leader} color="primary">Leaderboards</Button></NavLink>
            </NavItem>
            <NavItem>
              <NavLink><Button onClick={this.props.profile} color="info">Profile</Button></NavLink>
            </NavItem>
            <NavItem>
              <NavLink><Button onClick={this.props.logout} color="success">Log Out</Button></NavLink>
            </NavItem>
          </Nav>
      </Navbar>
    )
  }

  render() {
    return( this.props.logged ? this.renderLog() : this.renderNoLog())
  }
}
