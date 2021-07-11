import { createNamespace } from '../utils';

// components
import Icon from '../icon';

const [createComponent, bem] = createNamespace('nav-bar');

const nav = {
  props: {
    title: String,
    leftText: String,
    rightText: String,
    leftArrow: Boolean,
  },
  methods: {
    hasRight() {
      return this.rightText;
    },
    genRight() {
      if (this.rightText) {
        return <span class={bem('text')}>{this.rightText}</span>;
      }
    },
    onLeftClick(event) {
      this.$emit('click-left', event);
    },
    onRightClick(event) {
      this.$emit('click-right', event);
    },
  },
  render() {
    const leftSlot = this.$slots.left;
    const { leftText, leftArrow } = this;
    // 比较像react的写法了
    const genLeft = (leftSlot, leftText, leftArrow) => {
      if (leftSlot) {
        return leftSlot;
      }

      return [
        leftArrow && <Icon icon-name="arrow-left" />,
        leftText && <span class={bem('text')}>{leftText}</span>,
      ];
    };

    return (
      <div class={bem()}>
        <div class={bem('content')}>
          {leftText && (
            <div class={bem('left')} onClick={this.onLeftClick}>
              {genLeft(leftSlot, leftText, leftArrow)}
            </div>
          )}
          <div class={[bem('title'), 'van-ellipsis']}>{this.title}</div>
          {this.hasRight() && (
            <div class={bem('right')} onClick={this.onRightClick}>
              {this.genRight()}
            </div>
          )}
        </div>
      </div>
    );
  },
};

// 返回sfc组件，带有install方法
export default createComponent(nav);
