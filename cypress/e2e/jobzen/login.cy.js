describe('jobzen Login', () => {
    beforeEach(() => {
        cy.visit('https://jobzen.zipify.xyz/')
    })

    it('Login with invalid credentials', () => {
        cy.wait(1000)
        cy.get('nav a[href="./login.php"]').click()
        cy.get('input[name="userName"]').type('ulia')
        cy.get('input[name="password"]').type('123456')
        cy.get('#loginForm button').click()
        cy.get('.alert.warning').should('be.exist')
    })

    it('Login with valid credentials', () => {
        cy.wait(1000)
        cy.get('nav a[href="./login.php"]').click()
        cy.get('input[name="userName"]').type('testAccount')
        cy.get('input[name="password"]').type('123')
        cy.get('#loginForm button').click()
        cy.get('nav a[href="./logout.php"]').should('be.exist')
    })
})