// src/components/NavBar.vue
<template>
  <nav class="navbar">
    <router-link to="/" class="nav-logo">NC Games</router-link>
    <ul class="nav-links">
      <li><router-link to="/">Home</router-link></li>
      <li><router-link to="/games">Games</router-link></li>
      <li><router-link to="/about">About</router-link></li>
      <li class="nav-auth">
        <router-link to="/login">Login</router-link> / 
        <router-link to="/signup">Signup</router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: "NavBar",
};
</script>

<style scoped>
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #333;
  padding: 1rem 2rem;
  color: white;
}

.nav-logo {
  font-size: 1.5rem;
  font-weight: bold;
  color: white;
  text-decoration: none;
}

.nav-links {
  list-style: none;
  display: flex;
  gap: 1rem;
}

.nav-links a {
  color: white;
  text-decoration: none;
  font-size: 1rem;
}

.nav-links a:hover {
  text-decoration: underline;
}
</style>
