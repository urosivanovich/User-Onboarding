describe('User App', () => {
    beforeEach(() => {

        cy.visit('http://localhost:3000')
    })

    const textInput = () => cy.get('input[name=username]');
    const emailInput = () => cy.get('input[name=email]');
    const passwordInput = () => cy.get('input[name=password');
    const terms = () => cy.get('input[name=terms]');
    const button = () => cy.get('button[id="submitBtn"]');

    it('checking to make sure test work', () => {
        expect(1+2).to.equal(3);
        expect(2+2).not.to.equal(5);
        expect({}).not.to.equal({});
        expect({}).to.eql({});
    })

    it('the proper elements are showing', () => {
        textInput().should('exist');
        emailInput().should('exist');
        passwordInput().should('exist');
        button().should('exist');

    })

    it('can navigate to the site', () => {
        cy.url().should('include', 'localhost');
    })
    
    it('submit button start out disabled', () => {
        button().should('be.disabled')
    })

    it('can type in the inputs', () => {
        textInput().should('have.value', '').type('Hunter Thom').should('have.value', 'Hunter Thom');
    })
    it('can type in the inputs', () => {
        emailInput().should('have.value', '').type('hunter@thom.com').should('have.value', 'hunter@thom.com');
    })
    it('can type the input', () => {
        passwordInput().should('have.value', '').type('password').should('have.value', 'password');
    })

    it('invalid inputs', () => {
        emailInput().type('hunter@thom')
        cy.contains('Valid email address please')
        button().should('be.disabled')
    })
    it('invalid inputs', () => {
        textInput().type('Hunt')
        cy.contains('username must be 10 caracters')
        button().should('be.disabled')
    })
    it('post', () => {
        textInput().type('Hunter Thom')
        emailInput().type('hunter@thom.com')
        passwordInput().type('password')
        terms().check()
        button().click()
    })



})