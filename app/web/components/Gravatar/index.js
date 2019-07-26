import React, { PureComponent } from 'react';
import { Avatar } from 'antd';
import md5 from 'blueimp-md5';

export default class Gravatar extends PureComponent {
  render() {
    const { email, size } = this.props;
    const s = {
      large: 40,
      default: 32,
      small: 24, 
    }[size] || size || 32
    const src = 'https://www.gravatar.com/avatar/' + md5(email.toLowerCase()) + '?s=' + s * 2
    return (
      <Avatar
        {...this.props}
        src={src}
      />
    )
  }
}