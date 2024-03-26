const locators = require("../src/locators/index");
import dataProvider from '../fixtures/dataProvider.json';

describe("Cart Page", () => {
        beforeEach(() => {
                cy.visit('/')
        })
        it("Verify clicking on cart button takes you to cart page @ID: 6", () => {
                cy.get(locators.navBarCartButton).click();
                cy.checkURL('view_cart');
        });

        it("Verify clicking on click on 'here to buy products' should navigate the user to product page @ID: 7", () => {
                cy.get(locators.navBarCartButton).click();
                cy.get(locators.emptyCartProductButton).click()
                cy.checkURL('product');
        });

        it("Verify the user is able to add/remove items to/from the cart @ID: 8", () => {
                cy.intercept(dataProvider.APIs.addToCart).as('addToCart')

                cy.get(locators.navBarProductsButton).click();
                cy.get(locators.addToCartFirstProduct).click();
                cy.get(locators.popMessageTitle).should('have.text', 'Added!');
                // Wait for add to cart API to return 200
                cy.wait('@addToCart');
                // Check item in cart
                cy.get(locators.popupViewcartButton).click();
                cy.get(locators.firstProductInCart).should('be.visible');
                // Remove item from cart
                cy.get(locators.removeProductButton).click();
                cy.contains(dataProvider.labels.emptyCart).should('be.visible')
        });
});
