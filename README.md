# Tech Blog
Demo of a blog with a CMS to create, edit, and delete posts!

<img src="https://user-images.githubusercontent.com/11519585/111103437-dbed2200-8524-11eb-8433-865da0c2b351.jpg">

## Table of Contents
* [Installation](#installation)
* [Deployment](#deployment)
* [Usage](#usage)
* [Contributing](#contributing)
* [License](#license)
* [Questions](#questions)


## Installation
Clone over repo from GitHub: https://github.com/TerrenceJChan/tech-blog
  
Open the folder in the terminal, and make sure to install the app's necessary dependencies! To do this, use the command `npm i`  

Create a file in the root directory named `.env`. Fill out your MySQL login credentials in it like the following:

```
DB_USER=root
DB_PW=ASecurePassword
DB_NAME=techposts_db
```

A schema and seeds file are provided. To set up the schema, use the MySQL CLI to give the command `source db/schema.sql`. `npm run seed` will populate the database with a sample selection of products and data.

## Deployment
A live demo of the page can be seen on Heroku: https://damp-harbor-01262.herokuapp.com/

Please note that the default settings have a session timeout set to 30 seconds of inactivity.

## Usage
In the terminal, enter `node server.js` in the main directory to start the server.  

Once the server is up, the user can make an account by pressing the "Login" button in the nav, and creating an account there.

Once the user is signed up, they can make new posts on the "Dashboard" page. Posts can also be edited on the Dashboard once they have been published.

In the "Main" tab, all posts made by different users are displayed there. By clicking on any post's comment link, they may add a comment to the post themselves.

## Contributing
This project's pull requests are currently not being monitored!
## License
©Terrence Chan 2021. This project is published under the ISC license.
## Questions
For questions, contact me at developer@terrencejchan.com.  
To view other projects by me, visit my [GitHub account](https://github.com/TerrenceJChan).
