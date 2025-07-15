# Express TS Project Template

that's it

## Project Structure

```
project-name
├── prisma/
│   ├── schema.prisma
│   └── seed.ts
├── src/
│   ├── app/
│   │   ├── controllers/
│   │   ├── middleware/
│   │   └── schema/ -> validation input from client
│   ├── config/ -> config db, etc
│   ├── errors/ -> error class
│   ├── helper/ -> custom function
│   └── routes/ -> routing
├── server.ts
├── .env.example
├── package.json
├── package-lock.json
├── README.md
├── .gitignore
└── tsconfig.json
```

## Instalation

#### Clone project

```bash
git clone git@github.com:sergihen7/swear.git
```

#### Install library

```bash
npm ci
```

or

```bash
npm install
```

## Setup prisma

#### Migrate database

```bash
npx prisma migrate dev --name init
```

#### Seeding database

```bash
npx prisma db seed
```

#### Generate types

```bash
npx prisma generate
```
