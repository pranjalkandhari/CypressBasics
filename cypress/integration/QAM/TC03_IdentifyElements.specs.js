/// <reference types = "Cypress" />
describe('login' , function(){
    it('Sign in' , function()
    {
        cy.visit('https://react-redux.realworld.io/#/login');
        cy.title().should('eq' , 'Conduit');
        cy.location('protocol').should('eq' , 'https:');

        //Now adding a new check: to check the elements within the form elements:
        cy.get('form').within(($form) => {

            //Instead of gving type we can also use first,last and eq for reach.

            cy.get('input').first().type("pranjalkandhari@gmail.com");
            cy.get('input').eq(1).type("samplePass");

            //To submit the form:
            cy.root().submit(); //Submits the form yeilded from the form.
            //This happens as the submit button is of the type submit.
        })
        cy.contains('Your Feed' , {timeout : 10000}).should('be.visible');
    })


    //Another test to open settings:
    it('Open Settings' , function(){
        //we can easily and uniquely reach the settings button as it is in another element: nav bar:
        cy.get('.nav').children().contains('Settings').click();
        cy.contains('Your Settings').should('be.visible');
        cy.visit('https://react-redux.realworld.io/#/login');
    })

})