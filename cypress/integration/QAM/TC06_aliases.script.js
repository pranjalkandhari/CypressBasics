//as() is used to create an alias.

/// <reference types = "Cypress" />
describe('login' , function(){
    Cypress.config('pageLoadTimeout' , 10000);
    before(function()
    {
        cy.SignIn();
    })

    it('Open Settings' , function(){

        //We make alias of the setting button as follows:
        cy.get('.nav').children().contains('Settings').as("settingButton");
        cy.get('@settingButton').click(); //Alias with then is used in TC05
        cy.contains('Your Settings').should('be.visible');
        cy.visit('https://react-redux.realworld.io/#/login');
    })

})