<template>
  <van-popup
    v-model="status"
    position="bottom"
    close-icon-position="top-right"
    close-icon="close"
    round
    closeable
    :style="{ height: '45%' }"
  >
    <div class="pop-title">{{ title }}</div>
    <div class="gift-goods-list">
      <lt-gift-card
        v-for="item in gifts"
        :gift="item"
        :key="item.id"
      ></lt-gift-card>
    </div>
  </van-popup>
</template>

<script>
import { Popup } from 'vant';
import GiftCard from '../gift-card';

export default {
  name: 'lt-gift-popup',
  components: {
    [Popup.name]: Popup,
    [GiftCard.name]: GiftCard
  },
  props: {
    title: {
      type: String,
      default: '赠品'
    },
    gifts: {
      type: Array,
      default: () => []
    },
    value: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      status: this.value
    };
  },
  watch: {
    value(newVal) {
      this.status = newVal;
    },
    status(newVal) {
      this.$emit('input', newVal);
    }
  }
};
</script>

<style lang="less">
// 礼品弹窗样式
.pop-title {
  position: relative;
  padding: 17px 15px;
  height: 20px;
  font-size: 15px;
  font-weight: 400;
  color: #333;
  line-height: 20px;
  border-bottom: 1px solid #eee;
}

.gift-goods-list {
  padding: 15px 0 0;
  position: relative;
}
</style>
