# Backend - MECH

Backend delpoyed at [Heroku](https://mech-1234.herokuapp.com/)

## Getting started

To get the server running locally:

- Clone this repo.
- `npm install` to install all required dependencies.
- `npm start` to start the local server.
- `npm start:dev` to start nodemon


## Backend Framework

#### Databases

- [PostgresSQL](https://www.postgresql.org/): Free and open-source relational database management system used on our production and staging environments 
- [SQLite3](https://www.npmjs.com/package/sqlite3): Free and open-source relational database management system used in our devlopment environment 

#### Restful API dependencies

- [Express](https://www.npmjs.com/package/express): Web framework for Node.js, Node lets you write JavaScript on both the front-end and back-end, which increases readability and reduced context-switching
- [Knex](https://www.npmjs.com/package/knex): SQL query builder for JavaScript, used to structure sql queries to our databases
- [Helmet](https://www.npmjs.com/package/helmet): Secures our Express app by setting various HTTP headers
- [CORS](https://www.npmjs.com/package/cors): Uses additional HTTP headers to tell a browser to let a web application running at one origin (domain) have permission to access selected resources from a server at a different origin
- [dotenv](https://www.npmjs.com/package/dotenv): Loads environment variables from a .env file into process.env

#### Third-party API dependencies

- [Firebase](https://www.npmjs.com/package/firebase): A helper to configure Firebase Authentication


#### Miscellaneous dependencies

- [Axios](https://www.npmjs.com/package/axios): A promise based HTTP client used to send requests
- [Moment](https://www.npmjs.com/package/moment): Formats dates in JavaScript
- [Jwt-decode](https://www.npmjs.com/package/jwt-decode): Decodes JSON web tokens so that the data can be used 



## Environment Variables

In order for the app to function correctly, the user must set up their own environment variables.

create a .env file that includes the following:

    *  REACT_APP_URL - the url you want to pass through for callbacks

## Contributing

When contributing to this repository, please first discuss the change you wish to make via issue, email, or any other method with the owners of this repository before making a change.

Please note we have a [code of conduct](./code_of_conduct.md). Please follow it in all your interactions with the project.

### Issue/Bug Request

 **If you are having an issue with the existing project code, please submit a bug report under the following guidelines:**
 - Check first to see if your issue has already been reported.
 - Check to see if the issue has recently been fixed by attempting to reproduce the issue using the latest master branch in the repository.
 - Create a live example of the problem.
 - Submit a detailed bug report including your environment & browser, steps to reproduce the issue, actual and expected outcomes,  where you believe the issue is originating from, and any potential solutions you have considered.

### Feature Requests

We would love to hear from you about new features which would improve this app and further the aims of our project. Please provide as much detail and information as possible to show us why you think your new feature should be implemented.

### Pull Requests

If you have developed a patch, bug fix, or new feature that would improve this app, please submit a pull request. It is best to communicate your ideas with the developers first before investing a great deal of time into a pull request to ensure that it will mesh smoothly with the project.

Remember that this project is licensed under the MIT license, and by submitting a pull request, you agree that your work will be, too.

#### Pull Request Guidelines

- Ensure any install or build dependencies are removed before the end of the layer when doing a build.
- Update the README.md with details of changes to the interface, including new plist variables, exposed ports, useful file locations and container parameters.
- Ensure that your code conforms to our existing code conventions and test coverage.
- Include the relevant issue number, if applicable.
- You may merge the Pull Request in once you have the sign-off of two other developers, or if you do not have permission to do that, you may request the second reviewer to merge it for you.

### Attribution

These contribution guidelines have been adapted from [this good-Contributing.md-template](https://gist.github.com/PurpleBooth/b24679402957c63ec426).

## Documentation

See [Frontend Documentation](https://github.com/labs14-brav/Frontend/blob/master/README.md) for details on the fronend of our project. See [Android Documentation](https://github.com/labs14-brav/Android) for details on the Android application.
