export class apiClass {
	/**
	 * This functions adds a product to the cart using an ID
	 */
	addToCart(productId) {
        cy.request(`/add_to_cart/${productId}`)
	}
}

export const api = new apiClass();
