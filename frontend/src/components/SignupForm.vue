<!-- src/components/SignupForm.vue -->
<template>
    <div class="signup-form">
      <h2>Sign Up</h2>
      <form @submit.prevent="handleSignup">
        <div>
          <label for="username">Username</label>
          <input v-model="username" type="text" id="username" placeholder="Enter your username" required />
        </div>
        <div>
          <label for="email">Email</label>
          <input v-model="email" type="email" id="email" placeholder="Enter your email" required />
        </div>
        <div>
          <label for="password">Password</label>
          <input v-model="password" type="password" id="password" placeholder="Enter your password" required />
        </div>
        <button type="submit">Sign Up</button>
      </form>
      <p>Already have an account? <router-link to="/login">Login</router-link></p>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        username: '',
        email: '',
        password: ''
      };
    },
    methods: {
      async handleSignup() {
        try {
          const response = await axios.post('http://localhost:5000/api/auth/signup', {
            username: this.username,
            email: this.email,
            password: this.password
          });
          console.log('Signup successful:', response.data);
          this.$router.push({ name: 'login' }); // Redirect to login page after successful signup
        } catch (error) {
          console.error('Signup failed:', error);
          alert('Error during signup');
        }
      }
    }
  };
  </script>
  
  <style scoped>
  /* Add your styling here */
  </style>
  