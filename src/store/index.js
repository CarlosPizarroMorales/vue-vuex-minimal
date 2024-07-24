import { createStore } from 'vuex'
// acá puedo importar recursos/assets para el state
// import juegos from 'miruta/miarchivo.json

export default createStore({
  state: {
    contador: 0,
    // juegos 👀 el nombre importado
  },
  mutations: {
    agregarUno(state) {                   // SIN payload (2do argumento)
      state.contador++;
    },
    quitarUno(state) {
      state.contador--;
    },
    agregarN(state, cuanto) {             // CON payload (2do argumento)
      state.contador += cuanto;
    },
    quitarN(state, cuanto) {
      state.contador -= cuanto;
    },
  },
  actions: {
    accionAgregarUno(context) {           // SIN payload (2do argumento)
      context.commit('agregarUno');
    },
    accionQuitarUno(context) {
      context.commit('quitarUno');
    },
    accionAgregarN(context, cuanto) {     // CON payload (2do argumento)
      cuanto = Number(cuanto);
      context.commit('agregarN', cuanto);
    },
    accionQuitarN(context, cuanto) {
      cuanto = Number(cuanto);
      context.commit('quitarN', cuanto);
    },
  },
  // Los getters y módulos no son 
  // necesarios para el desafío
  getters: {
  },
  modules: {
  }
})
