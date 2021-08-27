import { createNamespace } from '../utils';
import { isDef } from '../utils/index';
import { emit } from '../utils/functional';

import Icon from '../icon';

const [createComponent, bem] = createNamespace('lt-cell');

const cell = {
  functional: true,
  props: {
    title: String,
    value: String,
    label: String,
    size: String,
    icon: String,
    rightArrow: {
      type: Boolean,
      default: false
    },
    arrowDirection: String
  },
  render(h, ctx) {
    const { props, scopedSlots } = ctx;
    const { title, icon, value } = props;

    console.log(ctx);

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

    function RightIcon() {
      const rightIconSlot = scopedSlots['right-icon'];
      if (rightIconSlot) {
        return rightIconSlot();
      }

      const { rightArrow, arrowDirection } = props;
      if (rightArrow) {
        return (
          <Icon
            class={bem('right-icon')}
            iconName={arrowDirection ? `arrow-${arrowDirection}` : 'arrow'}
          />
        );
      }
    }

    function Value() {
      const showValue = scopedSlots.default || isDef(value);

      if (showValue) {
        return (
          <div class={bem('value')}>
            {scopedSlots.default ? scopedSlots.default() : <span>{value}</span>}
          </div>
        );
      }
    }

    function onClick(event) {
      emit(ctx, 'click', event);
    }

    return (
      <div class={bem()} onClick={onClick}>
        {LeftIcon()}
        {Title()}
        {Value()}
        {RightIcon()}
      </div>
    );
  }
};

export default createComponent(cell);
