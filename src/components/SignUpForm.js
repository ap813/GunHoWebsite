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
      firstName: '',
      lastName: '',
      username: '',
      password: '',
      confirmPass: '',
      email: ''
    }

    this.request = this.request.bind(this)

    this.handleFirst = this.handleFirst.bind(this)
    this.handleLast = this.handleLast.bind(this)
    this.handleUser = this.handleUser.bind(this)
    this.handlePass = this.handlePass.bind(this)
    this.handleConfirm = this.handleConfirm.bind(this)
    this.handleEmail = this.handleEmail.bind(this)
  }

  // requests that a user be made in the database
  request(event) {

    var first = this.state.firstName
    var last = this.state.lastName
    var user = this.state.username
	  var password = this.state.password
    var confirmPass = this.state.confirmPass
	  var email = this.state.email

    console.log(first);
    console.log(last);
    console.log(user);
    console.log(password);
    console.log(confirmPass);
    console.log(email);

    if(password !== confirmPass) {
      alert("Passwords do not match!")
      return
    }

    // Username is already taken

    var jsonPayload = '{"username" : "' + user + '", "password" : "' + window.md5(password) + '", "nickname" : "' + first + '_' + last + '"}';
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

  handleFirst(event) {
    this.setState({firstName: event.target.value})
  }

  handleLast(event) {
    this.setState({lastName: event.target.value})
  }

  handleUser(event) {
    this.setState({username: event.target.value})
  }

  handlePass(event) {
    this.setState({password: event.target.value})
  }

  handleConfirm(event) {
    this.setState({confirmPass: event.target.value})
  }

  handleEmail(event) {
    this.setState({email: event.target.value})
  }

  render() {

    return(
      <div className="outer">
        <div class="submitForm">
          <Form onSubmit={this.request}>
            <h3 className="middle">Create an Account</h3>
            <FormGroup>
              <Label for="firstName">First Name</Label>
              <Input value={this.state.firstName} type="text" onChange = {this.handleFirst} placeholder="Richard" />
              <br />
              <Label for="lastName">Last Name</Label>
              <Input value={this.state.lastName} type="text" onChange = {this.handleLast} placeholder="Leinecker" />
              <br />
              <Label for="username">Username</Label>
              <Input value={this.state.username} type="text" onChange = {this.handleUser} placeholder="E.g. Blackbeard" />
              <br />
              <Label for="password">Password</Label>
              <Input value={this.state.password} type="password" onChange = {this.handlePass} placeholder="* * * * * * *" />
              <br />
              <Label for="confirmPass">Confirm Password</Label>
              <Input value={this.state.confirmPass} type="password" onChange = {this.handleConfirm} placeholder="* * * * * * *" />
              <br />
              <Label for="email">Email</Label>
              <Input value={this.state.email} type="email" onChange = {this.handleEmail} placeholder="Blackbeard@gmail.com" />
              <br />
            </FormGroup>
            <p className="middle">
              <input type="submit" value="Submit" />
            </p>
          </Form>
        </div>
      </div>
    )
  }

}
