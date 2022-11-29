<template>
  <div class="row body">
    <div class="col-sm-9">
      <div class="signupForm">
        <!-- <form @submit.prevent="addNewRestaurant"> -->
          <form action="http://localhost:4000/api/newRestaurant" method="post" enctype="multipart/form-data">
          <h1 class="loginTitle">Add New Restaurant</h1>
          <div class="input-group mb-4">
            <span class="input-group-text" id="basic-addon1">Name</span>
            <input
              v-model="restaurantName"
              name="restaurantName"
              type="text"
              class="form-control"
              placeholder="Restaurant Name"
            />
          </div>
          <div class="input-group mb-4">
            <span class="input-group-text" id="basic-addon1">Email</span>
            <input
              v-model="email"
              name="email"
              type="text"
              class="form-control"
              placeholder="Business Email"
            />
          </div>

          <div class="input-group mb-4">
            <span class="input-group-text" id="basic-addon1">Description</span>
            <input
              v-model="description"
              name="description"
              type="text"
              class="form-control"
              placeholder="Briefly describe your restaurant"
            />
          </div>


          <div class="input-group mb-4">
            <span class="input-group-text" id="basic-addon1">Phone</span>
            <input
              v-model="phoneNo"
              name="phoneNo"
              type="text"
              class="form-control"
              placeholder="Phone Number"
            />
          </div>

          <h3 class="form-title">Address</h3>
          <div class="row">
            <div class="input-group input-address mb-2">
              <span class="input-group-text" id="basic-addon1"
                >Address Line 1</span
              >
              <input
                v-model="aptName"
                name="aptName"
                type="text"
                class="form-control"
                placeholder="Floor/Building Name"
              />
            </div>
            <div class="input-group input-address mb-2">
              <span class="input-group-text" id="basic-addon1"
                >Address Line 2</span
              >
              <input
                v-model="street"
                name="street"
                type="text"
                class="form-control"
                placeholder="Locality/Street"
              />
            </div>
            <div class="input-group input-address mb-2">
              <span class="input-group-text" id="basic-addon1">City</span>
              <input
                type="text"
                v-model="locality"
                name="locality"
                class="form-control"
                placeholder="City"
              />
            </div>
            <div class="input-group input-address mb-2">
              <span class="input-group-text" id="basic-addon1">State</span>
              <input
                type="text"
                v-model="state"
                name="state"
                class="form-control"
                placeholder="State"
              />
            </div>
            <div class="input-group input-address mb-2">
              <span class="input-group-text" id="basic-addon1">Zip Code</span>
              <input
                v-model="zip"
                name="zip"
                type="text"
                class="form-control"
                placeholder="Zip/Postal Code"
              />
            </div>
          </div>

          <div>
            <h3 class="form-title">Upload Images</h3>
            <!-- <input @change="onFileChange" type="file" id="file" name="file" /> -->
            <input type="file" id="file" name="file" />
          </div>

          <br /><br />

          <div class="input-group mb-4">
            <span class="input-group-text" id="basic-addon1">Password</span>
            <input
              v-model="password"
              name="password"
              type="text"
              class="form-control"
              placeholder="Password"
            />
          </div>
          <div class="input-group mb-4">
            <span class="input-group-text" id="basic-addon1"
              >Confirm Password</span
            >
            <input
              v-model="confirmPassword"
              name="confirmPassword"
              type="text"
              class="form-control"
              placeholder="Confirm Password"
            />
          </div>
          <input type="submit" value="Register" class="button" />
          <!-- <input
            onclick="window.location.href = 'http://localhost:8081/adminLogin'"
            type="submit"
            class="btn btn-primary"
            value="Submit"
          /> -->
          <!-- <a href="http://localhost:8081/adminLogin"> submit</a> -->
        </form>
      </div>
    </div>
    <div class="col-sm-2">
      <div class="card">
        <div class="card-body">
          <h5 class="card-title">Already registered?</h5>
          <p class="card-text">
            If you have already registered your restaurant you can login to
            access your restaurant product as admin
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
//import axios from "axios";

// formData.append("image", imagefile.files[0]);
export default {
  name: "newRestaurant",
  data() {
    return {
       
        restaurantName: "",
        email: "",
        description:"",
        phoneNo: "",
        aptName: "",
        street: "",
        locality: "",
        state: "",
        zip: "",
        file: "",
        password: "",
        confirmPassword: "",
     
    };
  },
  // methods: {
  //   submit() {
  //     console.log("form has been submitted");
  //     this.$router.push({ path: "adminLogin" });
  //   },
  // },

  // methods: {
  //   async addNewRestaurant() {
  //     //console.log(formData);
  //     let result = await axios.post(
  //       "http://localhost:4000/api/newRestaurant",
  //       {
  //         restaurantName: this.restaurantName,
  //         email: this.email,
  //         phoneNo: this.phoneNo,
  //         aptName: this.aptName,
  //         street: this.street,
  //         locality: this.locality,
  //         state: this.state,
  //         zip: this.zip,
  //         password: this.password,
  //         confirmPassword: this.confirmPassword,
  //       },
  //       { config: { headers: { "Content-Type": "multipart/form-data" } } }
  //     );
  //     console.log(result);
  //     if (result.status == 201) {
  //       alert("login successful");
  //       localStorage.setItem("user-info", JSON.stringify(result.data));
  //       this.$router.push({ name: "adminLogin" });
  //     } else {
  //       alert("login failed");
  //     }
  //   },
  // },
  methods: {
    // onFileChange(e) {
    //   var files = e.target.files || e.dataTransfer.files;
    //   if (!files.length) return;
    //   this.createImage(files[0]);
    // },
    // createImage(file) {
    //   file = new Image();
    //   var reader = new FileReader();
    //   var vm = this;

    //   reader.onload = (e) => {
    //     vm.image = e.target.result;
    //   };
    //   reader.readAsDataURL(file);
    // },

    // async addNewRestaurant() {
    //   console.log(formData);
    //   let result = await axios.post(
    //     "http://localhost:4000/api/newRestaurant",

    //     this.form,

    //     { config: { headers: { "Content-Type": "multipart/form-data" } } }
    //   );
    //   console.log(result);
    //   if (result.status == 201) {
    //     alert("login successful");
    //     localStorage.setItem("user-info", JSON.stringify(result.data));
    //     this.$router.push({ name: "adminLogin" });
    //   } else {
    //     alert("login failed");
    //   }
    // },
  },
};
</script>

<style scoped>
form {
  padding-left: 20px;
}
.form-title {
  padding-bottom: 10px;
}

.signupForm {
  display: block;
}

.signupForm input {
  display: block;
}

.input-address {
  padding: 20px 20px;
  width: 50%;
}

.button {
  display: block;
  width: 400px;
  height: 35px;
  margin-left: auto;
  margin-right: auto;
  background-color: rgb(181, 181, 240);
  color: #fff;
}
</style>
