// src/views/HomeView.vue
<template>
  <div class="home-view">
    <NavBar />
    <main>
      <h1>Welcome to NC Games</h1>
      <p>Explore exciting web-based games and compete for high scores!</p>
      <router-link to="/games" class="btn">Play Now</router-link>
    </main>
    <Footer />
  </div>
</template>

<script>
import NavBar from "../components/NavBar.vue";
import Footer from "../components/FooterBar.vue";

export default {
  name: "HomeView",
  components: {
    NavBar,
    Footer,
  },
};
</script>

<style scoped>
.home-view {
  text-align: center;
  padding: 2rem;
}

main {
  margin: 2rem 0;
}

.btn {
  display: inline-block;
  margin-top: 1rem;
  padding: 0.5rem 1.5rem;
  background-color: #4caf50;
  color: white;
  border: none;
  border-radius: 5px;
  text-decoration: none;
  font-size: 1rem;
  cursor: pointer;
}

.btn:hover {
  background-color: #45a049;
}
</style>