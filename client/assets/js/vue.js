var taskApp = new Vue({
  el: '#taskApp',
  data: {
    tasks: [],
    text: ''
  },
  methods: {
    addTask: function(e) {
      e.preventDefault();
      this.tasks.push({
        name: this.tasks.name,
        done: false,
        date: this.tasks.date
      });
    },
    deleteTask: function(task) {
      this.tasks.splice(this.tasks.indexOf(task), 1)
    },
  }
});
