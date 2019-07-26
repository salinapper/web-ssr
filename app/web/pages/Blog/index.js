import React, { Component } from 'react';
import moment from 'moment';
import Markdown from 'react-markdown';
import { List, Card, Spin, Icon, Empty } from 'antd';
import { connect } from 'dva';
import Link from 'umi/link';
import { formatMessage } from 'umi/locale';
import { leftpad } from '@/utils/utils';
import PageHeaderWrapper from '@/components/PageHeaderWrapper';
import BlogItem from '@/components/Blog/Item';
import styles from './index.less';
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
  componentWillReceiveProps(newProps) {
    if (this.props.match.params.id !== newProps.match.params.id) {
      this.props.dispatch({
        type: 'blog/fetch',
        payload: {
          id: newProps.match.params.id
        }
      })
    }
  }

  render() {
    const { detail, relation, loading } = this.props
    const date = moment(detail.published_at)
    return (
      <PageHeaderWrapper>
        <Card className={styles.blogCard} bordered={false}>
          <Spin spinning={loading}>
            <div className={styles.blogWrap}>
              <h1 className={styles.blogTitle}>{ detail.title }</h1>
              <a href={`/share/blog/${detail.id}`} target="_blank" className={styles.sharelink}>
                <Icon type="link"></Icon>
              </a>
              <Link className={styles.dateWrap} to={'/blog/list'}>
                <i className={styles.calendar}></i>
                <span className={styles.date}>{leftpad(date.date())} </span>
                <span className={styles.month}>{date.format('MMM').toUpperCase()}. </span>
                <span className={styles.year}>{date.year()}</span>
                <span className={styles.rbArrow}></span>
              </Link>
              <Markdown source={detail.content} className={markdown} />
              <div className={styles.disclaimer}>
                <h4>{ formatMessage({id: 'blog.disclaimer.title'}) }</h4>
                <p>{ formatMessage({id: 'blog.disclaimer.content'}) }</p>
              </div>
            </div>
            {relation.length ? (
              <React.Fragment>
                <div className={styles.relationTitle}>{ formatMessage({id: 'blog.relation'}) }</div>
                <List
                  className={styles.blogList}
                  dataSource={relation}
                  rowKey={'id'}
                  grid={{ xs: 1, sm: 2, md: 2, lg: 2, xl: 3, gutter: 30 }}
                  renderItem={(detail) => (
                    <List.Item>
                      <BlogItem detail={detail} />
                    </List.Item>
                  )}
                />
              </React.Fragment>
            ): null }
          </Spin>
        </Card>
      </PageHeaderWrapper>
    );
  }
}

export default BlogPage;