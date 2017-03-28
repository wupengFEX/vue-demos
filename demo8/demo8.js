var app = new Vue({
  el: '#demo8',
  data: {
    todos: []
  },
  beforeCreate: function () {
    // this.todos.push('beforeCreate');
  },
  created: function () {
    this.todos.push('created');
  },
  beforeMount: function () {
    this.todos.push('beforeMount');
  },
  mounted: function () {
    this.todos.push('mounted');
  },
  beforeDestory: function () {
    debugger;
    this.todos.push('beforeDestory');
  },
  destroyed: function () {
    debugger;
    this.todos.push('destroyed');
  }
});

var vm = new Vue({
  el: '#demo8-1',
  data: {
    todos: []
  },
  methods: {
    remove: function () {
      app.$el.remove();
    }
  }
});

var vm1 = new Vue({
  el: '#demo8-2',
  data: app.$data
})