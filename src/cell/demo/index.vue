<template>
  <demo-section>
    <demo-block title="基础用法">
      <lt-cell-group title="title">
        <lt-cell
          title="标题"
          value="内容"
        />
        <lt-cell
          title="标题"
          value="内容"
        />
      </lt-cell-group>
    </demo-block>

    <demo-block title="基础用法">
      <lt-cell
        title="标题"
        value="内容"
        @click="onClick"
      />
    </demo-block>

    <demo-block title="左侧图标">
      <lt-cell icon="arrow-left">
      </lt-cell>
    </demo-block>

    <demo-block title="右侧箭头">
      <lt-cell
        title="单元格"
        :right-arrow="true"
        arrow-direction="down"
      >
      </lt-cell>
    </demo-block>

    <demo-block title="slot用法">
      <lt-cell>
        <template #title>
          <span>这是一个标题</span>
        </template>
      </lt-cell>

      <lt-cell>
        <template>
          <span>这是一个default内容</span>
        </template>
      </lt-cell>

      <lt-cell title="单元格">
        <template>
          <span>这是一个default内容</span>
        </template>
        <template #right-icon>
          <icon
            icon-name="arrow"
            style="height: 24px;line-height:24px;"
            size="18"
          />
        </template>
      </lt-cell>
    </demo-block>
  </demo-section>
</template>

<script>
export default {
  methods: {
    onClick(...args) {
      console.log(args);
    }
  }
};
</script>

