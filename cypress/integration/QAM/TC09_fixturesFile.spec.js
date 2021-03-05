/// <reference types = "Cypress" />
describe('login' , function(){

    let userDetails;
    beforeEach(function(){
        //Added json file in fixtures.
        //Can use the json file using cy.fixture():
        cy.fixture('userLoginDetails').then( (user) => {
            userDetails = user;
        });
    })

    it('Sing in' , function()
    {
        cy.visit('http://react-redux.realworld.io/#/login');
            cy.get('input[type="email"]').type(userDetails.email);
            cy.get('input[type="password"]').type(userDetails.password);
        cy.get('.btn').contains('Sign in').should('be.visible').click();
    }
    )
})