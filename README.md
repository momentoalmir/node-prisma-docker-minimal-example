# Prerequisites

You need Node.js v14.17.0 or higher.
Docker installed.
Config the .env {DATABASE_URL, MYSQL_DATABASE, MYSQL_ROOT_PASSWORD}.

# 1. Create TypeScript project and set up Prisma


```bash
$ mkdir hello-prisma
$ cd hello-prisma
```

Next, initialize a TypeScript project using npm:

```bash
$ npm init -y
$ npm install typescript ts-node @types/node --save-dev
```

This creates a package.json with an initial setup for your TypeScript app.

Now, create a tsconfig.json file in the root of your project:

```bash
$ touch tsconfig.json
```

Now edit this file to:

```json
{
  "compilerOptions": {
    "sourceMap": true,
    "outDir": "dist",
    "strict": true,
    "lib": ["esnext"],
    "esModuleInterop": true
  }
}
```

Then, install the Prisma CLI as a development dependency in the project:

```bash
$ npm install prisma --save-dev
```

Finally, set up Prisma with the init command of the Prisma CLI:

```bash
$ npx prisma init --datasource-provider mysql
```

# 2. Run a migration to create your database tables with Prisma Migrate

At this point, you have a Prisma schema but no database yet. Run the following command in your terminal to create the SQLite database and the User and Post tables represented by your models:

```bash
$ npx prisma migrate dev --name init
```

# 3. Now run the script and start programming

```bash
$ npm i # to install all the dependencies
$ npm run start:dev # to run in developer mode
```
