describe('Job Form Test Cases', () => {
    beforeEach(() => {
        cy.visit('https://jobzen.zipify.xyz/')
        cy.get('nav a[href="./login.php"]').click()
        cy.get('input[name="userName"]').type('testAccount')
        cy.get('input[name="password"]').type('123')
        cy.get('#loginForm button').click()
        cy.get('nav a[href="./logout.php"]').should('exist')
    })

    it('Check presence and visibility of all fields', () => {
        cy.visit('https://jobzen.zipify.xyz/create-job.php')
        cy.get('#createJobListing').within(() => {
            cy.get('#jobTitle').should('exist')
            cy.get('#location').should('exist')
            cy.get('#categories').should('exist')
            cy.get('#workingHours').should('exist')
            cy.get('#phoneNumber').should('exist')
            cy.get('#companyName').should('exist')
            cy.get('#companyWebsite').should('exist')
            cy.get('#email').should('exist')
            cy.get('#salary').should('exist')
            cy.get('#preferredGender').should('exist')
            cy.get('#minimumQualificationLevel').should('exist')
            cy.get('#maxAge').should('exist')
            cy.get('#minAge').should('exist')
            cy.get('#experience').should('exist')
            cy.get('#bannerImage').should('exist')
            cy.get('#closingDate').should('exist')
            cy.get('#closingTime').should('exist')
            cy.get('#jobDescription').should('exist')
        })
    })

    it('Submit form with all required fields filled', () => {
        cy.visit('https://jobzen.zipify.xyz/create-job.php')
        cy.get('#createJobListing').within(() => {
            cy.get('#jobTitle').type('Software Engineer')
            cy.get('#location').type('Panadura')
            cy.get('.drop-down-data').invoke('css', 'display', 'none')
            cy.get('#categories').type('Engineering')
            cy.get('.drop-down-data').invoke('css', 'display', 'none')
            cy.get('#workingHours').type('Full Time')
            cy.get('.drop-down-data').invoke('css', 'display', 'none')
            cy.get('#phoneNumber').type('1234567890')
            cy.get('#companyName').type('Test Company')
            cy.get('#companyWebsite').type('https://testcompany.com')
            cy.get('#email').type('test@test.com')
            cy.get('#salary').type('50000')
            cy.get('#preferredGender').type('Any')
            cy.get('.drop-down-data').invoke('css', 'display', 'none')
            cy.get('#minimumQualificationLevel').type('Bachelor\'s')
            cy.get('.drop-down-data').invoke('css', 'display', 'none')
            cy.get('#maxAge').type('40')
            cy.get('#minAge').type('18')
            cy.get('#experience').type('5')
            cy.get('#bannerImage').attachFile('4W1Vqj-LogoMakr.png')
            cy.get('#closingDate').type('2024-12-31')
            cy.get('#closingTime').type('17:00')
            cy.get('#jobDescription').type('This is a test job description.')
            cy.get('button:last').click()
        })
        cy.get('.alert.success').should('be.exist')
    })

    it('Submit form with required fields missing', () => {
        cy.visit('https://jobzen.zipify.xyz/create-job.php')
        cy.get('#createJobListing').within(() => {
            cy.get('#categories').type('Engineering')
            cy.get('.drop-down-data').invoke('css', 'display', 'none')
            cy.get('#workingHours').type('Full Time')
            cy.get('.drop-down-data').invoke('css', 'display', 'none')
            cy.get('#phoneNumber').type('1234567890')
            cy.get('#companyName').type('Test Company')
            cy.get('#companyWebsite').type('https://testcompany.com')
            cy.get('#email').type('test@test.com')
            cy.get('#salary').type('50000')
            cy.get('#preferredGender').type('Any')
            cy.get('.drop-down-data').invoke('css', 'display', 'none')
            cy.get('#minimumQualificationLevel').type('Bachelor\'s')
            cy.get('.drop-down-data').invoke('css', 'display', 'none')
            cy.get('#maxAge').type('40')
            cy.get('#minAge').type('18')
            cy.get('#experience').type('5')
            cy.get('#bannerImage').attachFile('4W1Vqj-LogoMakr.png')
            cy.get('#closingDate').type('2024-12-31')
            cy.get('#closingTime').type('17:00')
            cy.get('#jobDescription').type('This is a test job description.')

            cy.get('button:last').click()
        })
        cy.get(':invalid').should('exist').and('have.length.greaterThan', 0)

    })

})
