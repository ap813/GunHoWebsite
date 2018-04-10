import React, { Component } from 'react'
import { Table } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';

export default class Leaderboard extends Component {

  constructor(props) {
    super()
  }

  render() {
    return(
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
        </p>
    )
  }
}
