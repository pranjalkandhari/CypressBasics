/// <reference types = "Cypress" />
describe('login' , function(){
    it('Sign in' , function()
    {
        cy.visit('http://react-redux.realworld.io/#/login');

        //Now writing assestion to check is the title is correct:
        cy.title().should('eq' , 'Conduit');

        //To verify the protocol is HTTPS:
        cy.location('protocol').should('eq' , 'https:');

        cy.get('input[type="email"]').type("pranjalkandhari@gmail.com");
        cy.get('input[type="password"]').type("samplePass");
         
        cy.get('.btn').contains('Sign in').should('be.visible').click();

        //Now after logging in are we on the correct page?
        //But don't we need time to load?
        //Commands like get() and contains() have a default time out of 4 secs:
        cy.contains('Your Feed' , {timeout : 10000}).should('be.visible');
        //The 2nd parameter of contains is optional.
    })

    it('Create a post' , function(){
        //To check if we can create a post:

        //Check is the new post button exits:
        cy.contains('New Post').click();
        
        //Now after clicking have reached the right page?:
        //We check this by checking the Hash value in the URL:
        //The correct hash value must include: editor (as seen by using the webpage).
        cy.hash().should('include' , '#/editor');
        //Alternatively we can use location to get the hash value:
        //cy.location('hash').should('include' , '#/editor');

        //Now filling the form used to create a post.
        cy.get('input[placeholder = "Article Title"]').type("Test");
        cy.get('input[placeholder = "What\'s this article about?"]').type("Test 1");
        cy.get('input[placeholder = "Write your article (in markdown)"]').type("Test 2");
        cy.contains("Publish Article").click();

        //Now we move to the next page after hitting the Publish Article Button.
        //To check the URL:
        cy.url().should('include' , 'article');
    })

})