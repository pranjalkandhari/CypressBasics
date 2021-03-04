/// <reference types = "Cypress" />
describe('login' , function(){
    it('Sign in' , function()
    {
        cy.visit('https://react-redux.realworld.io/#/login');

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
        cy.get('textarea[placeholder = "Write your article (in markdown)"]').type("Test 2");
        cy.contains("Publish Article").click();

        //Now we move to the next page after hitting the Publish Article Button.
        //To check the URL:
        cy.url().should('include' , 'article');
    })

    it('Mark-unmark as favorite' , function(){
        cy.get('.nav-link').contains('pranjalkandhari').click(); //My user ID and navlink is the class of that button.

        //Now we reach the profile page:
        //So wo click the heart to mark our app as favorite
        cy.get('.ion-heart').first().click(); //first() take the first element

        //Now click on Favorited Article button:
        cy.contains('Favorited Article').click();

        cy.reload();

        //Now after clicking this our URL changes. So we check:
        cy.url().should('include' , 'favorites');

        //Now we need to check if there is a heart on the page?
        //If yes we are good.
        cy.get('.ion-heart').click();

        //No we reload the page to see the changes:
        cy.reload();
        //Now we have clicked the Heart again so we need to check that our favorite list is empty.
        //cy.contains('No articles are here... yet.').should('be.visible');

        //To use the browser back or forward:
        cy.go('back'); //we can use -1 or 1 for back or forward.

    })

})