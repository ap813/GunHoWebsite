import React, {Component} from 'react'
import './css/page.css'
import {
  Button,
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Form,
  FormGroup,
  Label,
  Input,
  FormText,
  Table,
  Container,
  Row,
  Col
  } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';
import Leaderboard from './components/Leaderboard'
import SignUpForm from './components/SignUpForm'
import LoginForm from './components/LoginForm'
import Navigation from './components/Navigation'

class Page extends Component {

  constructor(props) {

    super(props)
    this.state = {
      Leaderboard : false,
      Profile : false,
      Signup : false,
      Login : false
    }

    this.leader = this.leader.bind(this)
    this.profile = this.profile.bind(this)
    this.signup = this.signup.bind(this)
    this.info = this.info.bind(this)
    this.login = this.login.bind(this)
    this.renderInfo = this.renderInfo.bind(this)
    this.renderLeader = this.renderLeader.bind(this)
    this.renderLogin = this.renderLogin.bind(this)
    this.renderSignup = this.renderSignup.bind(this)
    this.renderProfile = this.renderProfile.bind(this)
  }

  leader() {
    this.setState ({
      Leaderboard : true,
      Profile : false,
      Signup : false,
      Login : false
    })
  }

  profile() {
    this.setState({
      Leaderboard : false,
      Profile : true,
      Signup : false,
      Login : false
    })
  }

  signup() {
    this.setState({
      Leaderboard : false,
      Profile : false,
      Signup : true,
      Login : false
    })
  }

  login() {
    this.setState({
      Leaderboard : false,
      Profile : false,
      Signup : false,
      Login : true
    })
  }

  info() {
    this.setState({
      Leaderboard : false,
      Profile : false,
      Signup : false,
      Login : false
    })
  }

  renderSignup() {
    return (
      <div>
        <Navbar color="white" light expand="md">
          <NavbarBrand onClick={this.info}><h1>Gun Ho</h1></NavbarBrand>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink><Button onClick={this.leader} color="primary">Leaderboards</Button></NavLink>
              </NavItem>
              <NavItem>
                <NavLink><Button onClick={this.signup} color="info">Signup</Button></NavLink>
              </NavItem>
              <NavItem>
                <NavLink><Button onClick={this.login} color="success">Login</Button></NavLink>
              </NavItem>
            </Nav>
        </Navbar>

        <SignUpForm />

      </div>
    )
  }

  renderLeader() {
    return (
      <div>
        <Navbar color="white" light expand="md">
          <NavbarBrand onClick={this.info}><h1>Gun Ho</h1></NavbarBrand>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink><Button onClick={this.leader} color="primary">Leaderboards</Button></NavLink>
              </NavItem>
              <NavItem>
                <NavLink><Button onClick={this.signup} color="info">Signup</Button></NavLink>
              </NavItem>
              <NavItem>
                <NavLink><Button onClick={this.login} color="success">Login</Button></NavLink>
              </NavItem>
            </Nav>
        </Navbar>

        <Leaderboard />

      </div>
    )
  }

  renderProfile() {
    return(
      <div>
        <Navbar color="white" light expand="md">
          <NavbarBrand onClick={this.info}><h1>Gun Ho</h1></NavbarBrand>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink><Button onClick={this.leader} color="primary">Leaderboards</Button></NavLink>
              </NavItem>
              <NavItem>
                <NavLink><Button onClick={this.signup} color="info">Signup</Button></NavLink>
              </NavItem>
              <NavItem>
                <NavLink><Button onClick={this.login} color="success">Login</Button></NavLink>
              </NavItem>
            </Nav>
        </Navbar>
      </div>
    )
  }

  renderLogin() {
    return(
      <div>
        <Navbar color="white" light expand="md">
          <NavbarBrand onClick={this.info}><h1>Gun Ho</h1></NavbarBrand>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink><Button onClick={this.leader} color="primary">Leaderboards</Button></NavLink>
              </NavItem>
              <NavItem>
                <NavLink><Button onClick={this.signup} color="info">Signup</Button></NavLink>
              </NavItem>
              <NavItem>
                <NavLink><Button onClick={this.login} color="success">Login</Button></NavLink>
              </NavItem>
            </Nav>
        </Navbar>

        <LoginForm />
      </div>
    )
  }

  renderInfo() {
    return(
      <div>
        <Navbar color="white" light expand="md">
          <NavbarBrand onClick={this.info}><h1>Gun Ho</h1></NavbarBrand>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink><Button onClick={this.leader} color="primary">Leaderboards</Button></NavLink>
              </NavItem>
              <NavItem>
                <NavLink><Button onClick={this.signup} color="info">Signup</Button></NavLink>
              </NavItem>
              <NavItem>
                <NavLink><Button onClick={this.login} color="success">Login</Button></NavLink>
              </NavItem>
            </Nav>
        </Navbar>
      </div>
    )
  }

  render() {
		return (this.state.Signup ? this.renderSignup() :
            (this.state.Leaderboard ? this.renderLeader() :
            (this.state.Profile ? this.renderProfile() :
            (this.state.Login ? this.renderLogin() : this.renderInfo()))))
	}
}

export default Page
