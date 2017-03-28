Vue.component('todo-item', {
    props: ['todo'],
    template: '<li> This is {{todo.text}} item</li>'
});

var app = new Vue({
    el: '#demo6',
    data: {
        todos: [
            {text: 'first'},
            {text: 'second'},
            {text: 'third'},
            {text: 'forth'},
            {text: 'fifth'}
        ]
    }
});