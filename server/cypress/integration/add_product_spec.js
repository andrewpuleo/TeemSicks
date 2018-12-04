describe('Check the store for products', function() {
  it('should navigate to the store and look for Rockhopper', function() {
    cy.visit('localhost:8080')

    cy.contains('Store')
    .click()

    cy.contains('Rockhopper').should('be.visible')
    // This code can only be run immediately after the database has been seeded
    // cy.contains('Mycycle').should('not.exist')
  })
})

describe('Login as an admin jdoe', function() {
  it('should type in a username and password, click login, change state', function() {
    cy.contains('Login')
    .click()

    cy.get('.UserName')
      .find('.form-control')
      .type('jdoe')
      .should('have.value', 'jdoe')

    cy.get('.PassWord')
      .find('.form-control')
      .type('password')
      .should('have.value', 'password')

    cy.get('.btn-primary').click()

    cy.get('.dropdown')
  })
})

describe('Add a new product to the store', function() {
  it('should add the Mycycle to the store, inputting required info', function() {
    cy.contains('Administrator')
      .click({ force : true })

    cy.get('#productname')
      .type('Mycycle')
      .should('have.value', 'Mycycle')

    cy.get('#brand')
      .type('Specialized')
      .should('have.value', 'Specialized')

    cy.get('#price')
      .click()
      .type('{backspace}599.00')
      .should('have.value', '599.00')

    cy.get('#productdescription')
      .type('The Mycycle is bound to give you years of good old fashioned two-wheeled fun. From the mountains to streets of SLO, the Mycycle will push the limits.')
      .should('have.value', 'The Mycycle is bound to give you years of good old fashioned two-wheeled fun. From the mountains to streets of SLO, the Mycycle will push the limits.')

    cy.get('#inStockCheck')
      .click({ force:true })

    cy.get('#stockamount')
      .type('{backspace}6')
      .should('have.value', '6')

    cy.get('#photourl')
      .type('https://s7d5.scene7.com/is/image/Specialized/146739')
      .should('have.value', 'https://s7d5.scene7.com/is/image/Specialized/146739')

      cy.get('#add')
        .click()
  })
})

describe('Check the store for Mycycle', function() {
  it('should navigate to the store and Mycycle', function() {
    cy.contains('Store')
    .click()

    cy.contains('Mycycle').should('be.visible')
  })
})
