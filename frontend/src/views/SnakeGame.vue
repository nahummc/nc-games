<template>
  <div>
    <div ref="gameContainer" class="game-container"></div>

    <div v-if="gameOver" class="game-over">
      <p>Game Over</p>
      <p>Food Collected: {{ foodCount }}</p>
      <p>Time Survived: {{ elapsedTime }} seconds</p>
      <button @click="startGame">Play Again</button>
      <button @click="goBack">Back to Games</button>
    </div>

    <div v-if="!gameStarted && !gameOver" class="start-button">
      <button @click="startGame">Start Game</button>
    </div>
  </div>
</template>

<script>
import p5 from "p5";
import { useRouter } from 'vue-router';

export default {
  name: "SnakeGame",
  data() {
    return {
      gameOver: false,
      gameStarted: false,
      foodCount: 0,
      startTime: 0,
      elapsedTime: 0,
    };
  },
  mounted() {
    this.$refs.gameContainer.style.display = "none"; // Initially hide the game container
  },
  beforeUnmount() {
    if (this.p5Instance) {
      this.p5Instance.remove();
    }
  },
  methods: {
  startGame() {
    this.gameStarted = true;
    this.gameOver = false;
    this.foodCount = 0;
    this.elapsedTime = 0;
    this.startTime = Date.now();
    this.$refs.gameContainer.style.display = "block"; // Show the game container

    const sketch = (p) => {
      let snake;
      let food;
      let resolution = 20;
      let columns;
      let rows;

      class Snake {
        constructor() {
          this.body = [p.createVector(0, 0)];
          this.xDirection = 1;
          this.yDirection = 0;
        }

        setDirection(x, y) {
          if (this.xDirection !== -x && this.yDirection !== -y) {
            this.xDirection = x;
            this.yDirection = y;
          }
        }

        update() {
          const head = this.body[this.body.length - 1].copy();
          head.x += this.xDirection;
          head.y += this.yDirection;
          this.body.push(head);
          if (!this.eatFood()) {
            this.body.shift();
          }
        }

        eatFood() {
          const head = this.body[this.body.length - 1];
          if (head.x === food.x && head.y === food.y) {
            placeFood();
            return true;
          }
          return false;
        }

        isGameOver() {
          const head = this.body[this.body.length - 1];
          if (head.x < 0 || head.y < 0 || head.x >= columns || head.y >= rows) {
            return true;
          }
          for (let i = 0; i < this.body.length - 1; i++) {
            if (head.equals(this.body[i])) {
              return true;
            }
          }
          return false;
        }

        draw() {
          p.fill(0, 255, 0);
          for (const part of this.body) {
            p.rect(part.x * resolution, part.y * resolution, resolution, resolution);
          }
        }
      }

      function placeFood() {
        const x = Math.floor(p.random(columns));
        const y = Math.floor(p.random(rows));
        food = p.createVector(x, y);
      }

      p.setup = () => {
        p.createCanvas(400, 400);
        columns = p.floor(p.width / resolution);
        rows = p.floor(p.height / resolution);
        snake = new Snake();
        placeFood();
        p.frameRate(10);
      };

      p.keyPressed = () => {
        switch (p.keyCode) {
          case p.UP_ARROW:
            snake.setDirection(0, -1);
            break;
          case p.DOWN_ARROW:
            snake.setDirection(0, 1);
            break;
          case p.LEFT_ARROW:
            snake.setDirection(-1, 0);
            break;
          case p.RIGHT_ARROW:
            snake.setDirection(1, 0);
            break;
        }
      };

      p.draw = () => {
        p.background(220);

        if (snake.isGameOver()) {
          this.gameOver = true;
          this.elapsedTime = Math.floor((Date.now() - this.startTime) / 1000);
          p.fill(255, 0, 0);
          p.textSize(32);
          p.textAlign(p.CENTER, p.CENTER);
          p.text("Game Over", p.width / 2, p.height / 2);
          p.noLoop();
          return;
        }

        snake.update();
        snake.draw();

        p.fill(255, 0, 0);
        p.rect(food.x * resolution, food.y * resolution, resolution, resolution);

        this.foodCount = snake.body.length - 1; // Points = snake length - 1
      };
    };

    this.p5Instance = new p5(sketch, this.$refs.gameContainer);
  },

  goBack() {
    this.$router.push("/games");
  }
},

};
</script>

<style scoped>
.game-container {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
}

.start-button, .game-over {
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  flex-direction: column;
}

button {
  margin-top: 10px;
}
</style>
