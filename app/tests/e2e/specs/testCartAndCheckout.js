describe('Tests Cart Functionality', () => {
    it('Cart should be empty before adding',() => {
        cy.visit("localhost:8080/cart");
        cy.url().should('include', '/cart');
        cy.contains('$0.00');
    });
    it('Add to Cart and update total', () => {
        cy.contains('button', 'Store').click();
        cy.url().should('include', '/store');
        cy.get('#on-sale img').first().click();
        cy.contains("Add To Cart").click();
        cy.get('li')
          .should('have.class', 'nav-item active')
          .contains('Cart')
          .click();
        cy.location('pathname').should('eq', '/cart');
        cy.get('input').should('be.visible').and('have.value', '1');
    });
    it('view cart item from clicking the image', () => {
        cy.get('.item-thumbnail').click();
    });
    it('modify item quantitiy using spinner and update total', () => {
        cy.get('li')
          .should('have.class', 'nav-item active')
          .contains('Cart')
          .click();
        cy.location('pathname').should('eq', '/cart');
        cy.contains('.vnis__button', '+').click();
        cy.get('input').should('be.visible').and('have.value', '2');
        cy.contains('.vnis__button', '-').click();
        cy.get('input').should('be.visible').and('have.value', '1');
    });
    it('proceeds to checkout when clicking on the checkout button', () =>{
        cy.get('li').contains('Login').click();
        cy.get("input[id='validationCustom01']").type('jdoe');
        cy.get("input[id='validationCustom02']").type('password');
        cy.get("#loginB").click();
        cy.wait(2000);
        cy.get('li')
          .should('have.class', 'nav-item active')
          .contains('Cart')
          .click();
        cy.get('.checkoutB').click();
        cy.location("pathname").should('eq', '/checkOut');
    });
    it('type in shipping address, credit card info, and billing address', () =>{
        cy.get("input[id='validationCustom01']").type('TeemSicks');
        cy.get("input[id='validationCustom02']").type('1234567890');
        cy.get("input[id='validationCustom03']").type('line1');
        cy.get("input[id='validationCustom04']").type('line2');
        cy.get("input[id='validationCustom05']").type('testCity');
        cy.get("input[id='validationCustom06']").type('testState');
        cy.get("input[id='validationCustom07']").type('12345');
        cy.get("input[id='validationCustom08']").type('testCountry');
        cy.get("input[id='validationCustom09']").type('TeemSicks');
        cy.get("input[id='validationCustom10']").type('1234123412341234');
        cy.get("input[id='validationCustom11']").type('123');
        cy.get("input[id='validationCustom12']").type('1999-12');
        cy.get("input[id='validationCustom13']").type('line3');
        cy.get("input[id='validationCustom14']").type('line4');
        cy.get("input[id='validationCustom15']").type('testCityB');
        cy.get("input[id='validationCustom16']").type('testStateB');
        cy.get("input[id='validationCustom17']").type('12345');
        cy.get("input[id='validationCustom18']").type('testCountryB');
    });
    it('type in contact info for pickup', () => {
        cy.get('.Tab').contains('i', 'Pickup').click({force:true});
        cy.get("input[id='validationCustom19']").type('TeemSicks', {force:true});
        cy.get("input[id='validationCustom20']").type('1234567890', {force:true});
        cy.get("input[id='validationCustom21']").type('test@foxycle.com', {force:true});
    });
    it('proceeds to the confirmation page', () =>{
        cy.contains('Confirm!').click();
    })
    it('Delete from Cart', () => {
        cy.get('li')
          .should('have.class', 'nav-item active')
          .contains('Cart')
          .click();
        cy.get('#deleteButton').click();
        cy.contains('$0.00');
    });
});
