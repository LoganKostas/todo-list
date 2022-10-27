import React, { Component } from 'react'

export default class Feed extends Component {
  render() {
    return (
      <div>Feed
        <p>You have {this.props.posts1} posts made</p>
      </div>
    )
  }
}
