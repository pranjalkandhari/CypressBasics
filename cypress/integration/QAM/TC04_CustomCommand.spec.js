//The custom command is added in the file commands.js in the support file.
//commands.js is the first file to be run in Cypress testing.

/// <reference types = "Cypress" />
describe('login' , function(){

    Cypress.config('pageLoadTimeout' , 10000); //Sets this to default configuration for this file

    //Also Instead of it(integrated test) we can use befor:
    //If before fails no other it will run.
    before(function()
    {
        cy.SignIn(); //Now we have made this SignIn Command in Commands.js
    })

    it('Open Settings' , function(){
        cy.get('.nav').children().contains('Settings').click();
        cy.contains('Your Settings').should('be.visible');
        cy.visit('https://react-redux.realworld.io/#/login');
    })

})