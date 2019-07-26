import React, { Component } from 'react';
import { connect } from 'dva'; 
import Redirect from 'umi/redirect';

@connect(({user}) => ({
  userStatus: user.status
}))
class Authorized extends Component {
  render() {
    const { children, userStatus } = this.props;

    if (userStatus === 0) {
      location.href = '/?loginfrom=' + encodeURIComponent(location.pathname + location.search)
      return null
      // return (<Redirect to="/user/login" />);
    }

    return children;
  }
}

export default Authorized;