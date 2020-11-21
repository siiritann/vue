<template>
  <div>
    <!--    <input v-model.number="a" type="number">-->
    <!--    <input v-model.number="b" type="number">-->
    <!--    {{ a + b }} {{a/b}} // kirjutab uue välja peale nende summa ilma enterit vajutamata-->
    <!--    loeb sisse e-maili muutuja-->
    <p>
      <input v-model="user.name" placeholder="enter your name">
    </p>
    <p>
      <input v-model="user.email" placeholder="enter e-mail">
    </p>
    <p>
      <input v-model="user.age" placeholder="enter your age">
    </p>
    <!--    ONCLICK VALUE-->
    <button v-on:click="register()">REGISTER</button>
    <br><br>
    {{ message }}
    <table border="1" style="margin-left: auto; margin-right: auto">
      <tr>
        <th>Name</th>
        <th>Email</th>
        <th>Age</th>
      </tr>
      <tr v-for="row in resultList">
        <td>{{row.name}}</td>
        <td>{{row.email}}</td>
        <td>{{row.age}}</td>
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
let registerFunction = function () {
  let url = "http://localhost:8080/registerpost"
  let config = {
    params: {
      name: this.name,
      email: this.email,
      age: this.age
    }
  }
  let requestBody = {}
  this.$http.post(url, this.user, config)
      .then(this.showResponse)
  console.log(this.showResponse)
}

export default {
  name: 'Register',
  components: {
    RegisterPage
  },
  methods: {
    register: registerFunction,
    showResponse: showResponse
  },
  data: function () {
    return {
      user: {},
      // email: "", // e-maili algväärtus
      // a: 0,
      // b: 0
      message: "default msg",
      resultList: []
    }
  }
}
</script>
