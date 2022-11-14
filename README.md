# Discount Calculator

- This project is a part of the recruitment assignment.
- This project is currently doesn't support a responsive design.
- This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## How Does It Work

1. First, create and select a client.
2. Then, create products.
3. Next, select criteria for discounts.

- **Amount of sales (hardcoded)**: if sales are less then 10, then there's no discount. If sales are greater than 10, but less than 20, then there's a 5% discount. If sales are greater than 20, there's 10% discount.
- **Time of the year**: simple hardcoded solution is the discount equals to the number of the month minus 1. Ex: February will give 1% discount.
- **Special discount**: you can type in any discount value.

4. Finally, sumbit criteria and you will be able to see the discounted products.

## Available Scripts

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
