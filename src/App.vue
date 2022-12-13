<template>
  <div id="app">
    <BaseHeader />
    <BaseNav />
    <ProductList :product-list="produtList" v-on:sendChildMessage="receiveMessage"/>
    <child-component>
      <p>파리에 가면 이른 저녁에 에펠탑 구경을 추천합니다.</p>
    </child-component>
    <BaseFooter />
  </div>
</template>

<script>
import BaseHeader from "@/components/common/BaseHeader";
import BaseNav from "@/components/common/BaseNav";
import BaseFooter from "@/components/common/BaseFooter";
import ChildComponent from "@/components/ChildComponent";
export default {
  name: 'App',
  components: {
    ChildComponent,
    BaseFooter,
    BaseNav,
    BaseHeader
  },

  data() {
    return {
      produtList: [
        {id: 1, name: '상자', price: 500},
        {id: 2, name: '김치', price: 5000},
        {id: 3, name: '감자', price: 1000},
        {id: 4, name: '고구마', price: 2000},
        {id: 5, name: '과자', price: 300},
        {id: 6, name: '커피', price: 4000},
      ],
    };
  },

  methods: {
    receiveMessage(message) {
      console.log(message);
      alert(message);
    },
  }
}
</script>

<style>
</style>
