<script>
import axios from "axios";

export default {
  data: function () {
    return {
      errors: [],
      productUpdateParams: {},
      image: "",
    };
  },
  created: function () {
    axios.get(`/products/${this.$route.params.id}`).then((response) => {
      console.log("Products Show:", response.data);
      this.productUpdateParams = response.data;
      if (response.data.images.length === 0) {
        this.image = "https://media1.thehungryjpeg.com/thumbs/800_3672498_nxoe786r8fhp72m1wbao1au7dw8qehgwz9dzn8q8.jpg";
      } else {
        this.image = response.data.images[0].url;
      }
    });
  },
  methods: {
    productsUpdate: function () {
      axios
        .patch(`/products/${this.$route.params.id}`, this.productUpdateParams)
        .then((response) => {
          console.log("Products Update:", response.data);
          this.$router.push(`/products/${this.$route.params.id}`);
        })
        .catch((error) => {
          console.log(error.response);
          this.errors = error.response.data;
        });
    },
  },
};
</script>

<template>
  <div class="products-edit">
    <h2>Edit: {{ productUpdateParams.name }}</h2>
    <img :src="image" alt="" />
    <div v-if="errors"></div>
    <p v-for="error in errors" v-bind:key="error.id">Error: {{ error }}</p>
    <br />
    Product Name:
    <input type="text" v-model="this.productUpdateParams.name" />
    <br />
    Description:
    <textarea type="text" v-model="this.productUpdateParams.description"></textarea>
    <br />
    Price:
    <input rows="4" cols="50" v-model="this.productUpdateParams.price" />
    <br />
    <button v-on:click="productsUpdate()">Edit</button>
  </div>
</template>

<style>
img {
  border-radius: 8px;
  max-width: 50%;
  height: auto;
}
</style>
