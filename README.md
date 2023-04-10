
## Local environment setup

#### 1. Setup PostgreSQL
We will be developing using PostgreSQL for our database. As such, you will need to install PostgreSQL. A good guide to get you started for most operating systems can be found [here.](https://www.timescale.com/blog/how-to-install-psql-on-mac-ubuntu-debian-windows/)

#### 2. Setup NPM
If you do not already have NPM installed, you will need to install it. Unix based systems should take advantage of a package called [nvm](https://github.com/nvm-sh/nvm) to manage versions of Node.js. Windows systems should follow [this guide](https://learn.microsoft.com/en-us/windows/dev-environment/javascript/nodejs-on-windows) to install Node.js and NPM on their systems.

Once you have installed these packages, you can verify that they are installed on your system with:

```
node -v
npm -v
```

#### 3. Clone Repository
Once you have verified that you have installed Node.js, PostgreSQL, you should be okay to clone the repository. 

**`git clone git@github.com:mattirizarry/CS351-Project.git`**

#### 4. Install Dependencies
Navigate to the directory that was just installed. Then run, `npm install`. This will install all necessary packages on your system.

#### 5. Setup Environment Variables
To connect to your database, you will need to provide a `DATABASE_URL` that is served from a local `.env` file. 

In the root of the repository, run `touch .env`, and append the below content.

```
DATABASE_URL="postgresql://[username]:[password]@[host]:[port]/[dbname]?schema=public"
```

Replace the placeholders with your local database information, and it should look something like this.

```
DATABASE_URL="postgresql://johndoe:x5dws169!@localhost:5432/mydb?schema=public"
```

#### 6. Setup Database
Once you have created your `.env` file, you should now be able to connect to your database and migrate it

To bring your local database up to the most recent schema, perform any migrations.

```
npx prisma migrate dev
```

#### 7. Seed Database
Once you have created your tables, you will have to change the provided `seed.sh.template` file with your database credentials. Once you have done so, rename the file to `seed.sh`. Then you can seed the database.

#### 8. Launch Prisma CLI
You can verify that the database got populated properly by running 
```
npx prisma studio
```

This will run a local server that you can access in browser to interact with your database.

#### 9. Complete

You can now develop in this project. To start the Next.js server, type:
```
npm run dev
```
To interact in the Prisma studio, the command is
```
npx prisma studio
```