/// <reference types = "Cypress" />

import Login from '../pageObjects/login';

describe('login' , function(){
    const login = new Login();
    it('Sing in' , function()
    {
        cy.visit('http://react-redux.realworld.io/#/login');
        login.email().type("pranjalkandhari@gmail.com");
        login.password().type("samplePass");
        cy.get('.btn').contains('Sign in').should('be.visible').click();
    }
    )
})