# Lendsqr Front-End Engineering Test

## Project Description
This project was completed as an assessment test for the role of Frontend Engineer at [Lendsqr](https://www.lendsqr.com/)

The assessment's goal is to create the four screens in [this Figma design](https://www.figma.com/file/ZKILoCoIoy1IESdBpq3GNC/Frontend-Testing?node-id=6819%3A58317) and integrate with the following mock api endpoints

* https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users

* https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users/:id

## Technologies
These technologies were used as per strict requirements of the test:
* Typescript
* React
* SCSS

Other technologies I used: 
* React Router for client-side navigation
* Axios and React Query for asynchronous data fetching.
* HeadlessUI for popovers and menu dropdowns. [link](https://headlessui.com/)

File paths to important sections of code
* [Login page](https://github.com/ayomtuase/lendsqr-fe-test/blob/master/src/pages/Login.tsx)
* [Dashboard structure](https://github.com/ayomtuase/lendsqr-fe-test/blob/master/src/pages/Dashboard/index.tsx)
* [Users page](https://github.com/ayomtuase/lendsqr-fe-test/blob/master/src/pages/Dashboard/Users.tsx)
* [Single Users page](https://github.com/ayomtuase/lendsqr-fe-test/blob/master/src/pages/Dashboard/SingleUser.tsx)


## My Results

* [Login page](https://ayomide-mofolorunso-oguntuase-lendsqr-fe-test.vercel.app)
* [Dashboard and Users page](https://ayomide-mofolorunso-oguntuase-lendsqr-fe-test.vercel.app/dashboard)
* [Individual Users page](https://ayomide-mofolorunso-oguntuase-lendsqr-fe-test.vercel.app/dashboard/users/1)


## Other guides from React

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
