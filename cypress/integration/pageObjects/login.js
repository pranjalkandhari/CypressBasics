class login{
    email(){
        return cy.get('input[type = "email"]');
    }
    password()
    {
        return cy.get('input[type = "password"]');
    }
}
export default login;