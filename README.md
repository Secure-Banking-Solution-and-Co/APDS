# Secure Banking Solutions and Co  
A secure banking web application developed for the APDS team project, part 2.

## Project Overview
This project is a secure banking solution designed to ensure the safety and security of users' financial data. The application is built using Angular for the frontend and MongoDB for data storage, following best practices in cybersecurity and user authentication.

## Frontend
This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 18.2.7.

### Development Server
Run `ng serve` for a development server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

### Code Scaffolding
Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

### Build
Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

### Running Unit Tests
Run `ng test` to execute unit tests via [Karma](https://karma-runner.github.io).

### Running End-to-End Tests
Run `ng e2e` to execute end-to-end tests via a platform of your choice. You will need to add a package that implements end-to-end testing capabilities.

## Security Features
- **User Input Validation**: Utilizes Joi to validate user input before processing.  
  **Installation**: `npm install joi`
  
- **Password Hashing**: All passwords are hashed using bcrypt before being stored in MongoDB Cluster0.  
  **Installation**: `npm install bcrypt`
  
- **User Authentication**: JSON Web Tokens (JWT) are used for authentication.  
  **Installation**: `npm install jsonwebtoken`
  
- **Middleware for Authentication**: Protects routes by verifying the JWT.
  
- **Error Handling**: Implemented to catch and respond to errors gracefully, ensuring better user experience and error traceability.

## Environment Variables
Sensitive information, such as database connection strings and API keys, are stored in environment variables to enhance security.

## Secure MongoDB Configuration
- MongoDB connection uses SSL/TLS for encrypted communication.
- HTTPS is enforced in production to secure data in transit.

## Host-based Web Application Firewall (WAF)
The WAF module is integrated to add an extra layer of protection, defending the application from various web-based attacks.

## Project Structure
The project includes:
- A **video presentation** that provides an overview of the project and its features.
- A folder labeled **APDS** containing the complete source code.
- The **GitHub repository** link for the project.
- A **README** file outlining the steps for setup and usage.

## Team Members
This project was developed by the following team members:
- [Azania Aria - ST10036066]
- [Mushfeeq Hartnick - ST10082857]
- [Adrian Silver - ST10082035
- [Cameron Colley - ST10037966]

## Repository Link
[Paste GitHub Repo Link Here]
