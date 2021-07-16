<template>
  <demo-section>
    <demo-block title="基础用法">
      <lt-area
        :area-list="areaList"
        @confirm="onConfirm"
        @change="onChange"
        @cancel="onCancel"
      />
    </demo-block>
  </demo-section>
</template>

<script>
import areaList from './area';
import { Area } from 'vant';

export default {
  components: { [Area.name]: Area },
  data() {
    this.areaList = areaList;
    return {
      title: 123
    };
  },
  created() {
    console.log(this);
  },
  methods: {
    onChange(...args) {
      console.log(args);
    },
    onConfirm(...args) {
      console.log(args);
    },
    onCancel(...args) {
      console.log(args);
    }
  }
};
</script>
