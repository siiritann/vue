<template>
  <div>
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHqgHbKZi45q2WDFXk3IolI2qqIXnOfy00vw&usqp=CAU">
    <h1>THE MOST RELIABLE BANK YOU'LL EVER FIND</h1>
    <form>
      <h3>Register yourself here</h3>
      <p>
        <label for="firstName">Enter your first name </label>
        <input v-model="client.firstName" placeholder="enter your first name" id="firstName" type="text">
      </p>
      <p>
        <label for="lastName">Enter your last name </label>
        <input v-model="client.lastName" placeholder="enter your last name" id="lastName" type="text">
      </p>
      <input type="checkbox" name="checkbox" id="checkbox2">
      <router-link to="TOS" target="_blank">I agree with the terms</router-link><br><br>
      <button v-on:click="createclient()">CREATE CLIENT</button>
      <p id="error"></p>
    </form>
    <form>
      <h3>Already have account?</h3>
      <p>
        <label for="clientId">Enter your clientId here: </label>
        <input v-model="client.clientId" placeholder="enter your client Id" id="clientId" type="number" min="1">
      </p>
      <input type="button" id="login" class="btn btn-info" value="LOGIN"><br><br>
      <p id="errorlogin"></p>
    </form>
    <br><br>
    {{ message }}
    <table border="1" style="margin-left: auto; margin-right: auto">
      <tr>
        <th>clientId</th>
        <th>firstName</th>
        <th>lastName</th>
      </tr>
      <tr v-for="row in resultList">
        <td>{{ row.clientId }}</td>
        <td>{{ row.firstName }}</td>
        <td>{{ row.lastName }}</td>
      </tr>
    </table>
    <!--    <RegisterPage msg>Register page component</RegisterPage>-->
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import RegisterPage from '@/components/RegisterPage'

let showResponse = function (response) {
  // this.message = response.data;
  this.resultList = response.data;

}


// 1 - GET
// let registerFunction = function () {
//   // alert("vajutasid");
//   // alert(this.email); // kuvab konsooli selle emaili mille sisestasid väljale
//   this.$http.get("http://localhost:8080/register",
//       {
//         params: {
//           email: this.email
//         }
//       })
//       // .then(response => this.message = response.data);
//       .then(this.showResponse)
//       this.email = ""; // pärast nupule vajutamist annab selle väärtuse
// .then(function (response) {
//       alert(response.data);
//       console.log(response);
// this.message = response.data;
//     })
// }

// 2 - POST
let createclient = function () {
  let url = "http://localhost:8080/newclient"
  let config = {
    params: {
      firstName: this.firstName,
      lastName: this.lastName
    }
  }
  let requestBody = {}
  this.$http.post(url, this.client, config)
      .then(this.showResponse)
  console.log(this.showResponse)
}

export default {
  name: 'Register',
  components: {
    RegisterPage
  },
  methods: {
    // register: registerFunction,
    showResponse: showResponse,
    createclient: createclient
  },
  data: function () {
    return {
      client: {},
      // email: "", // e-maili algväärtus
      message: "default msg",
      resultList: []
    }
  }
}
</script>
