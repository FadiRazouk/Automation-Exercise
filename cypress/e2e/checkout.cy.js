const locators = require("../src/locators/index");
import credentials from '../fixtures/credentials.json';
import { login } from "../src/helper/login";
import { api } from "../src/helper/api";
import dataProvider from '../fixtures/dataProvider.json';


describe("Checkout Page", () => {
        beforeEach(() => {
                cy.visit('/')
        })
        it("Verify clicking checkout without loggin in shlould show a popup @ID: 9", () => {
                api.addToCart('1');
                api.addToCart('3');
                cy.get(locators.navBarCartButton).click();
                cy.get(locators.checkoutButton).click();
                cy.get(locators.mainTextPopup).eq(0).should('have.text', dataProvider.labels.unregisteredUserMessage)
        });

        it("Verify clicking checkout without loggin in shlould show a popup @ID: 10", () => {
                cy.deleteDownloadsFolder();
                cy.get(locators.navBarLoginButton).click();
                login.loginCheck(credentials.login.validLogin);

                api.addToCart('1');
                api.addToCart('3');
                cy.get(locators.navBarCartButton).click();
                cy.get(locators.checkoutButton).click();
                cy.get(locators.goToPaymentButton).click();
                cy.get(locators.nameOnCardInput).type(dataProvider.labels.cardHolderName);
                cy.get(locators.cardNumberInput).type(dataProvider.labels.cardNumber);
                cy.get(locators.cvcNumberInput).type(dataProvider.labels.cvcNumber);
                cy.get(locators.expiryMonthInput).type(dataProvider.labels.expiryMonth);
                cy.get(locators.expiryYearInput).type(dataProvider.labels.expiryYear);
                cy.get(locators.payButton).click();
                cy.contains(dataProvider.labels.orderConfirmationMessage).should('be.visible');
                cy.get(locators.downloadInvoiceButton).click();
                cy.readFile('cypress/downloads/invoice.txt').should('include', 'Hi FirstTest LastTest, Your total purchase amount is ');
        });
});
