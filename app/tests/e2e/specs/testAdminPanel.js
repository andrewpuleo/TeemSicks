describe("tests employee panel", () => {
    it("admin can add employee through admin panel", ()=>{
        cy.visit("localhost:8080/login");
        cy.get("input[id='validationCustom01']").type('admin');
        cy.get("input[id='validationCustom02']").type('administrator');
        cy.get("#loginB").click();
        cy.contains("Administrator").click({force:true});
        cy.get("[placeholder='First Name']").type("Issac");
        cy.get("[placeholder='Last Name']").type("Einstein");
        cy.get("[placeholder='User Name']").type("IE");
        cy.get("[placeholder='Password']").type("password");
        cy.get("[placeholder='Phone']").type("1111111");
        cy.get("[placeholder='Email']").type("Issac@einstein.com");
        cy.contains("Add Employee").click();
        cy.reload();
        cy.visit("localhost:8080/login");
        cy.get("input[id='validationCustom01']").type('admin');
        cy.get("input[id='validationCustom02']").type('administrator');
        cy.get("#loginB").click();
        cy.contains("Administrator").click({force:true});
        cy.contains("Issac Einstein");
        cy.contains("IE");
        //cy.contains('1111111');
        cy.contains("Issac@einstein.com");
    });
});