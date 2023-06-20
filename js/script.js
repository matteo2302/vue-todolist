console.log("Vue ok", Vue);
const { createApp } = Vue;
const app = createApp({
  data() {
    return {
      todos: [
        {
          text: "osservare le frogghe",
          done: false,
        },
        {
          text: "saltare 3 volte",
          done: false,
        },
        {
          text: "fare andare la lavastoviglie",
          done: false,
        },
        {
          text: "andare dal medico",
          done: false,
        },
        {
          text: "sistemare la camera",
          done: false,
        },
        {
          text: "leggi una pagina di libro",
          done: false,
        },
      ],
    };
  },
  methods: {
    removeFromLi(currentIndex) {
      this.todos.filter(i);
    },
  },
});
app.mount("#root");
