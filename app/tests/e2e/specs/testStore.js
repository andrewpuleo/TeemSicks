describe("Tests the store functionality", () =>{
    it("sorting low to high", () => {
        cy.visit("localhost:8080/store");
        cy.contains("View All").click();
        cy.contains("Price: low -> high").click({force:true});
        cy.get(".StoreItem").first().click();
        cy.contains("$17.04");
    });
    it("sorting High$ -> Lost$", () => {
        cy.contains('button', 'Store').click();
        cy.contains("Price: high -> low").click();
        cy.get(".StoreItem").last().click();
        cy.contains("$17.04");
    });
    it("shows item on sale only", () => {
        cy.contains('button', 'Store').click();
        cy.contains("On Sale").click();
        cy.get(".StoreItem").each(() => {
            cy.get("[id='on-sale']");
        });
    });
    it("shows newest", () => {
        cy.contains("Newest").click();
        cy.get(".StoreItem").last().click();
        cy.contains("SpinFit");
    });
    it("shows Road Bikes", () => {
        cy.contains('button', 'Store').click();
        cy.contains("Road Bikes").first().click();
        cy.contains("Road Bikes");
    });
    it("shows Mountain Bikes", () => {
        cy.contains('button', 'Store').click();
        cy.contains("Mountain Bikes").first().click();
        cy.contains("Mountain Bikes");
    });
    it("shows Accessories", () => {
        cy.contains('button', 'Store').click();
        cy.contains("Accessories").first().click();
        cy.contains("Accessories");
    });
})
