<script>
import axios from "axios";

export default {
  data: function () {
    return {
      errors: [],
      newProductParams: {},
      suppliers: [],
    };
  },
  created: function () {
    axios.get("/suppliers").then((response) => {
      console.log(response.data);
      this.suppliers = response.data;
    });
  },
  methods: {
    productsCreate: function () {
      axios
        .post("/products/", this.newProductParams)
        .then((response) => {
          console.log("Products New:", response.data);
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
  <div class="products-new">
    <h2>Add a Product</h2>
    <form v-on:submit.prevent="productsCreate()">
      Name:
      <input type="text" v-model="newProductParams.name" />
      <br />
      Price:
      <input type="text" v-model="newProductParams.price" />
      <br />
      Description:
      <input type="text" v-model="newProductParams.description" />
      <br />
      Number in Stock:
      <input type="text" v-model="newProductParams.number_in_stock" />
      <br />
      Supplier Id:
      <input type="text" v-model="newProductParams.supplier_id" />
      <br />
      <br />
      <div>
        <h3>Current Suppliers:</h3>
        <p v-for="supplier in suppliers" v-bind:key="supplier.id">{{ supplier.name }} || (id {{ supplier.id }})</p>
      </div>
      <input type="submit" value="Submit" />
    </form>
  </div>
</template>

<style></style>
