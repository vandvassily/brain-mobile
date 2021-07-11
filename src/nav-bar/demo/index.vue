<template>
  <demo-section>
    <demo-block title="基础用法">
      <nav-bar
        :title="title"
        :left-text="leftText"
        :right-text="rightText"
        @click-left="onLeftClick"
        @click-right="onRightClick"
      >
        <slot>this is nav-bar</slot>
      </nav-bar>
    </demo-block>
  </demo-section>
</template>

<script>
let count = 0;
export default {
  data() {
    return {
      title: '这是一个标题',
      leftText: '返回',
      rightText: 'right',
    };
  },
  methods: {
    onRightClick(e) {
      console.log(e);
    },
    onLeftClick(e) {
      console.log(e);
      count++;
      this.leftText = 'back count: ' + count;
    }
  }
};
</script>
