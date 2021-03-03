/// <reference types = "Cypress" />
//The above is a triple slash directive to see intellisense
// But we don't need it now as we have created the 

describe('login' , function(){
    it('Sing in' , function()
    {
        cy.visit('http://react-redux.realworld.io/#/login'); //This command is to launch the website.
       
        //Now are next step is to find the email address text box:
        //We use: cy.get(): This looks for an element of the properties we provide and gives us
        
        //Fill in the email and password:
        cy.get('input[type="email"]').type("pranjalkandhari@gmail.com");
        cy.get('input[type="password"]').type("samplePass");
        
        //Press the sign in button.
        //contains find the element with the given text (In case multiple elements have same class name)
        //should(be.visible): ensures that the button exits before we 
        cy.get('.btn').contains('Sign in').should('be.visible').click();
        //Be vivible is an assertion.
    }
    )
})