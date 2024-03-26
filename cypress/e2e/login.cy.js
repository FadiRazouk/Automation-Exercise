import credentials from '../fixtures/credentials.json';
import { login } from "../src/helper/login";
const locators = require("../src/locators/index");

describe("Login-Logout", () => {
        beforeEach(() => {
                cy.visit('/');
        })
        it("Verify clicking on login button takes you to login page @ID: 1", () => {
                cy.get(locators.navBarLoginButton).click();
                cy.checkURL('login');
        });

        it("Verify the user is able to sign-in with valid credentials @ID: 2", () => {
                cy.get(locators.navBarLoginButton).click();
                login.loginCheck(credentials.login.validLogin);
        });
        it("Verify the user showen an error message when using invalid credentials @ID: 3", () => {
                cy.get(locators.navBarLoginButton).click();
                login.loginCheck(credentials.login.invalidLoging);
        });

        it("Verify the user showen an error message when using invalid user name and valid password @ID: 4", () => {
                cy.get(locators.navBarLoginButton).click();
                login.loginCheck(credentials.login.InvalidUserNameValidPassword);
        });

        it("Verify the user showen an error message when using invalid password and valid username @ID: 5", () => {
                cy.get(locators.navBarLoginButton).click();
                login.loginCheck(credentials.login.validUserNameInvalidPassword);
        });
});
