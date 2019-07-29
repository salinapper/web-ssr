import React, { Component } from 'react';
import Link from 'umi/link';
import moment from 'moment';
import _ from 'lodash';
import styles from './blog.module.less';

class BlogItem extends Component {

  render() {
    const { detail } = this.props
    const tags = _.uniqBy(detail.tags)
    return (
      <div className={styles.blogItem}>
        <Link className={styles.banner} to={`/blog/detail/${detail.id}`}>
          <div className={styles.placeholder}></div>
          <div className={styles.screenshot} style={{ backgroundImage: `url(${detail.blog_screenshot})` }}></div>
          <div className={styles.label}>{detail.title}</div>
        </Link>
        <Link className={styles.title} to={`/blog/detail/${detail.id}`}>
          <div className={styles.titleWrap}>
            {detail.subtitle}
          </div>
        </Link>
        <div className={styles.date}>{moment(detail.published_at).format('YYYY-MM-DD')}</div>
        <div className={styles.tags}>
          {tags.map(tag => (
            <Link key={tag} className={styles.tag} to={`/blog/list?tag=${tag}`}>#{tag}#</Link>
          ))}
        </div>
      </div>
    );
  }
}

export default BlogItem;