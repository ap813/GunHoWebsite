import React, {Component} from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import '../css/page.css'
import {
  Button,
  Form,
  FormGroup,
  Label,
  Input
} from 'reactstrap'

export default class AddFriends extends Component {
  constructor(props) {
    super(props)

    this.state = {
      friend: ''
    }

    this.handleNewFriend = this.handleNewFriend.bind(this)
    this.addFriend = this.addFriend.bind(this)
  }

  handleNewFriend(event) {
    this.setState({
      friend: event.target.value
    })
  }

  addFriend(event) {

    //XML Add Friend Request
    var username = this.props.user
    var friend = this.state.friend

    var jsonPayload = '{"username1" : "' + username + '","username2" : "' + friend +'"}'

    var xhr = new XMLHttpRequest();
    xhr.open("POST", "http://64.37.54.24/addFriend.php", false)


    try {
      xhr.send(jsonPayload)

      var text = JSON.parse(xhr.responseText)

      if(text.error !== "") {
        alert("We couldn't find" + friend + ".")
        event.preventDefault()
        return
      }

      alert(friend + " has been added to your friends list.")
      console.log("JSON Add Sent");
      event.preventDefault();
    }
    catch(err) {
      alert("We couldn't find" + friend + ".")
      console.log("Error: " + err);
      event.preventDefault();
    }
  }

  render() {
    return(
      <div>
        <Form onSubmit={this.addFriend}>
          <FormGroup>
            <br />
            <Input value={this.state.friend} onChange={this.handleNewFriend} placeholder="Your Friend" />
          </FormGroup>
          <p className="middle">
            <Button type= "submit" value="Submit">Submit</Button>
          </p>
        </Form>
      </div>
    )
  }
}
