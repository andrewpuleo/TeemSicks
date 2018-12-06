describe("Tests the store functionality", () =>{
    it("sorting low to high", () => {
        cy.visit("localhost:8080/store");
        cy.contains("Low $ -> High $").click();
        cy.get(".StoreItem").first().click();
        cy.contains("$119");
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
        cy.get(".StoreItem").should("have.length", 8);
    });
    it("shows newest", () => {
        cy.contains("Newest").click();
        cy.get(".StoreItem").first().click();
        cy.contains("Meridian");
    });
})