import Header from './header';

const install = (Vue) => {
  if (install.installed) return;
  Vue.component(Header.name, Header);
};

export default install;

export {
  Header
};
