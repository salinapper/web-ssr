import React, { Component } from 'react';
import Link from 'umi/link';
import Markdown from 'react-markdown';
import { Card, Spin } from 'antd';
import { connect } from 'dva';
import { formatMessage } from 'umi/locale';
import { leftpad } from '@/utils/utils';
import moment from 'moment';
import logo from '../../assets/share-logo.png';
import styles from './index.module.less';
import { markdown } from './markdown.less';

@connect(({ blog, loading }) => ({
  ...blog,
  loading: Boolean(loading.effects['blog/fetch'])
}))
class BlogPage extends Component {

  componentDidMount() {
    this.props.dispatch({
      type: 'blog/fetch',
      payload: {
        id: this.props.match.params.id
      }
    });
  }

  render() {
    const { detail, loading } = this.props
    const date = moment(detail.published_at)
    return (
      <Card className={styles.blogShareCard} bordered={false} bodyStyle={{padding: '20px 20px 0'}}>
        <Spin spinning={loading}>
          <div className={styles.blogWrap}>
            <div className={styles.blogLogo}>
              { detail.title }
            </div>
            <Link className={styles.dateWrap} to={'/blog/list'}>
              <i className={styles.calendar}></i>
              <span className={styles.date}>{leftpad(date.date())} </span>
              <span className={styles.month}>{date.format('MMM').toUpperCase()}. </span>
              <span className={styles.year}>{date.year()}</span>
            </Link>
            <Markdown source={detail.content} className={markdown} />
            <div className={styles.disclaimer}>
              <h4>{ formatMessage({id: 'blog.disclaimer.title'}) }</h4>
              <p>{ formatMessage({id: 'blog.disclaimer.content'}) }</p>
            </div>
          </div>
          <div className={styles.footer}>
            <a href="/" className={styles.logo}>
              <img src={logo} alt="" />
            </a>
          </div>
        </Spin>
      </Card>
    );
  }
}

export default BlogPage;