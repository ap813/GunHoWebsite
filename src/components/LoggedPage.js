import React, {Component} from 'react'
import '../css/page.css'

import 'bootstrap/dist/css/bootstrap.css';
import Leaderboard from './Leaderboard'
import Info from './Info'
import Navigation from './Nav'

class LoggedPage extends Component {

  static user = (prevState) =>(prevState.user)

  constructor(props) {

    super(props)
    this.state = {
      Leaderboard : false,
      Info: false,
      Profile: true,
      user: ''
    }

    this.leader = this.leader.bind(this)
    this.profile = this.profile.bind(this)
    this.info = this.info.bind(this)
    this.renderInfo = this.renderInfo.bind(this)
    this.renderLeader = this.renderLeader.bind(this)
    this.renderProfile = this.renderProfile.bind(this)
  }



  leader() {
    this.setState ({
      Leaderboard : true,
      Info: false

    })
  }

  profile() {
    this.setState({
      Leaderboard : false,
      Info: false
    })
  }

  info() {
    this.setState({
      Leaderboard : false,
      Info: true
    })
  }

  renderLeader() {

    return (
      <div>
        <Navigation
          info={this.info}
          leader={this.leader}
          signup={this.signup}
          login={this.login}
          profile={this.profile}
          logged={this.state.Profile}
          logout={this.props.info}
        />

        <Leaderboard />
      </div>
    )
  }

  renderProfile() {
    return(
      <div>
        <Navigation
          info={this.info}
          leader={this.leader}
          signup={this.signup}
          login={this.login}
          profile={this.profile}
          logged={this.state.Profile}
          logout={this.props.info}
        />
      </div>


    )
  }

  renderInfo() {

    console.log(this.props.user);
    console.log(this.state.Profile);

    return(
      <div>
        <Navigation
          info={this.info}
          leader={this.leader}
          signup={this.signup}
          login={this.login}
          profile={this.profile}
          logged={this.state.Profile}
          logout={this.props.info}
        />

        <Info />
      </div>
    )
  }

  render() {
		return (this.state.Leaderboard ? this.renderLeader() :
    (this.state.Info ? this.renderInfo() : this.renderProfile()))
    }
}

export default LoggedPage
