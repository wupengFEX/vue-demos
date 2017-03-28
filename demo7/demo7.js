var vm = new Vue({
  el: '#demo7',
  data: {
    todos: [
    	{text: 'first'},
    	{text: 'second'},
    	{text: 'third'},
    	{text: 'forth'},
    	{text: 'fifth'}
    ]
  }
})

var vm1 = new Vue({
  el: '#demo7-1',
  data: {
    element: null,
    sourceData: null
  },
  methods: {
    getEl: function () {
      this.element = vm.$el === document.getElementById('demo7');
    },
    getData: function() {
      this.sourceData = vm.$data;
    }
  }
});