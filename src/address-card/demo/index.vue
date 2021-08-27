<template>
  <demo-section>
    <lt-address-card :address-info="addressInfo" @click="onClick">
    </lt-address-card>
  </demo-section>
</template>

<script>
export default {
  data() {
    return {
      addressInfo: {
        address: '北京市东城区',
        name: 'vassily',
        phone: '13000000000'
      }
    };
  },
  methods: {
    onClick() {
      console.log('click');
    }
  }
};
</script>
