
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
1. [How to Run the Application](#how-to-run-the-application)
2. [How to Run Route Tests](#how-to-run-route-tests)
3. [How to Run Cypress Tests](#how-to-run-cypress-tests)
4. [How to Add Dummy Data to MySql](#how-to-add-dummy-data-to-mysql)
5. [Database UML Diagram](#database-uml-diagram)

## How to Run the application
1. From the terminal, change to the app directory (`cd app`) and run `npm run serve`.
![Serve App](/gifs/serve_app.gif)
2. Open a new tab, change into the server directory (`cd server`), and run `npm run start`.
![Start Server](/gifs/start_server.gif)
3. Open a new tab, change into the server directory (`cd server`), and run `docker-compose up`.
![Start Database](/gifs/docker_compose.gif)
4. Using your browser of choice, navigate to [localhost:8080](http://localhost:8080) and you will see the app.
![Go to Localhost](/gifs/navigate_to_localhost.gif)
5. Notice that the store is empty. In the next section you will see how to seed the database with items, users, etc.

*[Back to top](#teem-sicks)*

## How to Add Dummy Data to MySql
1. Run MySql inside a *Docker* container: `docker-compose up`
![Docker command](/gifs/compose.gif)
2. Create your database: `node_modules/.bin/sequelize db:create`
![Create command](/gifs/create.gif)
3. Run migrations to add tables to the database: `node_modules/.bin/sequelize db:migrate`
![Migrate command](/gifs/migrate.gif)
4. Seed your tables with the dummy data I created: `node_modules/.bin/sequelize db:seed:all`
![Seed command](/gifs/seed.gif)   

*[Back to top](#teem-sicks)*

## How to Run Route Tests
1. Run the application (see *[How to Run the Application](#how-to-run-the-application)*).
2. **Ensure that you have a test database setup.** If you already have *database_test*, you can skip this section.
   1. Navigate to the application you use to manage your databases. Check if you have a *database_test* database. If you do not, you will need to continue in this section of instructions.
   2. On a *Unix* variant, set your node environment to test by running the command `export NODE_ENV=test`. If you are using *Windows* run `set NODE_ENV=test`.
   3. Follow the instructions in [How to Add Dummy Data to MySql](#how-to-add-dummy-data-to-mySql) to create the test database and its tables/data.
3. **Run `npm run test` from the server directory.**   

*[Back to top](#teem-sicks)*

## How to Run Cypress Tests
  1. Run the application (see *[How to Run the Application](#how-to-run-the-application)*).   
  2. `npx cypress open` from either the app directory or the server directory.
  ![Run Cypress](/gifs/run_cypress.gif)   
  3.  Click on any of the tests to run e2e test.   
  ![Run a Cypress Test](/gifs/run_a_cypress_test.gif)   


*[Back to top](#teem-sicks)*

## Database UML Diagram
![Database UML](/foxycle_database.png)
