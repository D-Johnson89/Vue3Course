const app = Vue.createApp({
	data() {
		return {
			cart: [],
			premium: false,
		};
	},

	methods: {
		updateCart(id) {
			this.cart.push(id);
		},
		removeProduct() {
			if (this.cart.length > 0) {
				this.cart.pop();
			}
		},
	},
});
