console.log("Vue ok", Vue);
const { createApp } = Vue;
const app = createApp({
  data() {
    return {
      newTodo: {
        text: "",
        done: false,
      },
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
      this.todos = this.todos.filter((todo) => {
        return todo[currentIndex];
      });
    },
  },
});
app.mount("#root");
