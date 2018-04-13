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
    super()

    this.request = this.request.bind(this)
    this.warning = this.warning.bind(this)
  }

  // requests that a user be made in the database
  request(firstName, lastName, username, password, confirmPass, email) {

    //document.getElementById("frm").submit()

    // Test for passing of parameters
    console.log(firstName + ' ' +
                lastName + ' ' +
                password + ' ' +
                confirmPass + ' ' +
                email);
  }

  warning() {
    // tells user that some account info is not valid
  }

  render() {

    return(
      <div className="outer">
        <div class="submitForm">
          <Form onSubmit={this.request()}>
            <h3 className="middle">Create an Account</h3>
            <FormGroup>
              <Label for="firstName">First Name</Label>
              <Input type="text" name="firstname" id="firstName" placeholder="Richard" />
              <br />
              <Label for="lastName">Last Name</Label>
              <Input type="text" name="lastname" id="lastName" placeholder="Leinecker" />
              <br />
              <Label for="username">Username</Label>
              <Input type="text" name="username" id="exampleUser" placeholder="E.g. Blackbeard" />
              <br />
              <Label for="password">Password</Label>
              <Input type="password" name="password" id="examplePassword" placeholder="* * * * * * *" />
              <br />
              <Label for="confirmPass">Confirm Password</Label>
              <Input type="password" name="confirmPass" id="confirmPass" placeholder="* * * * * * *" />
              <br />
              <Label for="email">Email</Label>
              <Input type="email" name="email" id="exampleEmail" placeholder="Blackbeard@gmail.com" />
              <br />
              <p className="middle">
              <Button value="Submit" size="lg">Submit</Button>
              </p>
            </FormGroup>
          </Form>
        </div>
      </div>
    )
  }

}
