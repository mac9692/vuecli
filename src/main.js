import { createApp } from 'vue'
import App from './App.vue'
import ProductList from "@/components/product/ProductList";


createApp(App).component('ProductList', ProductList).mount('#app')

