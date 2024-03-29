import React, { PureComponent } from 'react';
import { formatMessage, setLocale, getLocale } from 'umi/locale';
import { cookie } from '@/utils/utils';
import { Menu, Icon } from 'antd';
import classNames from 'classnames';
import HeaderDropdown from '../HeaderDropdown';
import styles from './index.module.less';

function setHomepageLocale(key) {
  if (key === 'zh-CN') {
    cookie.set('lang', 'zh-CN');
  } else {
    cookie.set('lang', 'en-US');
  }
}

export default class SelectLang extends PureComponent {
  changeLang = ({ key }) => {
    setLocale(key);
    setHomepageLocale(key);
  };
  componentWillMount() {
    setHomepageLocale(getLocale())
  }

  render() {
    const { className } = this.props;
    const selectedLang = getLocale();
    const langMenu = (
      <Menu className={styles.menu} selectedKeys={[selectedLang]} onClick={this.changeLang}>
        <Menu.Item key="zh-CN">
          <span role="img" aria-label="简体中文">
            🇨🇳
          </span>{' '}
          简体中文
        </Menu.Item>
        <Menu.Item key="en-US">
          <span role="img" aria-label="English">
            🇬🇧
          </span>{' '}
          English
        </Menu.Item>
      </Menu>
    );
    return (
      <HeaderDropdown overlay={langMenu} placement="bottomRight">
        <span className={classNames(styles.dropDown, className)}>
          <Icon type="global" title={formatMessage({ id: 'navBar.lang' })} />
        </span>
      </HeaderDropdown>
    );
  }
}
