<template>
  <div class="goods">goods list</div>
</template>

<script>
export default {
  name: 'GoodsIndex',
  async mounted() {
    const { data: res } = await this.$axios.get('/goods/list');
    console.log(res);
  },
};
</script>
