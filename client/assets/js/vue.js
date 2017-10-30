var taskApp = new Vue({
  el: '#App',
  data: {
    item: {
      description: '',
      date: '',
      status: false
    },
    tasks: []
  },
  methods: {
    addTask: function() {
      axios.post('http://localhost:3000/todos', {
          description: this.item.description,
          date: this.item.date,
          status: false
        })
        .then(response => {
          console.log(response);
          this.tasks.push(response.data)
        })
        .catch(err => console.log(err))
    },

    getTask(){
      axios.get('http://localhost:3000/todos')
      .then(response => {
        console.log(response.data)
        this.tasks = response.data
        console.log('data',this.tasks);
      })
      .catch(err => {
        console.log(err);
      })
    },

    deleteTask: function(id) {
      axios.delete('http://localhost:3000/todos/'+id)
        .then(response => {
          this.tasks.splice(this.tasks.indexOf(id), 1)
          console.log('Deleted');
        })
        .catch(err => {
          res.send(err)
        })
    },

    updateTask: function(id){
      axios.put('http://localhost:3000/todos/'+id)
      .then(response => {
        this.status = true
        // this.description = description,
        // this.date = date,
      })
      .catch(err => {
        res.send(err)
      })
    }
  },
  created (){
    console.log('Created!');
    this.getTask()
  },
  mounted (){
    console.log('Mounted');
  }
})
