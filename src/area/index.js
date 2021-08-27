import { createNamespace } from '../utils';
import { Area } from 'vant';

const [createComponent, bem] = createNamespace('lt-area');

export default createComponent({
  props: {
    areaList: {
      type: Object,
      default: () => ({})
    },
    title: String
  },
  methods: {
    onConfirm(...args) {
      this.$emit('confirm', ...args);
    },
    onChange(...args) {
      this.$emit('change', ...args);
    },
    onCancel(...args) {
      this.$emit('cancel', ...args);
    }
  },
  render() {
    return (
      <Area
        areaList={this.areaList}
        onConfirm={this.onConfirm}
        onChange={this.onChange}
        onCancel={this.onCancel}
        class={bem()}
        title={this.title}
      />
    );
  }
});
