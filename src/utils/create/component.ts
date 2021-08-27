import { ComponentOptions, VueConstructor } from 'vue';

export interface VantComponentOptions extends ComponentOptions<Vue> {
  functional?: boolean;
  install?: (Vue: VueConstructor) => void;
}

function install(this: ComponentOptions<Vue>, Vue: VueConstructor) {
  const { name } = this;
  Vue.component(name as string, this);
}

export function createComponent(name: string) {
  return function(sfc: VantComponentOptions): VantComponentOptions {
    sfc.name = name;
    sfc.install = install;

    return sfc;
  };
}
