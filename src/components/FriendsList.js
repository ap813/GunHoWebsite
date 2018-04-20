import React, {Component} from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import '../css/page.css'
import {
  Button,
  Table
} from 'reactstrap'
import {$,jQuery} from 'jquery';



export default class FriendsList extends Component {
  constructor(props) {
    super(props)

    this.state = {
      friends:[]
    }

    this.add = this.add.bind(this)
  }

  componentWillMount() {

    var username = this.props.user

    var jsonPayload = '{"username":"' + username + '"}'

    var xhr = new XMLHttpRequest();
    xhr.open("POST", "http://64.37.54.24/getFriendScores.php", false);

    xhr.send(jsonPayload);

    var jsonObject = JSON.parse( xhr.responseText );

    for(var i = 0; i < jsonObject.length; i++)
    {
        this.add(jsonObject[i].nickname,jsonObject[i].score)
    }
  }

  refresh(event) {
    var username = this.props.user

    var jsonPayload = '{"username":"' + username + '"}'

    var xhr = new XMLHttpRequest();
    xhr.open("POST", "http://64.37.54.24/getFriendScores.php", false);

    xhr.send(jsonPayload);

    var jsonObject = JSON.parse( xhr.responseText );

    for(var i = 0; i < jsonObject.length; i++)
    {
        this.add(jsonObject[i].nickname,jsonObject[i].score)
    }

    event.preventDefault()
  }

  add(nick, scr) {
    this.setState(prevState => ({
      friends: [
        ...prevState.friends,
        {
          nickname: nick,
          score: scr
        }
      ]
    }));
  }

  render() {
    return(
      <div>
        <Table hover>
          <thead>
            <tr>
              <th>Username</th>
              <th>Score</th>
            </tr>
          </thead>
          <tbody>
            {
              this.state.friends.map(friend => {
                return(
                  <tr>
                    <th>{friend.nickname}</th>
                    <td>{friend.score}</td>
                  </tr>
                )
              }
            )
            }
          </tbody>

        </Table>
      </div>
    )
  }
}
