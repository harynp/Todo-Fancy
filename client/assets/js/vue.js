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
    addTask: function(item) {
      axios.post('http://localhost:3000/todos', {
        description: this.tasks.description,
        date: this.tasks.date,
        status: false
      })
      .then(response => {
       this.tasks.push(response.data)
      })
      .catch(err => console.log(err))
    },
    // getTask(){
    //   axios.get('http://localhost:3000/todos')
    //   .then(response=>{
    //     this.tasks = response.data
    //   })
    //   .catch(err=>{
    //     console.log(err);
    //   })
    // },
    deleteTask(id){
      axios.delete('http://localhost:3000/items/'+id)
      .then(response => console.log('Deleted'))
      .catch(err => console.log(err));
      }
    }
  })
