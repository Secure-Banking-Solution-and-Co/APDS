# Welcome to your Secure Banking Solutions and Co
A secure banking web application for APDS team project part 2
# Frontend

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 18.2.7.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.

## Joi 
a library to validate user input before processing it
how? = npm install joi

## Password Hashing
always hashing passwords before adding them to mongo cluster0
how? = npm install bcrypt

## User Authentication
based on school curriculum and basic cybersecurity , all users are check if they are authentic as they claim
how?= JSON Web Tokens (JWT) for authentication. npm install jsonwebtoken

## Middleware for Authentication
protects the routes by verifying the JWT
how?= const authenticateJWT...

## Error Handling
to avoid mistakes from users
Implement error handling to catch and respond to errors gracefully!

## Environment Variables ie .env
keeping secret connection strings and other ultra sensitive data

## Secure MongoDB configuration.
Ensure your MongoDB connection string uses SSL/TLS.(based on part 1)
Use HTTPS in production to secure data in transit. (based on part 1)

## Host-based WAF
Integrate the WAF module into the application code.(based on part 1)
