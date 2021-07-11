function install(Vue) {
  const { name } = this;
  Vue.component(name, this);
}

export function createComponent(name: string) {
  return function (sfc) {
    sfc.name = name;
    sfc.install = install;

    return sfc;
  };
}
