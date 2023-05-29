
# MERN Stack w

### MongoDB - Express - React - Redux - React Native - NodeJS

MERN stack is intended to provide a starting point for building full-stack JavaScript applications, including dynamic web apps. The stack is made of MongoDB, Express, React, Redux, and NodeJS.

[![mern-workflow](https://raw.githubusercontent.com/t-ho/mern-stack/assets/assets/mern-workflow.gif)](https://github.com/t-ho/mern-stack)

## Demo

- Client [demo](https://bookingwebsite-funnyclient.netlify.app)
- Admin [demo](https://bookingwebsite-funny.netlify.app)
- Back-end [demo](https://booking-website-g3rm.onrender.com)
- Dummy accounts:
   - Admin account: `qwe` password: `qwe`

## Project Breakdown

### 1. API Server

- Directory `api`
- Todo:
  - [x] Authentication system - [passport](https://www.npmjs.com/package/passport)
    - [x] Sign up - [bcrypt](https://www.npmjs.com/package/bcrypt)
    - [x] Local login - [jsonwebtoken](https://www.npmjs.com/package/jsonwebtoken) - [passport-jwt](https://www.npmjs.com/package/passport-jwt)
  - [x] User management - CRUD operations

### 2. React Client

- Directory `client`
- Created by using [create-react-app](https://www.npmjs.com/package/create-react-app)
- Todo:
  - [x] Redux store - [react-redux](https://www.npmjs.com/package/react-redux)
  - [x] Redux form - [redux-form](https://redux-form.com/8.3.0). NOTE: Migrate to [formik](https://jaredpalmer.com/formik) soon
  - [x] Router - [react-router-dom](https://www.npmjs.com/package/react-router-dom) - [connected-react-router](https://www.npmjs.com/package/connected-react-router)
  - [x] Material design - [Material-UI](https://material-ui.com)
  - [ ] Authentication pages
    - [x] Sign up page
    - [x] Sign in page 
    - [ ] Reset password page
    - [ ] Profile page
  - [ ] User management pages
    - [ ] User list page
    - [ ] User edit page

### 3. Admin

- Directory `admin`
- Todo:
  - [x] Verify Admin
  - [x] Add/Delete Rooms and Hotels



## Getting started

### 1. Clone or download the `BookingWebsite` repository

# Usage (run fullstack app on your machine)

## Prerequisites
- [MongoDB](https://www.mongodb.com/docs/manual/installation/)
- [Node](https://nodejs.org/en/download/) 
- [npm](https://nodejs.org/en/download/package-manager/)

notice, you need client and server runs concurrently in different terminal session, in order to make them talk to each other

## Client-side usage(PORT: 3000)
```terminal
$ cd client          // go to client folder
$ yarn # or npm i    // npm install packages
$ npm start       // run it locally

// deployment for client app
$ npm run build // this will compile the react code using webpack and generate a folder called docs in the root level
$ npm run start // this will run the files in docs, this behavior is exactly the same how gh-pages will run your static site
```

## Server-side usage(PORT: 5000)

```terminal
// in the root level
$ cd api
$ yarn # or npm i    // npm install packages
$ npm start       // run it locally
```

### Admin usage(PORT: 3001)

```terminal
$ cd client   // go to server folder
$ npm i       // npm install packages
$ npm start // run it locally
```


