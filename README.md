
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

## How to Add Dummy Data to MySql
1. Run MySql inside a *Docker* container: `docker-compose up`
2. Create your database: `node_modules/.bin/sequelize db:create`
3. Run migrations to add tables to the database: `node_modules/.bin/sequelize db:migrate`
4. Seed your tables with the dummy data I created: `node_modules/.bin/sequelize db:seed:all`

## Database UML Diagram
![Database UML](/foxycle_database.png)
