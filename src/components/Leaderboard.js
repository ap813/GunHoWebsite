import React, { Component } from 'react'
import '../css/page.css'
import {
    Button,
    Table } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';

export default class Leaderboard extends Component {

  constructor(props) {
    super()

    this.left = this.left.bind(this)
    this.right = this.right.bind(this)
  }

  left() {
    //
  }

  right() {
    //
  }

  render() {
    return(
      <div className="leaderboard">
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

        </div>
    )
  }
}
