export class loginClass {
	/**
	 * This function logs in with a data set and depending on the result it verify
	 */
	loginCheck(data) {
		cy.get('[data-qa="login-email"]').type(data.userName);
		cy.get('[data-qa="login-password"]').type(data.password);
		cy.get('[data-qa="login-button"]').click()

		if(	data.result == 'pass'){
			cy.get('[href="/logout"]').should('be.visible')
		}else{
			cy.contains('Your email or password is incorrect!').should('be.visible');
		}
	}
}

export const login = new loginClass();
