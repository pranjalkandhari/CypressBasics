//Cypress can also be used for API testing :D
//For learning we use APIs from: http://dummy.restapiexample.com/

//Cypress makes HTTP request using request command.

describe('API Testing' , () => {
    it('GET - read', () => {
        cy.request('GET' , 'http://dummy.restapiexample.com/api/v1/employees');
    })

    it('POST - create' , () => {
        const item = {"name":"pranjalTest" , "salary":"123" , "age":"23"};
        cy.request('POST' , 'http://dummy.restapiexample.com/api/v1/create' , item)
        .its('body')
        .its('data')
        .should('include' , {name:'pranjalTest'})
    });

    it('PUT - update' , () => {
        const item = {"name" : "pranjalTest1"}
        cy.request({method:'PUT' , 
        url:'http://dummy.restapiexample.com/api/v1/update/21' ,
        body:item , 
        failOnStatusCode:false}).its('status').should('eq' , 200);
    })
})