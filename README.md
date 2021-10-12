# Travel Blogger

This is a simple React project which has been bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

The application itself allows the user to post details of attractions they have visited and also allow the user to add locations they'd like to visit (in a bucket list).

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

### `npm build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## Dependencies

This project relies on only a few extra packages:

- [react-router-dom](https://www.npmjs.com/package/react-router-dom): This enabled routing within the application.
- [axios](https://www.npmjs.com/package/axios): This has been included to add examples of how to make HTTP POST/GET requests in comparison to the Fetch API.

## Environment Set Up

When running the application you must create a local `.env` file before running `npm start`.

The following content must be inside your `.env` file:

```
REACT_APP_TRAVEL_API_URL=<some firebase realtime db url>
REACT_APP_TRAVEL_DB_NAME=travelblogs.json
```

If you do not provide `REACT_APP_TRAVEL_DB_NAME` it will default to `travelblogs.json`.

If `REACT_APP_TRAVEL_API_URL` is not provided, the application will exit.
