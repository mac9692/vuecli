<template>
  <div>
    <h1>상품 목록</h1>
    <table>
      <thead>
      <tr>
        <th>번호</th>
        <th>상품명</th>
        <th>가격</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="item in productList" :key="item.id">
        <th>{{ item.id }}</th>
        <th>{{ item.name }}</th>
        <th>{{ item.price }}</th>
      </tr>
      </tbody>
    </table>

    <button @click="sendMessage">버튼</button>
  </div>
</template>

<script>
export default {
  name: "ProductList",

  props: ['productList'],

  data() {
    return {
      message: 'ChildComponent 에서 보낸 메시지',
    }
  },
  methods: {
    sendMessage() {
      this.$emit('sendChildMessage', this.message);
    },
  },
}
</script>

<style scoped>

</style>