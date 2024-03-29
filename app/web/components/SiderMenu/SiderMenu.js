import React, { PureComponent, Suspense } from 'react';
import { Layout, Icon } from 'antd';
import classNames from 'classnames';
import Link from 'umi/link';
import styles from './index.module.less';
import PageLoading from '../PageLoading';
import { formatMessage } from 'umi/locale';
import { getDefaultCollapsedSubMenus } from './SiderMenuUtils';
import BaseMenu from './BaseMenu';

const { Sider } = Layout;

export default class SiderMenu extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      openKeys: getDefaultCollapsedSubMenus(props),
    };
  }

  static getDerivedStateFromProps(props, state) {
    const { pathname } = state;
    if (props.location.pathname !== pathname) {
      return {
        pathname: props.location.pathname,
        openKeys: getDefaultCollapsedSubMenus(props),
      };
    }
    return null;
  }

  isMainMenu = key => {
    const { menuData } = this.props;
    return menuData.some(item => {
      if (key) {
        return item.key === key || item.path === key;
      }
      return false;
    });
  };

  handleOpenChange = openKeys => {
    const moreThanOne = openKeys.filter(openKey => this.isMainMenu(openKey)).length > 1;
    this.setState({
      openKeys: moreThanOne ? [openKeys.pop()] : [...openKeys],
    });
  };

  render() {
    const { logo, collapsed, onCollapse, fixSiderbar, theme } = this.props;
    const { openKeys } = this.state;
    const defaultProps = collapsed ? {} : { openKeys };

    const siderClassName = classNames(styles.sider, {
      [styles.fixSiderbar]: fixSiderbar,
      [styles.light]: theme === 'light',
    });
    return (
      <Sider
        trigger={null}
        collapsible
        collapsed={collapsed}
        breakpoint="lg"
        onCollapse={onCollapse}
        width={256}
        theme={theme}
        className={siderClassName}
      >
        <div className={styles.logo} id="logo">
          <a href="/">
            <img src={logo} alt="logo" />
            <h1>Coinsummer</h1>
          </a>
        </div>
        <Link key="blog" to={'/blog/detail'} className={styles.bloglink + ' bloglink'}><span>{ formatMessage({id: 'menu.blog'}) }</span></Link>
        {/* <Suspense fallback={<PageLoading />}> */}
          <BaseMenu
            {...this.props}
            mode="inline"
            handleOpenChange={this.handleOpenChange}
            onOpenChange={this.handleOpenChange}
            style={{ padding: '0 0 16px 0', width: '100%' }}
            {...defaultProps}
          />
        {/* </Suspense> */}
      </Sider>
    );
  }
}
