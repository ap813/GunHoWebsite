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

export default class LoginNav extends Component {

  constructor(props) {
    super(props)

    this.renderNav = this.renderNav.bind(this)
    this.renderNoNav = this.renderNoNav.bind(this)
  }

  renderNoNav() {

  }

  renderNav() {
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

  render() {
    return(
      this.props.Profile ? this.renderNoNav() : this.renderNav()
    )
  }
}
