<script>
import axios from "axios";

export default {
  data: function () {
    return {
      product: {},
      image: "",
    };
  },
  created: function () {
    axios.get(`/products/${this.$route.params.id}`).then((response) => {
      console.log("Products Show:", response.data);
      this.product = response.data;
      if (response.data.images.length === 0) {
        this.image = "https://media1.thehungryjpeg.com/thumbs/800_3672498_nxoe786r8fhp72m1wbao1au7dw8qehgwz9dzn8q8.jpg";
      } else {
        this.image = response.data.images[0].url;
      }
    });
  },
  methods: {
    productsUpdate: function () {
      this.$router.push(`/products/${this.product.id}/edit`);
    },
    productsDestroy: function () {
      axios.delete(`/products/${this.$route.params.id}`).then((response) => {
        console.log("Product Successfully Deleted", response.data);
        this.$router.push("/products");
      });
    },
    routeToProducts: function () {
      this.$router.push("/products");
    },
  },
};
</script>

<template>
  <div class="products-show">
    <h2>{{ product.name }}</h2>
    <img :src="image" alt="" />
    <p>{{ product.description }}</p>
    <p>${{ product.price }}</p>
    <button v-on:click="productsUpdate()">Edit</button>
    |
    <button v-on:click="productsDestroy()">Delete</button>
    |
    <button v-on:click="routeToProducts()">Close</button>
  </div>
</template>

<style>
img {
  border-radius: 8px;
  max-width: 50%;
  height: auto;
}
</style>
