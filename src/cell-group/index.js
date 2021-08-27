// utils
import { createNamespace } from '../utils';
import { BORDER_TOP_BOTTOM } from '../utils/constant';

const [createComponent, bem] = createNamespace('lt-cell-group');

const cellGroup = {
  functional: true,
  props: {
    title: String,
    border: {
      type: Boolean,
      default: true
    }
  },
  render(h, ctx) {
    const { props, scopedSlots } = ctx;
    const { title, border } = props;

    return (
      <div>
        <div class={bem('title')}>
          {scopedSlots.title ? scopedSlots.title() : title}
        </div>
        <div class={[bem(), { [BORDER_TOP_BOTTOM]: border }]}>
          {scopedSlots.default()}
        </div>
      </div>
    );
  }
};

export default createComponent(cellGroup);
