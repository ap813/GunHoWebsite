import React, { Component } from 'react'
import '../css/page.css'
import {
    Button,
    Table } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';
import Leaders from './Leaders'

export default class Leaderboard extends Component {

  constructor(props) {
    super()

    this.state = {
      board:[
        { ranking: 1, user: "Davy Jones", score: 500 }
      ]
    }
  }

  componentWillMount() {

    // var data, success
    // Load in all of the leaderboard database 1 - 100

    // Pull stuff from database (this is JSON Blob)
    // $.ajax({
    //   dataType: "json",
    //   url: "http://64.37.54.24/getAllScores.php",
    //   data: data,
    //   success: success
    // });

    // Update state array (JSON.stringify)
    this.setState({
      board: [
        { user: "Davy Jones", score: 500 },
        { user: "Blackbeard", score: 1 },
        { user: "Davy Jones", score: 500 },
        { user: "Blackbeard", score: 1 },
        { user: "Davy Jones", score: 500 },
        { user: "Blackbeard", score: 1 },
        { user: "Davy Jones", score: 500 },
        { user: "Blackbeard", score: 1 },
        { user: "Davy Jones", score: 500 },
        { user: "Blackbeard", score: 1 },
        { user: "Davy Jones", score: 500 },
        { user: "Blackbeard", score: 1 },
        { user: "Davy Jones", score: 500 },
        { user: "Blackbeard", score: 1 },
        { user: "Davy Jones", score: 500 },
        { user: "Blackbeard", score: 1 },
        { user: "Davy Jones", score: 500 },
        { user: "Blackbeard", score: 1 },
        { user: "Davy Jones", score: 500 },
        { user: "Blackbeard", score: 1 },
        { user: "Davy Jones", score: 500 },
        { user: "Blackbeard", score: 1 },
        { user: "Davy Jones", score: 500 },
        { user: "Blackbeard", score: 1 },
      ]
    })
  }

  render() {
    return(
      <Leaders boards={this.state.board}/>
    )
  }
}
