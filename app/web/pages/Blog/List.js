import React, { Component } from 'react';
import Markdown from 'react-markdown';
import InfiniteScroll from 'react-infinite-scroller';
import { List, Card, Spin, Empty } from 'antd';
import { connect } from 'dva';
import Link from 'umi/link';
import { formatMessage } from 'umi/locale';
import moment from 'moment';
import PageHeaderWrapper from '@/components/PageHeaderWrapper';
import BlogItem from '@/components/Blog/Item';
import styles from './index.module.less';

@connect(({ blog, loading }) => ({
  ...blog,
  loading: Boolean(loading.effects['blog/fetchList'])
}))
class BlogList extends Component {

  componentWillMount() {
    this.props.dispatch({
      type: 'blog/clearList'
    })
  }

  componentWillReceiveProps(newProps) {
    const oquery = this.props.location.query;
    const nquery = newProps.location.query;
    if (
      oquery.tag !== nquery.tag ||
      oquery.keyword !== nquery.keyword
    ) {
      this.props.dispatch({
        type: 'blog/fetchList',
        payload: {
          page: 0,
          keyword: nquery.keyword,
          tag: nquery.tag,
        }
      })
    }
  }

  handleInfiniteOnload = () => {
    const { dispatch, list, page, loading, location: { query } } = this.props
    if (loading) {
      return false
    }
    return dispatch({
      type: 'blog/fetchList',
      payload: {
        page: list.length ? page + 1 : page,
        keyword: query.keyword,
        tag: query.tag
      }
    })
  }

  render() {
    const { detail, list, total, page, loading, hasMore, fail, location: { query } } = this.props

    // computed
    const empty = list.length === 0 && !loading;
    const loader = (
      <div key={0} style={{textAlign: 'center', padding: '21px'}}>
        <Spin tip="Loading..." />
      </div>
    )
    return (
      <PageHeaderWrapper>
        <Card className={styles.blogCard} bordered={false}>
          <Spin spinning={loading}>
            {query.tag ? (
              <div className={styles.tagTitle}>#{ query.tag }#</div>
            ) : null }
            <InfiniteScroll
              initialLoad={true}
              pageStart={0}
              loadMore={this.handleInfiniteOnload}
              loader={loader}
              hasMore={hasMore && !fail}
              useWindow={true}
              thredhold={0}
            >
              <List
                className={styles.blogList}
                dataSource={list}
                rowKey={'id'}
                grid={{ xs: 1, sm: 2, md: 2, lg: 2, xl: 3, gutter: 30 }}
                renderItem={(detail) => (
                  <List.Item>
                    <BlogItem detail={detail} />
                  </List.Item>
                )}
              >
                { empty ? <Empty /> : <span></span>}
              </List>
            </InfiniteScroll>
          </Spin>
        </Card>
      </PageHeaderWrapper>
    );
  }
}

export default BlogList