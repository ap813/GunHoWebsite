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
import Info from './components/Info'
import Navigation from './components/Nav'

class Page extends Component {

  constructor(props) {

    super(props)
    this.state = {
      Leaderboard : false,
      Profile : false,
      Signup : false,
      Login : false,
      username: '',
    }

    this.leader = this.leader.bind(this)
    this.profile = this.profile.bind(this)
    this.signup = this.signup.bind(this)
    this.info = this.info.bind(this)
    this.login = this.login.bind(this)
    this.updateUsername = this.updateUsername.bind(this)
    this.renderInfo = this.renderInfo.bind(this)
    this.renderLeader = this.renderLeader.bind(this)
    this.renderLogin = this.renderLogin.bind(this)
    this.renderSignup = this.renderSignup.bind(this)
    this.renderProfile = this.renderProfile.bind(this)
  }

  leader() {
    this.setState ({
      Leaderboard : true,
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
      Signup : true,
      Login : false
    })
  }

  login() {
    this.setState({
      Leaderboard : false,
      Signup : false,
      Login : true
    })
  }

  info() {
    this.setState({
      Leaderboard : false,
      Signup : false,
      Login : false
    })
  }

  updateUsername(user) {
    this.setState({
      username: user
    })
  }

  updateProfile() {
    this.setState({
      Profile: true
    })
  }

  renderSignup() {
    return (
      <div>
        <Navigation
          info={this.info}
          leader={this.leader}
          signup={this.signup}
          login={this.login}
          profile={this.profile}
          logged={this.state.Profile}
        />

        <SignUpForm />
      </div>
    )
  }

  renderLeader() {
    return (
      <div>
        <Navigation
          info={this.info}
          leader={this.leader}
          signup={this.signup}
          login={this.login}
          profile={this.profile}
          logged={this.state.Profile}
        />

        <Leaderboard />
      </div>
    )
  }

  renderProfile() {
    return(
      <div>
        <Navigation
          info={this.info}
          leader={this.leader}
          signup={this.signup}
          login={this.login}
          profile={this.profile}
          logged={this.state.Profile}
        />
      </div>
    )
  }

  renderLogin() {

    var user=''

    return(
      <div>
        <Navigation
          info={this.info}
          leader={this.leader}
          signup={this.signup}
          login={this.login}
          profile={this.profile}
          logged={this.state.Profile}
        />

        <LoginForm logged={this.updateProfile} />
      </div>
    )
  }

  renderInfo() {
    return(
      <div>
        <Navigation
          info={this.info}
          leader={this.leader}
          signup={this.signup}
          login={this.login}
          profile={this.profile}
          logged={this.state.Profile}
        />

        <Info />
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
