<template>
  <div id="app" class="wrapper">
    <h1>Simon The Game</h1>
    <div class="game-board">
      <div class="simon">
        <div class="tile red" @click="press(0)"/>
        <div class="tile blue" @click="press(1)"/>
        <div class="tile yellow" @click="press(2)"/>
        <div class="tile green" @click="press(3)"/>
      </div>
      <div class="game-info-wrapper">
        <div class="game-info">
          <h2 v-if="gameOverMsg">
            Game over!<br>
            Score: {{ round }}
          </h2>
          <h2 v-else>Round: {{ round }}</h2>
          <button @click="start" :disabled="gameIsOn">START</button>
        </div>
        <div class="game-options">
          <h2>Difficulty:</h2>
          <label>
            <input
                    type="radio"
                    @click="setDifficulty(0)"
                    :checked="difficulty === difficultyTimes[0]"
            >
            Easy
          </label>
          <label>
            <input
                    type="radio"
                    @click="setDifficulty(1)"
                    :checked="difficulty === difficultyTimes[1]"
            >
            Normal
          </label>
          <label>
            <input
                    type="radio"
                    @click="setDifficulty(2)"
                    :checked="difficulty === difficultyTimes[2]"
            >
            Hard
          </label>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app',
  data(){
    return {
      difficultyTimes: [1500, 1000, 400],
      difficulty: 1000,

      round: 0,
      sequence: [],
      timer: null,
      index: 0,
      locked: true,

      gameOverMsg: false,
      gameIsOn: false,
    }
  },
  methods: {
    setDifficulty(lvl){
      this.difficulty = this.difficultyTimes[lvl]
    },
    start(){
      this.gameOverMsg = false
      this.gameIsOn = true
      this.round = 0
      this.sequence = []
      this.startRound()
    },
    startRound(){
      this.round++
      this.generateSequence();
      this.index = 0
      this.timer = setInterval(this.show, this.difficulty)
      this.locked = true
    },
    generateSequence(){
      const n = Math.floor(Math.random() * 4)
      this.sequence.push(n)
    },
    show(){
      this.active(this.sequence[this.index]);
      this.index++
      if(this.index >= this.sequence.length){
        clearInterval(this.timer)
        this.index = 0
        this.locked = false
      }
    },
    press(n){
      if(!this.locked){
        if(n === this.sequence[this.index]){
          this.index++
          this.active(n)
          if(this.index === this.sequence.length) this.startRound()
        } else{
          this.gameOver()
          clearInterval(this.timer)
        }
      }
    },
    gameOver(){
      this.gameOverMsg = this.locked = true
      this.gameIsOn = false
    },
    active(n){
      const btns = document.querySelectorAll(".tile")
      btns[n].classList.add("active")
      const audio = new Audio(`https://raw.githubusercontent.com/kellyk/javascript-simon/master/sounds/${n + 1}.mp3`);
      audio.play();
      btns[n].addEventListener("webkitAnimationEnd", this.clear)
    },
    clear(){
      const btns = document.querySelectorAll(".tile")
      for(let i = 0; i < 4; i++){
        btns[i].classList.remove("active")
      }
    },
  }
}
</script>

<style lang="scss">
body{
  padding: 0;
  margin: 0;
}
#app {
  font-family: Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

h1{
  text-align: center;
  margin: 0 0 56px 0;
  padding: 24px;
}
.game-options h2, p, button {
  margin: 0 0 24px 0
}

.active {
  opacity: 1!important;
  animation: click 300ms;
}
@keyframes click {
  0%{
    opacity: 0.5;
  }
}

.wrapper {
  height: 100vh;
}
.game-board{
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
}
.simon {
  background: #fff;
  margin-right: 3em;
  width: 306px;
  height: 306px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  -webkit-border-radius: 150px 150px 150px 150px;
  border-radius: 150px 150px 150px 150px;
  -moz-box-shadow: 2px 1px 12px #aaa;
  -webkit-box-shadow: 2px 1px 12px #aaa;
  -o-box-shadow: 2px 1px 12px #aaa;
  box-shadow: 2px 1px 12px #aaa;
}

.tile {
  opacity: 0.4;
  -webkit-transition: opacity 250ms ease;
  -moz-transition: opacity 250ms ease;
  -ms-transition: opacity 250ms ease;
  -o-transition: opacity 250ms ease;
  transition: opacity 250ms ease;
  cursor: pointer;
}

.tile .lit {
  opacity: 1;
}

.red, .blue, .yellow, .green {
  width: 150px;
  height: 150px;
}
.red:hover, .blue:hover, .yellow:hover, .green:hover {
  border-style: solid;
  border-color: rgba(128, 128, 128, 0.5);
  border-width: 0;
}

.red:hover{
  border-left-width: 3px;
  border-top-width: 3px;
}
.blue:hover{
  border-right-width: 3px;
  border-top-width: 3px;
}
.yellow:hover{
  border-left-width: 3px;
  border-bottom-width: 3px;
}
.green:hover{
  border-right-width: 3px;
  border-bottom-width: 3px;
}


.red {
  background: #FF5643;
  border-radius: 150px 0 0 0;
  width: 150px;
  align-self: end;
  justify-self: end;
}

.blue {
  background: dodgerblue;
  border-radius: 0 150px 0 0;
  width: 150px;
  align-self: end;
  justify-self: start;
}

.yellow {
  background: #FEEF33;
  border-radius: 0 0 0 150px;
  width: 150px;
  align-self: start;
  justify-self: end;
}

.green {
  background: #BEDE15;
  border-radius: 0 0 150px 0;
  width: 150px;
}

.game-info button {
  width: 7em;
  box-sizing: border-box;
  font-size: 1.4em;
  -webkit-border-radius: 10px;
  border-radius: 10px;
  background: #6DABE8;
  color: white;
  border: none;
  padding: 0.3em 0.6em;
  cursor: pointer;
}
.game-info button:hover {
  background: #78BCFF;
}
.game-info button:focus {
  outline: none;
}
.game-info button:disabled{
  background: #c4e0ff;
  cursor: default;
}
.game-options{
  display: flex;
  flex-direction: column;
}
.game-options label{
  cursor: pointer;
}
.game-options input[type="radio"] {
  margin-right: 10px;
}
</style>
