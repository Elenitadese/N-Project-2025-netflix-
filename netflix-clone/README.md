Netflix Clone Project

Welcome to the Netflix Clone, a front-end web application that mimics the design and core features of the popular streaming platform, built with React and Vite.


Component-Based Architecture: Built with React, the project uses a component-based structure for better reusability and maintainability.

Efficient Development: Utilizing Vite, the development environment provides a fast and efficient experience with features like hot module replacement.

Technologies Used
Frontend:
React
Vite

Getting Started
To get a copy of the project up and running on your local machine, follow these simple steps.

Prerequisites
You need to have Node.js and npm installed on your machine.

Node.js

Installation
Clone the repository:

git clone [https://github.com/Elenitadese/N-Project-2025-netflix-.git](https://github.com/Elenitadese/N-Project-2025-netflix-.git)

Navigate into the project directory:

cd N-Project-2025-netflix-
Install dependencies:
npm install

Running the App
Run the following command to start the development server and view the application in your browser.

npm run dev

Deployment
This project is configured to be deployed to GitHub Pages.

-Install the gh-pages package:
 -npm install gh-pages --save-dev

Add the homepage and deployment scripts to your package.json file:

"homepage": "https://[your-github-username].github.io/N-Project-2025-netflix-",
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d dist"
}

Run the deploy command:

npm run deploy

Live Project URL
You can view the live project here:
https://elenitadese.github.io/N-Project-2025-netflix-/

Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

License
This project is licensed under the MIT License.