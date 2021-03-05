describe('ReadWrite file content' , function(){
    it('Write to a file' , function(){
        cy.writeFile('sampleFile.txt' , 'Hello World\n');
        cy.writeFile('sampleFile.txt' , 'I am Pranjal' , {flag:'a+'});
    })

    it('Read from a file' , function(){
        cy.readFile('sampleFile.txt').should('contain' , 'Hello World');
    })
})