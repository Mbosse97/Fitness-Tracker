# Fitness-Tracker

## Description 
This fitness tracker has been made with Node.js and Express.js, with a MySQL database and Sequelize ORM to take user input reagrding their fitness and display it as a log of their journey. Handlebars have been utilised in order to give the template of the webpage and display the data for the users to access easily. Users can log their exercise, sleep and nutritional information each day and the webpage will store each users data and display it to them while they are logged in. After inputting the data, users are then able to visualise their progress with their data displayed in charts implemented with the chart.js npm package, otherwise, users have the option to delete thier previous entries at any time. 

---
## User Story
```
AS an Athlete
I WANT to be able to track my workouts, meals and sleep schedule
SO that i can organise and document my fitness journey
```

---
## Acceptance Criteria
```
GIVEN a web-app which accepts user input
WHEN I enter the webapp
THEN i am presented with an user authentication page (login)
WHEN i have logged in as a registered user
THEN i am presented with buttons and three charts which show past fitness data for Meals, Sleep and Exercise
WHEN i click on a button which corresponds with the fitness data
THEN i am presented with the option to enter a new workout, meal or sleep, depending on my choice
WHEN i click on new workout
THEN i am able to enter the type and the start and finish time of my workout
WHEN i have clicked save
THEN the information is saved to the database and presented on the screen as a list view on the same page
WHEN i click on new sleep
THEN i am able to enter the start time, finish time and quality of my sleep
WHEN i have clicked save
THEN the information is saved to the database and presented on the screen as a list view on the same page
WHEN i click on new meal
THEN i am able to enter the type, time of meal and whether it is a junk meal
WHEN i have clicked save
THEN the information is saved to the database and presented on the screen as a list view on the same page
WHEN i click delete on any saved item
THEN the item dissapears from the list displayed on the webpage
WHEN i lick on the fitness tracker heading
THEN i am returned to the homepage 
WHEN i clikc on logout
THEN my session ends and i am returned to the authentication page
```

---
## Contents
- [Description](#description)
- [User Story](#user-story)
- [Acceptance Criteria](#acceptance-criteria)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)
- [Screenshots](#screenshots)
- [Demo](#demo)
- [Future Developments](#future-developments)

---
## Installation
THis project can be accessed with the 
1. Clone github repository onto local environment
2. Install MySQL and Node.js if not already installed
3. Input "npm i" into the command terminal to download all npm packages
4. Add local data to .env file 
5. Run "mysql -u root -p" in the command terminal to initialise your database
6. Type "npm run seed" in command line to input seeds into database
7. Type "npm start" in command line to initialise server

---
## Usage
Once server is run and webpage is accessed, users will be prompted to enter the login screen. Once the login screen is opened, for existing users, they will need to login with their existing credentials, however for new users they are prompted to enter new login details to access the webapp. 

Once logged in, users can view charts of their past fitness history, regarding Meals, Sleep and Exercise. otherwise, they can enter the corresponding fitness pages to make new entries or delete past entries from the database. Their past entries will also be displayed in each corresponding fitness page as a list. 

---
## Contributing
- Luke Hoole - https://github.com/Lhoole 
- Adam Pilato - https://github.com/Adzy89 
- Andy Nguyen - https://github.com/andynewen 
- Michael Bosse - https://github.com/Mbosse97 

---
## License
No License

---
## Screenshots
Login Page Screenshot
![Screemshot of login page](./public/images/login-page-demo.PNG)

Meals Page Screenshot
![Screemshot of Meals page](./public/images/meals-page.PNG)

Sleep Page Screenshot
![Screemshot of Sleep page](./public/images/sleep-page.PNG)

Exercise Page Screenshot
![Screemshot of Exercise page](./public/images/exercise-page.PNG)

Webapp Structure 
![Webapp Structure Screenshot](./basic%20flowchart%20for%20fitness%20app.jpg)

---
## Deployed Application

https://fitnessproject.herokuapp.com/

---
## Future Developments
- Delete User functionality when account is no longer needed
- User input authentication, to check if email, name and inputs are all in the correct formats
- Linking External fitness applications and devices such as fitbit and garmin devices for live tracking functionality
- Create library for users smart devices to allow input from many external sources
- Additional calorie counting functionality to assist with meal tracking page
- Add goals section so that users can track their progress towards their goals
- Addition of 'sharing' functionality to allow users to post their progress on socials
- Creation of chat feature to allows users to interact through the platform
- General UI improvements

