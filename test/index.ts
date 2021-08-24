import Vue from 'vue';
import { mount, TransitionStub } from '@vue/test-utils';

Vue.config.silent = true;

Vue.component('transition', TransitionStub as any);

export function later(delay = 0): Promise<void> {
  return new Promise(resolve => {
    setTimeout(resolve, delay);
  });
}

export * from './dom';
export * from './event';
export { mount };
