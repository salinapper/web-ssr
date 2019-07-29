import React  from 'react';
import { Layout, Icon } from 'antd';

const { Footer } = Layout;
const FooterView = () => (
  <Footer>
    <footer className="antd-pro-global-footer-globalFooter">
      <span style={{ color: 'rgba(255,255,255,.45)' }}>
        Copyright <Icon type="copyright" /> {new Date().getFullYear()} Coinsummer
      </span>
    </footer>
  </Footer>
);
export default FooterView;
