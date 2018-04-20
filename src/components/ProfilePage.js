import React, {Component} from 'react'
import '../css/page.css'

import 'bootstrap/dist/css/bootstrap.css'
import {
  Container,
  Row,
  Col
} from 'reactstrap'
import AddFriends from './AddFriends'
import FriendsList from './FriendsList'
import DeleteFriends from './DeleteFriends'

export default class ProfilePage extends Component {

  render() {
    return(
      <div className="outerProfile">
        <div className="profile">
          <Container>
            <Row>
              <Col>
                <div className="middle">
                  <h2>Friends List</h2>
                  <FriendsList user={this.props.user}/>
                </div>
              </Col>
              <Col>
                <div className="middle">
                  <h2>Add Friends</h2>
                  <AddFriends user={this.props.user}/>
                </div>
                <br />
                <div className="middle">
                  <h2>Delete Friends</h2>
                  <DeleteFriends user={this.props.user}/>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    )
  }
}
