import React, { Component } from 'react'
import {
  Button,
  Form,
  FormGroup,
  Label,
  Input,
} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';
import Page from '../page.js'
import LoggedPage from './LoggedPage.js'
import Navigation from './Nav'
import LoginNav from './LoginNav'

export default class LoginForm extends Component {

    constructor(props) {
      super(props)

      this.state = {
        user: '',
        password: '',
        Profile: false
      }

      this.submit = this.submit.bind(this)
      this.handleUser = this.handleUser.bind(this)
      this.handlePass = this.handlePass.bind(this)
      this.renderProfile = this.renderProfile.bind(this)
      this.renderLogin = this.renderLogin.bind(this)
    }

    submit(event) {
      // Send info to DB and check if the account is valid
      var user = this.state.user
      var password = window.md5(this.state.password)
      var userId = 0

      var jsonPayload = '{"username" : "' + user + '", "password" : "' + password + '"}';
	    var url = 'http://64.37.54.24/login.php';

      var xhr = new XMLHttpRequest();
	    xhr.open("POST", url, false);

      try
	    {
    		xhr.send(jsonPayload);

    		var jsonObject = JSON.parse( xhr.responseText );

    		userId = jsonObject.id;

    		if( userId < 1 )
    		{
    			alert("Username or Password Incorrect")
          event.preventDefault()
    			return;
    		}

          alert("Login Successful")
          this.setState({
            Profile: true
          })
          event.preventDefault()
          return
      	}
      	catch(err)
      	{
          event.preventDefault()
      		console.log("Error: " + err);
      	}
    }

    handleUser(event) {
      this.setState({user: event.target.value})
    }

    handlePass(event) {
      this.setState({password: event.target.value})
    }

    renderLogin() {

      return(

          <div>

            <LoginNav
              Profile={this.state.Profile}
              info={this.props.info}
              leader={this.props.leader}
              signup={this.props.signup}
              login={this.props.login}
              profile={this.props.info}
              />

            <div className="outerLogin">
              <p className="login">
                <Form onSubmit={this.submit}>
                  <h3 className="middle">Login</h3>
                  <FormGroup>
                  <br />
                  <Label for="username">Username</Label>
                  <Input type="username" value={this.state.user} onChange={this.handleUser} placeholder="" />
                  <br />
                  <Label for="password">Password</Label>
                  <Input type="password" value={this.state.password} onChange={this.handlePass} placeholder="" />
                  <br />
                  </FormGroup>
                  <Button type="submit" value="Submit">Submit</Button>
                </Form>
              </p>
            </div>

        </div>
      )
    }

    renderProfile() {
      return(
        <LoggedPage info={this.props.info} user={this.state.user} profile={this.Profile} />
      )
    }

    render() {
      return(this.state.Profile ? this.renderProfile() : this.renderLogin())
    }
}
