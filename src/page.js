import React, {Component} from 'react'
import './page.css'
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

      <p class = "paragraph">
          Welcome aboard. Gun Ho is a brand new action packed adventure. <br />
          Which Utilizes the best of new iOS AR technology.
      </p>

      <p class="submitForm">

        <Form>
          <FormGroup>
            <Label for="firstName">First Name</Label>
            <Input type="firstname" name="firstname" id="firstName" placeholder="Richard" />
            <br />
            <Label for="lastName">Last Name</Label>
            <Input type="lastname" name="lastname" id="lastName" placeholder="Leinecker" />
            <br />
            <Label for="username">Username</Label>
            <Input type="username" name="username" id="exampleUser" placeholder="E.g. Blackbeard" />
            <br />
            <Label for="password">Password</Label>
            <Input type="password" name="password" id="examplePassword" placeholder="* * * * * * *" />
            <br />
            <Label for="confirmPass">Confirm Password</Label>
            <Input type="password" name="confirmPass" id="confirmPass" placeholder="* * * * * * *" />
            <br />
            <Label for="email">Email</Label>
            <Input type="email" name="email" id="exampleEmail" placeholder="Blackbeard@gmail.com" />
          </FormGroup>
        </Form>

      </p>

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

        <p className="leaderboard">
          <Table hover>
            <thead>
              <tr>
                <th>Ranking</th>
                <th>Username</th>
                <th>High Score</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>Davy Jones</td>
                <td>9001</td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>Blackbeard</td>
                <td>1</td>
              </tr>
            </tbody>
          </Table>
        </p>

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

        <p className="login">
          <Form>
            <FormGroup>
            <br />
            <Label for="username">Username</Label>
            <Input type="username" name="username" id="exampleUser" placeholder="" />
            <br />
            <Label for="password">Password</Label>
            <Input type="password" name="password" id="examplePassword" placeholder="" />
            <br />
            </FormGroup>
          </Form>
        </p>
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
