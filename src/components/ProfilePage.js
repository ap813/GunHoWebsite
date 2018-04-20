import React, {Component} from 'react'
import '../css/page.css'

import 'bootstrap/dist/css/bootstrap.css'
import {
  Button,
  Container,
  Row,
  Col
} from 'reactstrap'
import AddFriends from './AddFriends'
import FriendsList from './FriendsList'
import DeleteFriends from './DeleteFriends'

export default class ProfilePage extends Component {

  constructor(props) {
    super(props)

  }

  render() {
    return(
      <div className="outer">
        <div class="profile">
          <Container>
            <Row>
              <Col>
                <p className="middle">
                  <h2>Friends List</h2>
                  <FriendsList user={this.props.user}/>
                </p>
              </Col>
              <Col>
                <p className="middle">
                  <h2>Add Friends</h2>
                  <AddFriends user={this.props.user}/>
                </p>
                <br />
                <p className="middle">
                  <h2>Delete Friends</h2>
                  <DeleteFriends user={this.props.user}/>
                </p>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    )
  }
}
