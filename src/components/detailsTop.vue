<template>
  <div>
    <div class="row">
      <div class="col-8">
        
      </div>
      <div class="col-4">
        <img
              v-bind:src="require(`../../../ApnaKitchen_backend/src/uploads/${post.file}`)"
              alt="Image"
              class="img-fluid"
            />
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "detailsTop",
  data() {
    return {
      postDetails: [],
    };
  },
  mounted() {
    axios
      .get("http://localhost:4000/api/newRestaurant")
      .then((response) => {
        console.log(response.data);
        this.formatPosts(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  },
  methods: {
    formatPosts(postData) {
      for (let key in postData) {
        this.postDetails.push({ ...postData[key], id: key });
      }
    },
  },
};
</script>

<style scoped>
.row {
  width: 100vw;
  padding: 80px;
}
</style>
