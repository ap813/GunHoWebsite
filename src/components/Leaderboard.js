import React, { Component } from 'react'
import '../css/page.css'
import {
    Button,
    Table,
    Container} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';
import $ from 'jquery';

export default class Leaderboard extends Component {

  constructor(props) {
    super()

    this.state = {
      board:[]
    }

    this.left = this.left.bind(this)
    this.right = this.right.bind(this)
  }

  componentWillMount() {

    var data, success
    // Load in all of the leaderboard database 1 - 100

    // Pull stuff from database (this is JSON Blob)
    $.ajax({
      dataType: "json",
      url: "http://64.37.54.24/getAllScores.php",
      data: data,
      success: function(){console.log(JSON.parse(data))}
    });

    // Update state array (JSON.stringify)
    this.setState({
      board: []
    })
  }

  left() {
    // If available load past 10 best scores
  }

  right() {
    // If available load next 10 best scores
  }

  render() {
    return(

      <div className="outer">
        <div className="middle">
          <div className="inner">
          <p className="leaderboard">
          <Table hover>
            <thead>
              <tr>
                <th>Ranking</th>
                <th>Username</th>
                <th>High Score</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>Davy Jones</td>
                <td>9001</td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>Blackbeard</td>
                <td>1</td>
              </tr>
            </tbody>
          </Table>

          <Button onClick={this.left}>Back</Button>
          {' '}
          <Button onClick={this.right}>Next</Button>
          </p>
            </div>
          </div>
        </div>

    )
  }
}
