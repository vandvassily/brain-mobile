<template>
  <demo-section>
    <lt-address-edit
      :address-info="addressInfo"
      @failed="onFailed"
      @submit="onSubmit"
      @change-area="onAreaConfirm"
    >
      <template>
        <div>这是默认 slot</div>
      </template>
      <template slot="tip">
        <div class="tips">*地址信息将被用于购买产品寄送使用，请认真填写！</div>
      </template>
    </lt-address-edit>
  </demo-section>
</template>

<script>
export default {
  data() {
    return {
      addressInfo: {
        province: '北京市',
        city: '东城区',
        district: ''
      }
    };
  },
  methods: {
    onFailed(event) {
      console.log(event);
    },
    onSubmit(values) {
      console.log(values);
    },
    onAreaConfirm(values) {
      console.log(values);
    }
  }
};
</script>

<style lang="less">
.tips {
  margin-top: 36px;
  text-align: center;
  font-size: 24px;
  color: #ff3e3e;
}
</style>
