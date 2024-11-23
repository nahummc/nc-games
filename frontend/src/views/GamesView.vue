<template>
  <div class="games-page">
    <NavBar />
    <h1>Choose a Game</h1>
    <div class="game-list">
      <router-link to="/games/snake" class="game-card">
        <h3>Snake</h3>
        <p>Navigate the snake and eat food to grow longer!</p>
      </router-link>
      <!-- Add more game links here as you add new games -->
    </div>
    <FooterBar/>
  </div>
</template>

<script>
import NavBar from "../components/NavBar.vue";
import FooterBar from "../components/FooterBar.vue";

export default {
  name: "GamesView",
  components: {
    NavBar,
    FooterBar,
  },
};
</script>

<style scoped>
.games-page {
  padding: 2rem;
  text-align: center;
}

.game-list {
  display: flex;
  justify-content: center;
  gap: 2rem;
  flex-wrap: wrap;
  margin-top: 2rem;
}

.game-card {
  display: block;
  width: 200px;
  padding: 1rem;
  background-color: #f4f4f4;
  border: 1px solid #ccc;
  border-radius: 8px;
  text-decoration: none;
  color: #333;
  text-align: center;
}

.game-card:hover {
  background-color: #e0e0e0;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}
</style>
