import React, { Component } from 'react'
import '../css/page.css'
import {
    Button,
    Table
  } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';
import Leaders from './Leaders'
import {$,jQuery} from 'jquery';

export default class Leaderboard extends Component {

  constructor(props) {
    super(props)

    this.state = {
      board:[]
    }

    this.add = this.add.bind(this)
  }

  componentWillMount() {

    var xhr = new XMLHttpRequest();
    xhr.open("GET", "http://64.37.54.24/getAllScores.php", false);

    xhr.send();

    var jsonObject = JSON.parse( xhr.responseText );

    console.log(jsonObject);

    for(var i = 1; i <= jsonObject.length; i++)
    {
        var scr = jsonObject[i-1].score
        var usr = jsonObject[i-1].username

        this.add(i,usr,scr)
    }
  }

  add(i, usr, scr) {
    this.setState(prevState => ({
      board: [
        ...prevState.board,
        {
          ranking: i,
          user: usr,
          score: scr
        }
      ]
    }))
  }

  render() {
    return(
      <Leaders boards={this.state.board}/>
    )
  }
}
