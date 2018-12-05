
# Teem Sicks

### About Us
Motto: Pro Bono   
Pizza Topping: Bacon and Eggs  

### Team Roles
Team Lead: Lauren  
Database: Andrew  
Architect: Sean  
UI: James  
QA: Mario  

### README Table of Contents
1. [How to Run Route Tests](#how-to-run-route-tests)
2. [How to Run Cypress Tests](#how-to-run-cypress-tests)
3. [How to Add Dummy Data to MySql](#how-to-add-dummy-data-to-mySql)
4. [Database UML Diagram](#database-uml-diagram)

## How to Run Route Tests
1. **Start up the application, server, and database.**
That should include running the commands:   
  1. `npm run serve` from the app directory,
  2. `npm run start` from the server directory,
  3. And `docker-compose up` from the server directory.
2. **Ensure that you have a test database setup.** If you already have *database_test*, you can skip this section.
  1. Navigate to the application you use to manage your databases. Check if you have a *database_test* database. If you do not, you will need to continue in this section of instructions.
  2. On a *Unix* variant, set your node environment to test by running the command `export NODE_ENV=test`. If you are using *Windows* run `set NODE_ENV=test`.
  3. Follow the instructions in [How to Add Dummy Data to MySql](#how-to-add-dummy-data-to-mySql) to create the test database and its tables/data.
3. **Run `npm run test` from the server directory.**   

*[Back to top](#teem-sicks)*

## How to Run Cypress Tests
  1. `npm run serve` from the app directory,
  2. `npm run start` from the server directory,
  3. `npx cypress open` from either the app directory and the server directory,
  4.  Click on any of the tests to run e2e test    

*[Back to top](#teem-sicks)*

## How to Add Dummy Data to MySql
1. Run MySql inside a *Docker* container: `docker-compose up`
![Docker command](/gifs/compose.gif)
2. Create your database: `node_modules/.bin/sequelize db:create`
![Create command](/gifs/create.gif)
3. Run migrations to add tables to the database: `node_modules/.bin/sequelize db:migrate`
![Migrate command](/gifs/migrate.gif)
4. Seed your tables with the dummy data I created: `node_modules/.bin/sequelize db:seed:all`
![Seed command](/gifs/seeds.gif)   

*[Back to top](#teem-sicks)*

## Database UML Diagram
![Database UML](/foxycle_database.png)
