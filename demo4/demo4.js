var app = new Vue({
  el: '#demo4',
  data: {
    todos: [
    	{text: 'first'},
    	{text: 'second'},
    	{text: 'third'},
    	{text: 'forth'},
    	{text: 'fifth'}
    ]
  },
  methods: {
  	add: function () {
  		this.todos.push({text: 'This is push item'});
  	},
  	remove: function () {
  		this.todos.pop();
  	},
  	clear: function () {
  		this.todos = [];
  	}
  }
})