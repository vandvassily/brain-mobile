import { createNamespace } from '../utils';

const [createComponent, bem] = createNamespace('nav-bar');

const nav = {
  props: {
    title: String,
    leftText: String,
    rightText: String,
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
    const { leftText } = this;
    // 比较像react的写法了
    const genLeft = (leftText) => {
      if (leftText) {
        return <span class={bem('text')}>{leftText}</span>;
      }
    };

    return (
      <div class={bem()}>
        <div class={bem('content')}>
          {leftText && (
            <div class={bem('left')} onClick={this.onLeftClick}>
              {genLeft(leftText)}
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
