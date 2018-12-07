describe("Tests the store functionality", () =>{
    it("sorting low to high", () => {
        cy.visit("localhost:8080/store");
        cy.contains("Low $ -> High $").click();
        cy.get(".StoreItem").first().click(15, 15);
        cy.location("pathname").should("eq", "/item/20");
        cy.contains("$17.04");
    });
    it("sorting High$ -> Lost$", () => {
        cy.contains('button', 'Store').click();
        cy.contains("High $ -> Low $").click();
        cy.get(".StoreItem").first().click();
        cy.contains("$1200");
    });
    it("shows item on sale only", () => {
        cy.contains('button', 'Store').click();
        cy.contains("On Sale").click();
        cy.get(".StoreItem").each(() => {
            cy.get("[id='on-sale']");
        });
    });
    it("shows all items available", () => {
        cy.contains("View All").click();
        cy.get(".StoreItem").should("have.length", 17);
    });
    it("shows newest", () => {
        cy.contains("Newest").click();
        cy.get(".StoreItem").first().click();
        cy.contains("SpinFit");
    });
    it("shows Road Bikes", () => {
        cy.contains('button', 'Store').click();
        cy.contains("Road Bikes").click();
        cy.get(".StoreItem").should('have.length', 4);
    });
    it("shows Mountain Bikes", () => {
        cy.contains("Mountain Bikes").click();
        cy.get(".StoreItem").should('have.length', 3)
    });
    it("shows Accessories", () => {
        cy.contains("Accessories").click();
        cy.get(".StoreItem").should('have.length', 2);
    });
})