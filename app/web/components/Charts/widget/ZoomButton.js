import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Radio } from 'antd';
import styles from './index.less';

class ZoomButton extends Component {

  static propTypes = {
    value: PropTypes.string.isRequired,
    options: PropTypes.array.isRequired,
    onChange: PropTypes.func.isRequired
  };

  render() {
    const { value, options, onChange } = this.props;

    return (
      <div className={styles.scaleButton}>
        <Radio.Group value={value} buttonStyle="solid" onChange={onChange} size="mini">
          {
            options.map((option, key) => (<Radio.Button value={option.value} key={key}>{option.title}</Radio.Button>))
          }
        </Radio.Group>
      </div>
    );
  }
}

export default ZoomButton;
