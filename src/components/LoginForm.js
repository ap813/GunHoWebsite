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
      super()

      this.submit = this.submit.bind(this)
    }

    submit() {
      // Send info to DB and check if the account is valid
    }

    render() {
      return(
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

          <Button onClick={this.submit} size="lg">Submit</Button>

        </p>
      )
    }
}
