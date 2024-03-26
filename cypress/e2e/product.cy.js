const locators = require("../src/locators/index");
import dataProvider from '../fixtures/dataProvider.json';

describe("Product page", () => {
        beforeEach(() => {
                cy.visit('/')
        })
        it("Verify clicking on product button takes you to Product page @ID: 11", () => {
                cy.get(locators.navBarProductsButton).click();
                cy.checkURL('product');
        });

        it("Verify the user is able to search in the product @ID: 12", () => {
                cy.get(locators.navBarProductsButton).click();
                cy.get(locators.productSearchBar).type(dataProvider.products.blueColor)
                cy.get(locators.productSeachButton).click()
                cy.get(locators.productListText).each((element) => {
                        cy.get(element).contains(dataProvider.products.blueColor, {matchCase: false})
                })
        });

        it("Verify the user is able to select a category  @ID: 13", () => {
                cy.get(locators.navBarProductsButton).click();
                cy.get(locators.productTitle).should('have.text', dataProvider.labels.allProductLabel);
                cy.get(locators.productWomenCategory).click();
                cy.get(locators.productWomenCategoryDress).click();
                cy.get(locators.productTitle).should('have.text', dataProvider.products.womenDress);

                cy.get(locators.productMenCategory).click();
                cy.get(locators.productMenCategoryTshirts).click();
                cy.get(locators.productTitle).should('have.text', dataProvider.products.menTshirt);

        });

        it("Verify the user is able to select a brand  @ID: 14", () => {
                cy.get(locators.navBarProductsButton).click();
                cy.get(locators.productTitle).should('have.text', dataProvider.labels.allProductLabel);
                cy.get(locators.productPoloBrand).click();
                cy.checkURL('brand_products/Polo');
                cy.get(locators.productTitle).should('have.text', dataProvider.products.brandPolo);
        });

});
