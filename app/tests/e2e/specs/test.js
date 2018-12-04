// https://docs.cypress.io/api/introduction/api.html

describe('Test that visits each page as a guest', () => {
  it('Visits the app root url', () => {
    cy.visit('localhost:8080');
    cy.contains('div', 'Our founder, Kris Fox, has always had a passion for biking. He has been repairing the bikes of friends and colleagues for as long as he can remember.');
    cy.contains('div', 'It is important to us that everyone gets their dream bike, not just any bike. We will help you on every step of your bike journey and ensure the decision you make is well educated.');
    cy.contains('h1', 'Meet the Staff!');
    cy.contains('h3', 'Freddy McFarmer');
    cy.contains('p', 'Store Manager');
    cy.contains('h3', 'Kris Fox');
    cy.contains('p', 'Store Owner');
    cy.contains('h3', 'Greg Gregory');
    cy.contains('p', 'Sales Associate');
  });
  it('visits the store page and able to view further details on items', () => {
    cy.contains('button', 'Store').click();
    cy.location('pathname').should('eq', '/store');
    cy.url().should('include', '/store');
    cy.contains('h3', 'Narrow Down Your Search');
    cy.get('#on-sale img').first().click();
    cy.location('pathname').should('eq', '/item/9');
  });
  it('visits the contact page', () => {
    cy.contains('button', 'Contact').click();
    cy.location('pathname').should('eq', '/contact');
    cy.url().should('include', '/contact');
    cy.contains('h1', 'Contacting Foxycle');
    cy.contains('h1', 'Address');
    cy.contains('p', '1400 Ramada Dr ');
    cy.contains('p', 'Paso Robles, CA 93446 ')
    cy.contains('h1', 'Phone');
    cy.contains('p', '805 225 5911');
    cy.contains('h1', 'Hours');
    cy.contains('p', ' M-F: 8am - 5pm');
    cy.contains('p', 'Sat: 10am - 4pm');
    cy.contains('h1', 'Contact Form');
    cy.contains('label', 'Full Name');
    cy.contains('label', 'Subject');
    cy.contains('label', 'Email');
    cy.contains('label', 'Messege');
    cy.get('input').should('be.visible');
  });
  it('visits the service page', () => {
    cy.contains('button', 'Service').click();
    cy.location('pathname').should('eq', '/services');
    cy.url().should('include', '/services');
    cy.contains('h', 'Service and Repair');
    cy.contains('b', 'Whether you need a quick tune up, repair');
    cy.contains('b', 'SERVICE PACKAGES');
    cy.contains('p', 'Minor tune-up');
    cy.contains('p', 'Brake overhaul');
    cy.contains('b', 'WHEELS');
    cy.contains('p', 'Flat tire repair');
    cy.contains('p', 'Hub bearing overhaul');
    cy.contains('b', 'BRAKES');
    cy.contains('p', 'Replace brake cable(s)');
    cy.contains('p', 'Install and adjust new brakes ');
    cy.contains('b', 'OTHER SERVICES');
    cy.contains('p', 'Replace seat');
    cy.contains('b', 'FRONT END');
    cy.contains('p', 'Replace handlebar grips');
    cy.contains('b', 'FRAME AND FORK');
    cy.contains('p', 'Derailleaur hanger repair/replace');
    cy.contains('b', 'DRIVETRAIN');
    cy.contains('p', ' Clean and lube ');
    cy.contains('p', 'Adjust/repair derailleaur ');
    cy.contains('b', ' BEARINGS ');
    cy.contains('p', 'Overhaul hub(s)');
  });
  it('visits the login page', () => {
    cy.get('li').contains('Login').click()
    cy.get('input').should('be.visible');
    cy.contains('p', 'Don\'t have an account?');
    cy.contains('a', 'Sign Up');
  });
  it('visits the register page', () => {
    cy.contains('Sign Up').click();
    cy.get('input').should('be.visible');
    cy.contains('button', 'Join Now');
    cy.contains('label', 'Agree to terms and conditions');
  });
  it('visits the cart page', () =>{
    cy.get('li').should('have.class', 'nav-item active').contains('Cart').click();
    cy.location('pathname').should('eq', '/cart');
    cy.contains('h1', 'Order');
    cy.contains('div', 'Item');
    cy.contains('div', 'Quantity');
    cy.contains('div', 'Price');
    cy.contains('h3', 'Subtotal');
    cy.contains('h3', 'TAX');
    cy.contains('h3', 'Total');
    cy.contains('button', 'Checkout!').click();
  });
  it('navigates back to the home page', () =>{
    cy.contains('button', 'Home').click();
    cy.location('pathname').should('eq', '/');
  });
  it('navigates back to the home page using the logo', () =>{
    cy.contains('button', 'Contact').click();
    cy.get('.logoImg img').click();
    cy.location('pathname').should('eq', '/');
});
});
