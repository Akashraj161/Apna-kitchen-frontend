<template>
  <!-- <div class="detailsPage">
    <div class="container">
      <div class="row">
        <div class="col">
          <div class="col" v-for="(product, index) in products" :key="index">
            <div class="detailsCard" v-if="proId == product.productId">
              <img :src="product.image" class="img-fluid productImg" />
              <h1 class="productTite">{{ product.productTitle }}</h1>
              <button class="btn btn-danger">Add</button>
            </div>
          </div>
        </div>
        <div class="col">2 of 2</div>
      </div>

      <div>
        <div class="ui buttons big">
          <button
            class="ui button toggle"
            @click="toggle"
            :class="[selectPlan ? 'active' : '']"
          >
            Weekly
          </button>
          <button
            class="ui button toggle"
            @click="toggle"
            :class="[!selectPlan ? 'active' : '']"
          >
            Monthly
          </button>
        </div> -->

  <!-- </div>
    </div>
  </div> -->

  <div class="detailsPage">
    <div class="row">
      <div class="col-md-4 offset-md-2">Image</div>
      <div class="col-md-4 offset-md-1">
        <h2>Food Name</h2>
        <p>basic Description of food</p>
        <div
          class="btn-group"
          role="group"
          aria-label="Basic radio toggle button group"
        >
          <input
            type="radio"
            class="btn-check"
            name="btnradio"
            id="btnradio1"
            autocomplete="off"
            checked
          />
          <label class="btn btn-outline-primary" for="btnradio1">Weekly</label>

          <input
            type="radio"
            class="btn-check"
            name="btnradio"
            id="btnradio2"
            autocomplete="off"
          />
          <label class="btn btn-outline-primary" for="btnradio2">Monthly</label>
        </div>
        <br />
        <span class="price" id="price">${{ priceofproduct }} </span>
      </div>
    </div>
  </div>
</template>
<script>
import { products } from "../websiteData";
export default {
  name: "detailsPage",
  data() {
    return {
      proId: this.$route.params.Pid,
      title: "details",
      priceofproduct: 200,
      products,
      //selectPlan: true,
    };
  },

  //   methods: {
  //     toggle() {
  //       this.selectPlan = !this.selectPlan;
  //       console.warn(this.selectPlan);
  //     },
  //   },
};
</script>

<style scoped>
.row {
  width: 100vw;
  padding-top: 5%;
}
.detailsCard {
  position: relative;
  height: 400px;
  width: 350px;
  margin-top: 100px;
  align-items: center;
  margin-left: 300px;
  /* border: 1px solid #e14d2a; */
}
/* .btn {
  position: absolute;
  top: 300px;
  left: 120px;
  width: 100px;
} */

.productTite {
  position: absolute;
  top: 240px;
  left: 120px;
}
.productImg {
  position: absolute;
  left: 60px;
}
</style>
