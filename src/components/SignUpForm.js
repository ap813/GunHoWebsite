import React, { Component } from 'react'
import {
  Form,
  FormGroup,
  Label,
  Input
} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';

export default class SignUpForm extends Component {

  constructor(props) {
    super()
  }

  render() {
    return(
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
    )
  }

}
