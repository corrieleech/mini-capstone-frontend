<script>
import axios from "axios";

export default {
  data: function () {
    return {
      message: "Welcome to Vue.js!",
      products: [],
    };
  },
  created: function () {
    axios.get("/products").then((response) => {
      console.log("Products Index", response.data);
      this.products = response.data;
    });
  },
  methods: {},
};
</script>

<template>
  <div class="products-index">
    <img
      src="https://instabrite.com/wp-content/uploads/2019/03/d4624c45-acb1-431a-9c56-c5f58c6b47fc.jpg"
      alt="Storefront"
    />
    <h1>CorzCollection</h1>
    <h2>Only the Finest Goods</h2>
    <div v-for="product in products" v-bind:key="product.id">
      <router-link v-bind:to="`/products/${product.id}`">{{ product.name }}</router-link>
    </div>
  </div>
</template>

<style></style>
