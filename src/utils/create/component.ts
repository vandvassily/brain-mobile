import { ComponentOptions, VueConstructor } from 'vue';

export interface VantComponentOptions extends ComponentOptions<Vue> {
  functional?: boolean;
  install?: (Vue: VueConstructor) => void;
}

function install(Vue) {
  const { name } = this;
  Vue.component(name, this);
}

export function createComponent(name: string) {
  return function (sfc: VantComponentOptions) {
    sfc.name = name;
    sfc.install = install;

    return sfc;
  };
}
