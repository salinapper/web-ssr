import React from 'react';
import SiderMenu from './SiderMenu';
import { getFlatMenuKeys } from './SiderMenuUtils';

const SiderMenuWrapper = props => {
  const { menuData } = props;
  const flatMenuKeys = getFlatMenuKeys(menuData);
  return  (
    <SiderMenu {...props} flatMenuKeys={flatMenuKeys} />
  );
};

export default SiderMenuWrapper;
