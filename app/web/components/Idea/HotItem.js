import React, { Component } from 'react'
import { Divider } from 'antd';
import router from 'umi/router';
import Item from 'antd/lib/list/Item';
import styles from './idea.less';

class IdeaHotItem extends Component {

  gotoDetail = () => {
    router.push({
      pathname: '/idea/detail/' + this.props.item.id
    })
  }

  render() {
    const { item } = this.props
    return (
      <div style={{backgroundImage: `url(${item.link})`}} className={styles.item} onClick={this.gotoDetail}>
        <div className={styles.infos}>
          <img src={item.avatar} alt="" className={styles.avatar} />
          <div className={styles.name}>{item.name}</div>
        </div>
      </div>
    )
  }
}

export default IdeaHotItem