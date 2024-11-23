<!-- src/components/LoginForm.vue -->
<template>
    <div class="login-form">
      <h2>Login</h2>
      <form @submit.prevent="handleLogin">
        <div>
          <label for="email">Email</label>
          <input v-model="email" type="email" id="email" placeholder="Enter your email" required />
        </div>
        <div>
          <label for="password">Password</label>
          <input v-model="password" type="password" id="password" placeholder="Enter your password" required />
        </div>
        <button type="submit">Login</button>
      </form>
      <p>Don't have an account? <router-link to="/signup">Sign up</router-link></p>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        email: '',
        password: ''
      };
    },
    methods: {
      async handleLogin() {
        try {
          const response = await axios.post('http://localhost:5000/api/auth/login', {
            email: this.email,
            password: this.password
          });
          console.log('Login successful:', response.data);
          // Store JWT token in localStorage or Vuex store
          localStorage.setItem('authToken', response.data.token);
          this.$router.push({ name: 'home' }); // Redirect to home or dashboard
        } catch (error) {
          console.error('Login failed:', error);
          alert('Invalid email or password');
        }
      }
    }
  };
  </script>
  
  <style scoped>
  /* Add your styling here */
  </style>
  