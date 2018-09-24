import React, { Component } from 'react';

export default class DigitalClicker extends Component {
  constructor() {
    super()
    this.state = {
      timesClicked: 0
    }
  }

  render() {
    return (
      <button onClick={this.handleClick}>Boop</button>
    )
  }
}
