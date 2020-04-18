'use strict'

import React, { Component } from 'react'

class Timer extends Component {
  constructor () {
    super()
    this.state = {
      time: 0
    }

    this.timer
  }

  componentDidMount () {
    this.timer = setInterval(() => this.setState({ time: this.state.time + 1 }), 1000)
  }

  componentWillUnmount () {
    clearInterval(this.timer)
  }

  componentWillReceiveProps (nextProps) {
    console.log('componentWillReceiveProps timer', this.props, nextProps)
  }

  shouldComponentUpdate (nextProps, nextState) {
    return this.state.time !== nextState.time
  }

  componentWillUpdate (nextProps, nextState) {
    console.log('componentWillUpdate timer', this.props, nextProps)
  }

  componentDidUpdate (prevProps, prevState) {
    console.log('componentDidUpdate timer', this.props, prevProps);
  }

  render () {
    return (<div>Timer: {this.state.time}</div>)
  }
}

export default Timer
