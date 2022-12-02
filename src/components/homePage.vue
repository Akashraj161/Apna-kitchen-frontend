<template>
  <div>
    
    <div class="container1">
      <div class="leftside">
        <img class="homeMainImg" src="../assets/mainPic.jpg" alt="" />
      </div>
      <div class="rightside">
        <h1 class="branding">EaTHealthY</h1>
        <br />
        <h3 class="moto">Now eat the best home made food away from home</h3>

        <div class="input-group flex-nowrap">
          <input
            type="text"
            class="form-control"
            placeholder="Search for Dishes"
            aria-label="Username"
            aria-describedby="addon-wrapping"
          />
          <button class="btn btn-danger">search</button>
        </div>
      </div>
    </div>
    <div class="container2">
            <div>
                <hr>
                <h2 class="container2-heading">Pet Puja</h2>
            </div>
            <div class="food-items">
                <div class="Food-desc">
                    <div class="Food-img">
                        <router-link to="details/1"><img src="https://ik.imagekit.io/curefoods/image/eatfit-category/CFI_RICEBOWL_1.png" alt=""></router-link>
                    </div>
                    <div class="Food-caption">
                        <h4>Rice Bowl</h4>
                    </div>
                </div>
                <div class="Food-desc">
                    <div class="Food-img">
                        <router-link to="details/2"><img src="https://ik.imagekit.io/curefoods/image/eatfit-category/CFI_THALI_1.png" alt=""></router-link>
                    </div>
                    <div class="Food-caption">
                        <h4>Indian Thali</h4>
                    </div>
                </div>
                <div class="Food-desc">
                    <div class="Food-img">
                        <router-link to="details/3"><img src="https://ik.imagekit.io/curefoods/image/eatfit-category/CFI_KHICHDI_2.png" alt=""></router-link>
                    </div>
                    <div class="Food-caption">
                        <h4>Khichdi</h4>
                    </div>
                </div>
                <div class="Food-desc">
                    <div class="Food-img">
                        <router-link to="details/4"><img src="https://ik.imagekit.io/curefoods/image/eatfit-category/CFI_DESSERTS_2.png" alt=""></router-link>
                    </div>
                    <div class="Food-caption">
                        <h4>Dessert</h4>
                    </div>
                </div>
                <div class="Food-desc">
                    <div class="Food-img">
                        <router-link to="details/1"><img src="https://ik.imagekit.io/curefoods/image/eatfit-category/CFI_RICEBOWL_1.png" alt=""></router-link>
                    </div>
                    <div class="Food-caption">
                        <h4>Rice Bowl</h4>
                    </div>
                </div>
            </div>
           
        </div>
    
    
    <div class="container" >
      <div class="row" >
          <div class="col-md-10 cards offset-md-2" v-for="post in postDetails" :key="post.email"  >
            <!-- <img
              v-bind:src="require(`../../../ApnaKitchen_backend/src/uploads/${post.file}`)"
              alt="Image"
              class="img-fluid"
            /> -->
            <img
              v-bind:src="'https://apnakitchen-api.onrender.com/'+uploads"
              alt="Image"
              class="img-fluid"
            />
            
            <div class="restaurant-name ">
              <h4>{{post.restaurantName}}</h4>
            </div>
            <div class="restaurant-description">
              <h5>{{post.description}}</h5>
            </div>
            <div>
              <span class="pricetag"></span>
              <button @click="goTodetail(post.email)" class="btn add btn-danger">Show Menu</button>
            </div>
          </div>
      </div>
    </div>
 

    <!-- <div class="container2">
      <div class="row" v-for="post in postDetails" :key="post.email">
      
          <div
            class="col-md-4 cards"
            v-for="(data, index) in products"
            :key="index"
          >
            <img
              v-bind:src="require(`../../../backend/src/uploads/${post.file}`)"
              alt="Image"
              class="img-fluid"
            />
            <h3 @click="goTodetail(data.productId)" class="Food-caption">
              {{ data.productTitle }}
            </h3>
            <div>
              <span class="pricetag">Price</span>
              <button class="btn add btn-danger">Add</button>
            </div>
          </div>
        </div>
      </div> -->
     <footerComp/> 
  </div>
</template>
<script>
import { products } from "../websiteData";
import axios from "axios";
import footerComp from './footerComp.vue'
export default {
  name: "homePage",
  components: {
    footerComp,
  },
  data() {
    return {
      title: "home",
      products,
      postDetails: [],
    };
  },
  methods: {
    goTodetail(prodId) {
      this.$router.push({ name: "detailsPage", params: { Pid: prodId } });
    },
    formatPosts(postData) {
      for (let key in postData) {
        this.postDetails.push({ ...postData[key], id: key });
      }
    },
  },
  mounted() {
    axios
      .get("https://apnakitchen-api.onrender.com/api/newRestaurant")
      .then((response) => {
        console.log(response.data);
        this.formatPosts(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  },
};
</script>

<style scoped>
.container1 {
  display: flex;
}
.homeMainImg {
  height: 500px;
  width: 50vw;
  padding: 0 20px;
}
.branding {
  text-align: center;
  padding-top: 100px;
  color: #e14d2a;
  font-weight: 900;
}

.moto {
  text-align: center;
  color: #e14d2a;
  font-weight: 700;
}

.input-group {
  margin-top: 40px;
  padding: 10px 10px;
}



.container{
  display: flex;
 flex-direction: column;
 

}
.row{
  flex-direction:column;
}
.img-fluid{
  width: 900px;
  height: 250px;
}
.cards {
  width: 300px;
  height: 400px;
  border: 2px solid black;
  margin: 20px 44px;
  cursor: pointer;
}
.container2 {
  padding-top: 20px;
  margin-top: 10px;
  width: 90vw;
  margin: auto;
  cursor: default;
}

.container2-heading {
  color: #e14d2a;
}

.food-items {
  display: flex;
  margin: 20px;
  overflow-x: scroll;
}

.Food-desc {
  padding: 30px;
  cursor: default;
}

.Food-caption {
  text-align: center;
}

/* .cards {
  width: 300px;
  height: 400px;
  border: 2px solid black;
  margin: 20px 44px;
  cursor: pointer;
}
.pricetag {
  padding-top: 20px;
  font-weight: 800;
}

.add {
  margin-left: 200px;
} */
</style>
