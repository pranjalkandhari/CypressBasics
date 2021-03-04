//then command allows to work with the subject yielded from previous command.

/// <reference types = "Cypress" />
describe('login' , function(){
    it('Sign in' , function()
    {
        cy.visit('https://react-redux.realworld.io/#/login');
        cy.title().should('eq' , 'Conduit');
        cy.location('protocol').should('eq' , 'https:');
        cy.get('input[type="email"]').type("pranjalkandhari@gmail.com");
        cy.get('input[type="password"]').type("samplePass");
        cy.get('.btn').contains('Sign in').should('be.visible').click();
        cy.contains('Your Feed' , {timeout : 10000}).should('be.visible');
    })

    it('Create a post' , function(){
        cy.contains('New Post').click();
        cy.hash().should('include' , '#/editor');
        cy.get('input[placeholder = "Article Title"]').type("Test");
        cy.get('input[placeholder = "What\'s this article about?"]').type("Test 1");
        cy.get('textarea[placeholder = "Write your article (in markdown)"]').type("Test 2");
        cy.contains("Publish Article").click();
        cy.url().should('include' , 'article');
    })

    it('Mark-unmark as favorite' , function(){
        cy.get('.nav-link').contains('pranjalkandhari').click(); 
        cy.get('.ion-heart').first().click(); 
        cy.contains('Favorited Article').click();
        cy.reload();
        cy.url().should('include' , 'favorites');
        cy.get('.ion-heart').first().click();
        //Use of then():
        cy.get(".pull-xs-right").eq(1).first().then( ($fav) => {
            const favCount = parseInt($fav.text());
            //console.log("VALUE OF TEXT IS: " + $fav.text() + "OK");
            expect(favCount).to.eq(1);
        }).click();
        cy.reload();
        cy.go('back'); 
    })
})