var app = new Vue({
	el: '#demo3',
	data: {
		seen: true
	},
	methods: {
		toFalse: function () {
			this.seen = false;
		},
		toTrue: function () {
			this.seen = true;
		}
	}
})