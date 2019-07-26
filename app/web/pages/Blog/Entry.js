import React, { Component } from 'react';
import Redirect from 'umi/redirect';

export default class Entry extends Component {
  render() {
    return (
      <Redirect to={'/blog/detail'}/>
    )
  }
}