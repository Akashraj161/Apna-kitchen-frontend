<template>
<div class="row">
    <div class="col-sm-5">
      <div class="card">
        <div class="card-body">
          <h5 class="card-title">Add new Restaurant</h5>
          <p class="card-text">
            Now adding your restaurant is easy and you are just few steps away
            from starting your kitchen in ApnaKitchen
          </p>
          <router-link to="/newRestaurant" class="btn btn-primary"
            >Add restaurant</router-link
          >
        </div>
      </div>
    </div>
    <!-- <div class="col-sm-5">
      <div class="card">
        <div class="card-body">
          <h5 class="card-title">Already registered?</h5>
          <p class="card-text">
            If you have already registered your restaurant you can login to
            access your restaurant product as admin
          </p>
          <router-link to="/adminLogin" class="btn btn-primary"
            >Login Now</router-link
          >
        </div>
      </div>
    </div> -->
  </div> 
  
</template>

<script>
  export default {
    data: () => ({ drawer: null }),
  }
</script>

<style scoped>
.row {
  width: 100vw;
  padding: 20px 20px;
}
</style>
