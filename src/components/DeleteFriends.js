import React, {Component} from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import '../css/page.css'
import {
  Button,
  Form,
  FormGroup,
  Input
} from 'reactstrap'

export default class DeleteFriends extends Component {
  constructor(props) {
    super(props)

    this.state = {
      friend: ''
    }

    this.handleNewFriend = this.handleNewFriend.bind(this)
    this.deleteFriend = this.deleteFriend.bind(this)
  }

  handleNewFriend(event) {
    this.setState({
      friend: event.target.value
    })
  }

  deleteFriend(event) {

    //XML Add Friend Request

    var username = this.props.user
    var friend = this.state.friend

    var jsonPayload = '{"username1" : "' + username + '","username2" : "' + friend +'"}'

    var xhr = new XMLHttpRequest();
    xhr.open("POST", "http://64.37.54.24/deleteFriend.php", false)

    try {
      xhr.send(jsonPayload)
      event.preventDefault();
    }
    catch(err) {
      event.preventDefault();
    }
  }

  render() {
    return(
      <div>
        <Form onSubmit={this.deleteFriend}>
          <FormGroup>
            <br />
            <Input value={this.state.friend} onChange={this.handleNewFriend} placeholder="Your Old Friend" />
          </FormGroup>
          <p className="middle">
            <Button type= "submit" value="Submit">Submit</Button>
          </p>
        </Form>
      </div>
    )
  }
}
