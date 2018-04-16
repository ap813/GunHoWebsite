import React, { Component } from 'react'
import {
  Button,
  Form,
  FormGroup,
  Label,
  Input,
} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';

export default class LoginForm extends Component {

    constructor(props) {
      super(props)

      this.state = {
        user: '',
        password: ''
      }

      this.submit = this.submit.bind(this)
      this.handleUser = this.handleUser.bind(this)
      this.handlePass = this.handlePass.bind(this)
    }

    submit(event) {
      // Send info to DB and check if the account is valid
      var user = this.state.user
      var password = this.state.password
      var userId = 0

      console.log(user);
      console.log(password);

      var jsonPayload = '{"username" : "' + user + '", "password" : "' + window.md5(password) + '"}';
	    var url = 'http://64.37.54.24/login.php';

      var xhr = new XMLHttpRequest();
	    xhr.open("POST", url, false);

      try
	    {
    		xhr.send(jsonPayload);

    		var jsonObject = JSON.parse( xhr.responseText );

        console.log(jsonObject);

    		userId = jsonObject.id;

    		if( userId < 1 )
    		{
    			alert("Username or Password Incorrect")
    			return;
    		}

          alert("Login Successful")
          return
      	}
      	catch(err)
      	{
      		console.log("Error: " + err);
      	}
    }

    handleUser(event) {
      this.setState({user: event.target.value})
    }

    handlePass(event) {
      this.setState({password: event.target.value})
    }

    render() {
      return(
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
              <Input type="password" value={this.state.password} onChange={this.handlePass}placeholder="" />
              <br />
              </FormGroup>
              <input type="submit" value="Submit"></input>
            </Form>
          </p>
        </div>
      )
    }
}
