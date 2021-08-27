<template>
  <div class="gift-item">
    <img class="gift-item-img" :src="gift.imageUrl" alt="" />
    <div class="gift-content">
      <span class="gift-title">【赠品】&nbsp;{{ gift.name }}</span>
      <span class="gift-nums">X1</span>
    </div>
  </div>
</template>

<script>
const giftProps = {
  name: '',
  imageUrl: ''
};
export default {
  name: 'lt-gift-card',
  props: {
    gift: {
      type: Object,
      default: () => ({ ...giftProps })
    }
  }
};
</script>

<style scoped lang="less">
.gift-item {
  display: flex;
  padding: 0 15px;
  align-items: center;
  justify-content: center;
  margin-bottom: 10px;
}
.gift-item-img {
  width: 60px;
  height: 60px;
  border-radius: 8px;
}
.gift-content {
  flex: 1;
  margin-left: 15px;
  font-size: 14px;
  font-weight: 400;
  color: #333;
  line-height: 20px;
}
.gift-title {
  float: left;
}
.gift-nums {
  float: right;
}
</style>
