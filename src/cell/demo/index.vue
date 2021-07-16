<template>
  <demo-section>
    <demo-block title="基础用法">
      <lt-cell title="标题" />
    </demo-block>

    <demo-block title="左侧图标">
      <lt-cell icon="arrow-left">
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
          <span>这是一个default标题</span>
        </template>
      </lt-cell>
    </demo-block>
  </demo-section>
</template>

