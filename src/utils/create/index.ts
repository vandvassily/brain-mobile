import { createComponent } from './component';
import { createBEM } from './bem';

export function createNamespace(name: string) {
  return [createComponent(name), createBEM(name)]
}
