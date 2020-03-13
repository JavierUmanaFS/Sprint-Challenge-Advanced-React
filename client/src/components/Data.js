import React, { Component } from 'react';
import axios from 'axios';
import DisplayData from './DisplayData';


class Data extends Component {
  constructor() {
    super();
    this.state = {
      players: []
    }
  }

  componentDidMount() {
    axios.get('http://localhost:5000/api/players/')
      .then(res => {
        this.setState({
          players: res.data
        })
      })
  }

  render() {
    return (
      <div data-testid='playerData'>
        <DisplayData players={this.state.players} />
      </div>
    )
  }
}


export default Data;