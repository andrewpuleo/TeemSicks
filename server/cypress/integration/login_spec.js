describe('Go to the login page', function() {
  it('should navigate to the login page', function() {
    cy.visit('localhost:8080')
    cy.contains('Login').click()
    cy.url().should('include', '/login')
  })
})

describe('Create an account', function() {
  it('navigate to /register and should fill in account information', function() {
    cy.contains('Sign Up').click()
    cy.url().should('include', '/register')

    cy.reload()

    cy.get('#firstname')
      .type('Hello')
      .should('have.value', 'Hello')

    cy.get('#lastname')
      .type('World')
      .should('have.value', 'World')

    cy.get('#username')
      .type('hworld')
      .should('have.value', 'hworld')

    cy.get('#password')
      .type('mypassword')
      .should('have.value', 'mypassword')

    cy.get('#phonenumber')
      .type('1234567')
      .should('have.value', '1234567')

    cy.get('#email')
      .type('hworld@gmail.com')
      .should('have.value', 'hworld@gmail.com')

    cy.get('input[type="checkbox"]')
      .check({ force: true })

    cy.get('#signUp')
      .click()
  })
})

describe('Login as hworld', function() {
  it('type in a username and password, click login, change state', function() {
    cy.contains('Login')
    .click()

    cy.get('.UserName')
      .find('.form-control')
      .type('hworld')
      .should('have.value', 'hworld')

    cy.get('.PassWord')
      .find('.form-control')
      .type('mypassword')
      .should('have.value', 'mypassword')

    cy.get('.btn-primary').click()

    cy.get('.dropdown')
  })
})
