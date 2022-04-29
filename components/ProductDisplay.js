app.component("product-display", {
	template:
		/*html*/
		`<div class="product-display">
        <div class="product-container">
            <div class="product-image">
                <img :src="image" :class="{ 'out-of-stock-img': !inStock }" alt="" />
            </div>
            <div class="product-info">
                <h1>{{ title }}</h1>
                <p v-show="onSale">{{ sale }}</p>
                <p v-if="inventory > 10">In Stock</p>
            
                <p v-else>Out of Stock</p>
                <ul>
                    <li v-for="detail in details">{{ detail }}</liv-for>
                </ul>
                <ul>
                    <li v-for="(size, index) in sizes" :key="index">{{ size }}</li>
                </ul>
            
                <div v-for="(variant, index) in variants" :key="variant.id" @mouseover="updateVariant(index)" class="color-circle" :style="{ backgroundColor: variant.color }"></div>
                <button class="button" :class="{ disabledButton: !inStock }" :disabled="!inStock" @click="addToCart">Add to Cart</button>
                <button class="button" @click="removeCart">Remove Item</button>
            
            </div>
        </div>
    </div>`,

	data() {
		return {
			product: "Socks",
			brand: "Vue Mastery",
			onSale: true,
			selectedVariant: 0,
			details: ["50% cotton", "30% wool", "20% polyester"],
			variants: [
				{
					id: 2234,
					color: "green",
					image: "./assets/images/socks_green.jpg",
					quantity: 50,
				},
				{
					id: 2235,
					color: "blue",
					image: "./assets/images/socks_blue.jpg",
					quantity: 0,
				},
			],
			sizes: ["S", "M", "L", "XL"],
		};
	},

	methods: {
		addToCart() {
			this.cart += 1;
		},
		removeCart() {
			if (this.cart >= 1) {
				this.cart -= 1;
			}
		},
		updateVariant(index) {
			this.selectedVariant = index;
		},
	},

	computed: {
		title() {
			return this.brand + " " + this.product;
		},
		image() {
			return this.variants[this.selectedVariant].image;
		},
		inStock() {
			return this.variants[this.selectedVariant].quantity;
		},
		sale() {
			return this.brand + " " + this.product + " is on sale";
		},
	},
});
