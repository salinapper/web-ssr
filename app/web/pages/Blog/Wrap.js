import React, { Component } from 'react';
import { connect } from 'dva';

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