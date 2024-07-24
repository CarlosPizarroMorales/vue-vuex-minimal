<template>
  <h1>El valor actual es: {{ contador }}</h1>
  <div class="btn-wrapper">
    <button @click="accionQuitarUno">➖</button>
    <button @click="accionAgregarUno">➕</button>
  </div>
  <hr>
  <form @submit.prevent="usarAction">
    <label>¿Cuántos? <input type="number" name="cuanto" min="0" step="1" v-model="cuanto"></label>
    <label>Agregar<input type="radio" name="que" id="" v-model="que" value="sumar" checked></label>
    <label>Quitar<input type="radio" name="que" id="" v-model="que" value="restar"></label>
    <input type="submit" value="Enviar"/>
  </form>
</template>

<script>
  import { mapState } from 'vuex';
  import { mapActions } from 'vuex';

  export default {
    name: 'App',
    computed: { ...mapState(['contador']) },
    methods: {
      ...mapActions([
        'accionAgregarUno','accionQuitarUno','accionAgregarN','accionQuitarN'
      ]),
      usarAction(event) {
        const e = event.target;
        e.que.value === 'sumar' ? this.accionAgregarN(e.cuanto.value)
                                : this.accionQuitarN(e.cuanto.value);
      } 
   },
  }
</script>

<style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    background-color: rgb(27, 22, 22);
    color: #afd2f5;
    margin: 0 auto;
    margin-top: 60px;
    width: 60%;
    padding: 2rem 0;
  }

  button {
    font-size: 1.5rem;
    padding: .25rem;
    margin-bottom: 2rem;
  }
  
  button:last-child {
    margin-left: 1rem;
  }

  form {
    margin-top: 2rem;
  }
  label {
    margin-left: 2rem;
  }

  input[type="submit"] {
    margin-left: 4rem;
  }
</style>
