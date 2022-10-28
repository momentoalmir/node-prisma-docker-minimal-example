# Prerequisites

You need Node.js v14.17.0 or higher.
Docker installed.
Config the .env {DATABASE_URL, MYSQL_DATABASE, MYSQL_ROOT_PASSWORD}.

# 1. clone this prisma project


```bash
$ git clone https://github.com/momentoalmir/node-prisma-docker-minimal-example.git
```

Install Node dependencies.

```bash
$ npm i
```

# 2. Run a migration to create your database tables with Prisma Migrate

At this point, you have a Prisma schema but no database yet. Run the following command in your terminal to create the SQLite database and the User and Post tables represented by your models:

```bash
$ npx prisma migrate dev --name init
```

# 3. Now run the script and start programming

```bash
$ npm run start:dev # to run in developer mode
```
