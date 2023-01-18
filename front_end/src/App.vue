<template>
  <div>
    <p class="title">Register</p>
    <p><input class="text" type="text" placeholder="Email" v-model="email"/></p>
    <p><input class="password" type="password" placeholder="Password" v-model="password"/></p>
    <p class="create"><button @click="register" class="create1">Create account</button></p>
    <p class="account">Already have an account ? </p>
    <router-link class="sign" to="/login">Sign in here !</router-link>
  </div>
  <hr>
</template> 
