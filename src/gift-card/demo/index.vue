<template>
  <demo-section>
    <lt-gift-card :gift="gift" />
  </demo-section>
</template>

<script>
export default {
  data() {
    return {
      gift: {
        name: '拓展直播课金卡会员',
        imageUrl:
          'http://113.108.110.61:62181/nldmx-node-res/node/113965094870638592/113965622452256768/page/NL_H5WXorder_Column/1620891379156.png'
      }
    };
  }
};
</script>
