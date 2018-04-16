import React, { Component } from 'react'
import '../css/page.css'
import {
  Button,
  Form,
  FormGroup,
  Label,
  Input
} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';

export default class SignUpForm extends Component {

  constructor(props) {
    super(props)

    this.state = {
      username: '',
      nickname: '',
      password: '',
      confirmPass: ''
    }

    this.request = this.request.bind(this)

    this.handleUser = this.handleUser.bind(this)
    this.handleNickname = this.handleNickname.bind(this)
    this.handlePass = this.handlePass.bind(this)
    this.handleConfirm = this.handleConfirm.bind(this)
  }

  // requests that a user be made in the database
  request(event) {

    var user = this.state.username
    var nick = this.state.nickname
	  var password = this.state.password
    var confirmPass = this.state.confirmPass

    console.log(user);
    console.log(nick);
    console.log(password);
    console.log(confirmPass);

    if(password !== confirmPass) {
      alert("Passwords do not match!")
      return
    }

    // Username is already taken
    var jsonPayload = '{"username" : "' + user + '", "password" : "' + window.md5(password) + '", "nickname" : "' + nick + '"}';
    console.log(jsonPayload);
  	var url = 'http://64.37.54.24/addUser.php';

  	var xhr = new XMLHttpRequest();
  	xhr.open("POST", url, false);

  	try
  	{
  		xhr.send(jsonPayload);

  		var jsonObject = JSON.parse( xhr.responseText );

                  console.log(jsonObject);

  		alert("SignUp Successful")
      return
  	}
  	catch(err)
  	{
      alert("Error occured:" + err)
  		event.preventDefault();
  	}

  }

  handleUser(event) {
    this.setState({username: event.target.value})
  }

  handleNickname(event) {
    this.setState({nickname: event.target.value})
  }

  handlePass(event) {
    this.setState({password: event.target.value})
  }

  handleConfirm(event) {
    this.setState({confirmPass: event.target.value})
  }

  render() {

    return(
      <div className="outer">
        <div class="submitForm">
          <Form onSubmit={this.request}>
            <h3 className="middle">Create an Account</h3>
            <FormGroup>
              <Label for="username">Username</Label>
              <Input value={this.state.username} type="text" onChange = {this.handleUser} placeholder="E.g. Richard Leinecker" />
              <br />
              <Label for="email">Nickname</Label>
              <Input value={this.state.nickname} type="text" onChange = {this.handleNickname} placeholder="E.g. Blackbeard" />
              <br />
              <Label for="password">Password</Label>
              <Input value={this.state.password} type="password" onChange = {this.handlePass} placeholder="* * * * * * *" />
              <br />
              <Label for="confirmPass">Confirm Password</Label>
              <Input value={this.state.confirmPass} type="password" onChange = {this.handleConfirm} placeholder="* * * * * * *" />
              <br />
            </FormGroup>
            <p className="middle">
              <Button type="submit" value="Submit" size="lg">Submit</Button>
            </p>
          </Form>
        </div>
      </div>
    )
  }

}
