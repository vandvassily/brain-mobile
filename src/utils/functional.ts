import { RenderContext, VNodeData } from 'vue';

type Context = RenderContext & { data: VNodeData };

export function emit(context: Context, eventName, ...args) {
  const listeners = context.listeners[eventName];
  if (listeners) {
    if (Array.isArray(listeners)) {
      listeners.forEach((listener) => {
        listener(...args);
      });
    } else {
      listeners(...args);
    }
  }
}
