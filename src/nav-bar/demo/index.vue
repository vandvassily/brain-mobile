<template>
  <demo-section>
    <demo-block title="基础用法">
      <nav-bar
        :title="title"
        :left-text="leftText"
        :right-text="rightText"
        :left-arrow="true"
        @click-left="onLeftClick"
        @click-right="onRightClick"
      >
        <template slot="left">
          <icon icon-name="arrow-left" size="24"/>
          <span>返回上一页</span>
        </template>
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
      rightText: '右侧'
    };
  },
  methods: {
    onRightClick(e) {
      console.log('click right', e);
    },
    onLeftClick(e) {
      console.log('click-left', e);
      count++;
      this.leftText = 'back count: ' + count;
    }
  }
};
</script>
