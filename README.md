This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

## Table of Contents

- [CDN JS](#cdn-js)
- [Demo](#demo)
- [OSS packages used](#oss-packages)
- [Yet to do](#yettodo)
- [Available Scripts](#available-scripts)
  - [npm start](#npm-start)
  - [npm test](#npm-test)
  - [npm run build](#npm-run-build)
  - [npm run eject](#npm-run-eject)

## CDN JS

This React application presents available JavaScritp libraries hosted by [cdnjs](https://cdnjs.com/). In addition to exploring libraries, Analytics page displays google trends for the selected library.

## Demo
![cdnjs Preview](./cdnjsScreen.gif?raw=true "cdnjs Preview")

## OSS packages used
"react" - Builds user interfaces.  
"redux" - Provides state mangement.  
"react-redux" - Provides binding between states and component props.  
"redux-thunk" - A redux middleware. It enables aync operation which is not available in 'react-redux'. Typically, action creators in redux return an action object. With thunk middleware, actions creators can return a function. Dan [Abramov's introduction](https://egghead.io/lessons/javascript-redux-dispatching-actions-asynchronously-with-thunks) is good place to learn more.  
"redux-logger" - Logger middleware  
"express" - To fetch analytics data, google trends data is used. Due to CORS issue in browser, an independent express instances runs to provide backend routes which communicates with google-trends-api module. REST requests from react are proxied to it by configuirng 'proxy' config in package.json.  
"google-trends-api" - Module which provides an API Layer on google trends data.  
"d3" - As of d3.js V4, d3 is a set of modules. You can choose modules which you require - this effectively reduces project size and we reap the benifits of modularity & es6. Differences between both versions are captured [here](https://iros.github.io/d3-v4-whats-new/#1). Modules listed below were used to render a map from GEO-JSON.  
"d3-array" 
"d3-axis"
"d3-brush"
"d3-geo"
"d3-scale"
"d3-selection"
"d3-shape"
"d3-svg-legend"
"d3-transition"
"d3-zoom"

## Yet to do
- Map interactions (tooltips, zoom & pan, marker clustering, events)
- Display related term popularity with visual
- Pie chart to visualize popularity distribution

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](#running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](#deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.
