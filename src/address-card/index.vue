<template>
  <div class="address-card" @click="onClick">
    <div class="card-info">
      <van-icon name="location-o" />
      <span>{{ addressInfo.name }}</span>
      <span>{{ addressInfo.phone }}</span>
    </div>
    <div class="address-info">
      <span>{{ addressInfo.address }}</span>
    </div>
    <div class="edit-icon">
      <van-icon name="edit" />
    </div>
  </div>
</template>

<script>
import { Icon } from 'vant';

const defaultAddressData = {
  name: '',
  phone: '',
  address: ''
};

export default {
  name: 'lt-address-card',
  components: {
    [Icon.name]: Icon
  },
  props: {
    addressInfo: {
      type: Object,
      default: () => ({ ...defaultAddressData })
    }
  },
  methods: {
    onClick() {
      this.$emit('click');
    }
  }
};
</script>

<style lang="less">
@import '../style/text.less';
.address-card {
  position: relative;
  background: #fff;
  padding: 12px;
  font-size: 14px;
  line-height: 26px;
  color: #333;
  .card-info {
    width: calc(100% - 20px);
    font-weight: bold;
    .single-ellipsis;

    span {
      margin-left: 10px;
    }
  }

  .address-info {
    width: calc(100% - 20px);
    color: #999;
    .multi-ellipsis(2);
  }

  .edit-icon {
    height: 100%;
    position: absolute;
    right: 10px;
    top: 0;
    font-size: 20px;
    width: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
}
</style>
