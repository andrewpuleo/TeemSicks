describe("tests employee panel", () => {
    it("admin can see employee panel and admin panel", ()=>{
        cy.visit("localhost:8080/login");
        cy.get("input[id='validationCustom01']").type('admin');
        cy.get("input[id='validationCustom02']").type('administrator');
        cy.get("#loginB").click();
        cy.contains("Administrator");
        cy.contains("Employee Panel");
    });
    it("admin can access employee panel", ()=>{
        cy.contains("Employee Panel").click({force:true});
        cy.contains("EMPLOYEES ONLY");
        cy.contains("This is a secure area");
    });
    it("Add a New Product using the employee panel", () => {
        cy.get("#productname").type("Mario Hat");
        cy.get("[name='productType']").get("[value='1']").check();
        cy.get("#brand").type("Mushroom Kingdom");
        cy.get("#onSaleCheck").check({force:true});
        cy.get("#price").clear().type(2000);
        cy.get("#presaleprice").clear().type(3000);
        cy.get("#productdescription").type("An important part of Mario's clothing, and one of the most iconic clothing items in gaming. The cap is red and has Mario's 'M' symbol; he is almost never seen without it in his adventures.");
        cy.get("#inStockCheck").check({force:true});
        cy.get("#stockamount").clear().type(2);
        cy.get("#color").type("red");
        cy.get("#photourl").type("https://s2.thcdn.com/productimg/600/600/11678299-5414557188342211.jpg");
        cy.get("#add").click();
        cy.contains('button', 'Store').click();
        cy.contains("Newest").click();
        cy.get(".StoreItem").first().click();
        cy.contains("Mario Hat");
    });
    it("Change home alert", () => {
        cy.contains("Employee Panel").click({force:true});
        cy.get("#homeAlertUpdater").type("We might deserve an A");
        cy.get("#homeAlertUpdaterButton").click();
        cy.get('.logoImg img').click();
        cy.contains("We might deserve an A");
        cy.contains("Employee Panel").click({force:true});
        cy.get("#homeAlertUpdater").clear();
        cy.get("#homeAlertUpdaterButton").click();
    });
    it("Change store hours", () => {
        cy.get("#weekdaysHours").type("M-F: 2pm - 3pm");
        cy.get("#weekendsHours").type('Sat: 12am - 1am');
        cy.get("#hoursUpdaterButton").click();
        cy.contains("Store Hours Successfully Updated!");
        cy.get('.logoImg img').click();
        cy.contains("M-F: 2pm - 3pm");
        cy.contains('Sat: 12am - 1am');
    });
    it("employee can only see employee panel", ()=>{
        cy.contains("Logout").click({force:true});
        cy.get('li').contains('Login').click();
        cy.get("[id='validationCustom01']").type('greg');
        cy.get("[id='validationCustom02']").type('employee');
        cy.get("[id='loginB']").click();
        cy.contains("Employee Panel");
        cy.get("[href='/admin']").should("not.exist");
        cy.contains("Logout").click({force:true});
    })
});