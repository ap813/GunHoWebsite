import React, { Component } from 'react'
import '../css/page.css'
import { Table } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';
import LeaderButtons from './LeaderButtons'

export default class Leaders extends Component {

    constructor(props) {
      super()

      this.state = {
        counter: 0
      }

      this.left = this.left.bind(this)
      this.right = this.right.bind(this)
    }

    componentWillMount() {
      // If we get boards from leaderboard and it doesn't
      // have more than 10 entries, leave
      if(this.props.boards.length < 10) {
        console.log("Error in loading from DB");
      }
    }

    left() {
      if(this.state.counter <= 0) return

      this.setState({
        counter: this.state.counter - 10
      })
    }

    right() {
      if(this.state.counter >= 90) return

      // If we can't go right because of lack of entries
      // We need to disable the right button
      if((this.props.boards.length - 10) <= (this.state.counter + 10) ) return

      this.setState({
        counter: this.state.counter + 10
      })
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
                  <th scope="row">{this.state.counter+1}</th>
                  <td>{this.props.boards[this.state.counter].user}</td>
                  <td>{this.props.boards[this.state.counter].score}</td>
                </tr>
                <tr>
                  <th scope="row">{this.state.counter+2}</th>
                  <td>{this.props.boards[this.state.counter+1].user}</td>
                  <td>{this.props.boards[this.state.counter+1].score}</td>
                </tr>
                <tr>
                  <th scope="row">{this.state.counter+3}</th>
                  <td>{this.props.boards[this.state.counter+2].user}</td>
                  <td>{this.props.boards[this.state.counter+2].score}</td>
                </tr>
                <tr>
                  <th scope="row">{this.state.counter+4}</th>
                  <td>{this.props.boards[this.state.counter+3].user}</td>
                  <td>{this.props.boards[this.state.counter+3].score}</td>
                </tr>
                <tr>
                  <th scope="row">{this.state.counter+5}</th>
                  <td>{this.props.boards[this.state.counter+4].user}</td>
                  <td>{this.props.boards[this.state.counter+4].score}</td>
                </tr>
                <tr>
                  <th scope="row">{this.state.counter+6}</th>
                  <td>{this.props.boards[this.state.counter+5].user}</td>
                  <td>{this.props.boards[this.state.counter+5].score}</td>
                </tr>
                <tr>
                  <th scope="row">{this.state.counter+7}</th>
                  <td>{this.props.boards[this.state.counter+6].user}</td>
                  <td>{this.props.boards[this.state.counter+6].score}</td>
                </tr>
                <tr>
                  <th scope="row">{this.state.counter+8}</th>
                  <td>{this.props.boards[this.state.counter+7].user}</td>
                  <td>{this.props.boards[this.state.counter+7].score}</td>
                </tr>
                <tr>
                  <th scope="row">{this.state.counter+9}</th>
                  <td>{this.props.boards[this.state.counter+8].user}</td>
                  <td>{this.props.boards[this.state.counter+8].score}</td>
                </tr>
                <tr>
                  <th scope="row">{this.state.counter+10}</th>
                  <td>{this.props.boards[this.state.counter+9].user}</td>
                  <td>{this.props.boards[this.state.counter+9].score}</td>
                </tr>
              </tbody>
            </Table>

            <LeaderButtons type={true}
                           board={this.props.boards.length}
                           action={this.left}
                           counter={this.state.counter} />
            {' '}
            <LeaderButtons type={false}
                           board={this.props.boards.length}
                           action={this.right}
                           counter={this.state.counter}/>
            </p>
              </div>
            </div>
          </div>
        )
    }
}
