import React, { Component } from 'react';
import Link from 'umi/link';
import PageHeaderWrapper from '@/components/PageHeaderWrapper';
import Markdown from 'react-markdown';
import { Card, Spin, Divider } from 'antd';
import { connect } from 'dva';
import { formatMessage } from 'umi/locale';
import moment from 'moment';
import styles from './index.less';

@connect(({ blog, loading }) => ({
  ...blog,
  loading: Boolean(loading.effects['blog/fetch'])
}))
class BlogList extends Component {

  toggleListPanel = () => {
    this.props.dispatch({
      type: 'blog/toggleListPanel'
    })
  }
  openListPanel = () => {
    this.props.dispatch({
      type: 'blog/openListPanel'
    })
  }
  closeListPanel = () => {
    this.props.dispatch({
      type: 'blog/openListPanel'
    })
  }

  componentDidMount() {
    this.props.dispatch({
      type: 'blog/fetch',
      payload: {
        id: this.props.match.params.id
      }
    });
  }

  render() {
    console.log(this.props)
    return (
      <div>xixi{this.props.children}</div>
    )
  }
}

export default BlogList