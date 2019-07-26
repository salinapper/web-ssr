import React  from 'react';
import { Layout, Icon } from 'antd';
// import { GlobalFooter } from 'ant-design-pro';

const { Footer } = Layout;
const FooterView = () => (
  <Footer style={{ padding: 0 }}>
    {/* <GlobalFooter */}
      {/* copyright={ */}
        <span style={{color: 'rgba(255,255,255,.45)'}}>
          Copyright <Icon type="copyright" /> {new Date().getFullYear()} Coinsummer
        </span>
      {/* } */}
    {/* /> */}
  </Footer>
);
export default FooterView;
