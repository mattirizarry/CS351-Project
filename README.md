# CS351 Project Application - Spring 2023

## Author

Matthew Irizarry – matthew.irizarry745@topper.wku.edu
﻿
# CS351 Project Application - Spring 2023

## Authors

Matthew Irizarry – matthew.irizarry745@topper.wku.edu
Michael Lynch – michael.lynch320@topper.wku.edu
Connor McElroy – connor.mcelroy054@topper.wku.edu
Liam Seymour – william.seymour656@topper.wku.edu


## System Requirements

The requirements for this application to be run are:
- <1GB RAM
- Internet Access
- Web Browser (Chrome, Firefox, etc.)


## Running the Application

The current iteration of the application can be viewed at: https://cs-351-project-1m8fkmzr1-mattirizarry.vercel.app/

To use this iteration, you can login with the following:
User Num: 75
Password: password


## Local environment setup

Since the application is web-based, it is designed to be accessed from a web browser. However, if you would like to run the application on a local machine with a local database, please use the following steps.

#### 1. Setup PostgreSQL

The application requires PostgreSQL to be installed alongside the server. As such, you will need to install PostgreSQL.
For Debian-based Linux, you can run the following:

```
sudo apt-get install postgresql-client
```

For Windows, you can download the latest ProstgreSQL installer here: https://www.enterprisedb.com/downloads/postgres-postgresql-downloads

#### 2. Setup NPM

If you do not already have NPM installed, you will need to install it.
Unix based systems should take advantage of a package called nvm to manage versions of Node.js: https://github.com/nvm-sh/nvm
Windows systems should follow this guide: https://learn.microsoft.com/en-us/windows/dev-environment/javascript/nodejs-on-windows

Once you have installed these packages, you can verify that they are installed on your system with:

```
node -v
npm -v
```

#### 3. Install Dependencies

Navigate to the `source_code` directory, or copy/move it to where it is desired and navigate to it. Then run, `npm install`. This will install all necessary packages on your system.

#### 4. Setup Environment Variables

To connect to the database, you will need to provide a `DATABASE_URL` that is served from a local `.env` file.

In the root of the repository, run `touch .env`, and append the below content.

```
DATABASE_URL="postgresql://[username]:[password]@[host]:[port]/[dbname]?schema=public"
```

Replace the placeholders with your local database information, and it should look something like this.

```
DATABASE_URL="postgresql://johndoe:x5dws169!@localhost:5432/mydb?schema=public"
```

#### 5. Setup Database

Once you have created your `.env` file, you should now be able to connect to the database and migrate it. To bring your local database up to the most recent schema, perform any migrations:

```
npx prisma migrate dev
```

#### 6. Launch Prisma CLI for Verification

You can verify that the database got populated properly by running:

```
npx prisma studio
```

This will run a local server (http://localhost:5555/) that you can access in browser to interact with your database.

#### 8. Complete

The project should be ready to run. To start the Next.js server, type:

```
npm run dev
```

You can now connect to the application at: http://localhost:3000/
