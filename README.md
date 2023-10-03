#  Critter App

This project is a Twitter based application that allows the user to post, comment, like, follow and create an user and edit it.


![image](https://github.com/jlvillegas04/critter-project/assets/132522021/5ae2914c-886c-4822-ac41-3166c01fb34c)


### Features

- Authentication system
- Notification system
- Image Upload using Base64 strings
- Prisma ORM with MongoDB
- Responsive Layout
- 1 To Many Relations (User - Post)
- Many To Many Relations (Post - Comment)
- Following functionality
- Comments / Replies
- Likes functionality
- Vercel Deployment

### Tech Stack

- React
- NextJS
- TailwindCSS
- NextAuth
- Zustand
- Prisma
- MongoDB
- Bcrypt
- NextAuth
- Axios

### Prerequisites

**Node version 14.x**

### Cloning the repository

```shell
git clone https://github.com/jlvillegas04/critter-project.git
```

### Install packages

```shell
npm i
```

### Setup .env file


```js
DATABASE_URL=
NEXTAUTH_JWT_SECRET=
NEXTAUTH_SECRET=
```

### Start the app

```shell
npm run dev
```

## Deployment
This application is deployed in Vercel, the link is: https://critter-project.vercel.app/

Running commands with npm `npm run [command]`

| command         | description                              |
| :-------------- | :--------------------------------------- |
| `dev`           | Starts a development instance of the app |
