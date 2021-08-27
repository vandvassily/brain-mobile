<template>
  <demo-section>
    <demo-block card :title="'展示'">
      <van-cell :title="'展示弹出层'" is-link @click="status = true" />
    </demo-block>
    <lt-gift-popup v-model="status" :gifts="gifts" />
  </demo-section>
</template>

<script>
import { Cell } from 'vant';

export default {
  components: {
    [Cell.name]: Cell
  },
  data() {
    return {
      status: false,
      gifts: [
        {
          id: '349607159451832322',
          name: '拓展直播课金卡会员',
          imageUrl:
            'http://113.108.110.61:62181/nldmx-node-res/node/113965094870638592/113965622452256768/page/NL_H5WXorder_Column/1620891379156.png',
          text: 'gift1'
        },
        {
          id: '349607159451832323',
          name: 'AI智能学习机器人',
          imageUrl:
            'http://113.108.110.61:62181/nldmx-node-res/node/113965094870638592/113965622452256768/page/NL_H5WXorder_Column/1620891435876.jpg',
          text: 'gift2'
        }
      ]
    };
  }
};
</script>
