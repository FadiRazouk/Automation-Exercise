require('cypress-delete-downloads-folder').addCustomCommand();

Cypress.Commands.add('checkURL', (text) => {
    cy.url().should('include', text);
})