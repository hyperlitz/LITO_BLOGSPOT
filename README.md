# Tech Blog

![GitHub License](https://img.shields.io/badge/license-MIT-blue.svg)

## Description

Tech Blog is a content management system (CMS) that allows developers to publish articles, blog posts, and their thoughts and opinions. This application is built following the Model-View-Controller (MVC) paradigm and uses technologies such as Handlebars.js, Sequelize, and Express.js for authentication.

## Screenshots

![Screenshot 1](screenshots/screenshot1.png)
![Screenshot 2](screenshots/screenshot2.png)
![Screenshot 3](screenshots/screenshot3.png)

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation

To install and run the Tech Blog application locally, follow these steps:

1. Clone the repository from [GitHub](https://github.com/your-username/tech-blog).

2. Navigate to the project's root directory and run the following command to install the required dependencies:

- npm install


3. Create a MySQL database and update the connection configuration in `.env` file with your database credentials.

4. Run the following command to initialize the database:

-npm run db:init

5. Start the application by running:

-npm start


6. Access the application in your web browser at `http://localhost:3001`.

## Usage

- Visit the homepage to view existing blog posts or create a new account to start publishing your own articles.
- Logged-in users can create, update, and delete their blog posts, as well as comment on other posts.
- The application uses sessions to keep users logged in.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Contributing

Contributions are welcome! Please follow the [Contributor Covenant](CONTRIBUTING.md) guidelines.

## Tests

No tests are provided at the moment. Feel free to add them if needed.

## Questions

If you have any questions or need further assistance with this project, please don't hesitate to reach out to the project owner:

- **GitHub Profile**: [Your GitHub Profile](https://github.com/your-username)
- **Email**: [Your Email Address](mailto:your-email@example.com)
