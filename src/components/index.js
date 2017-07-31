/**
 * Created by weihualiang048 on 17/7/31.
 */

import Header from './header';

const install = (Vue) => {
  if (install.installed) return;
  Vue.component(Header.name, Header);
};

export default install;

export {
  Header
};
