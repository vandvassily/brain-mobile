import { createNamespace } from '../utils';
import { VueConstructor } from 'vue';
import { isDef } from '../utils/index';

import Icon from '../icon';

const [createComponent, bem] = createNamespace('lt-cell');

const cell: VueConstructor = {
  functional: true,
  props: {
    title: String,
    value: String,
    label: String,
    size: String,
    icon: String
  },
  render(h, context) {
    const { props, scopedSlots } = context;
    const { title, icon } = props;

    console.log(context);

    function Title() {
      const showTitle = scopedSlots.title || isDef(title);

      if (showTitle) {
        return (
          <div class={bem('title')}>
            {scopedSlots.title ? scopedSlots.title() : <span>{title}</span>}
          </div>
        );
      }
    }

    function LeftIcon() {
      if (isDef(icon)) {
        return <Icon class={bem('left-icon')} icon-name={icon} />;
      }
    }

    return (
      <div class={bem()}>
        {LeftIcon()}
        {Title()}
      </div>
    );
  }
};

export default createComponent(cell);
