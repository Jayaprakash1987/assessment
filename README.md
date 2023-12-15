# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## This project contains two different modules like Standard version and Advanced version

1. Standard(ModuloThree)
2. Advanced

### ModuloThree App

The ModuloThree component is a React component which calculates the modulo three value of an input string. It uses a finite state machine to determine the output value based on the input string.

## Usage

To run this project try the below command in the terminal,

### `npm install`

### To use the ModuloThree component(Standard version), follow these steps:

1. Import the ModuloThree component into your React application:

import ModuloThree from './ModuloThree';

2. Render the ModuloThree component in your React component:

function App() {
return (

<div>
<ModuloThree />
</div>
);
}

3. The ModuloThree component will render an input field and a "Calculate" button. Enter a string into the input field and click the "Calculate" button to see the modulo three output value.

## Component Props

The ModuloThree component does not accept any props.

## Component State

The ModuloThree component manages the following state:

- inputString : The current input string entered by the user.
- outputValue : The calculated modulo three output value.

## Component Methods

The ModuloThree component defines the following methods:

- handleInputChange : Updates the inputString state when the user enters a value in the input field.
- calculateModuloThree : Calculates the modulo three value based on the inputString and updates the outputValue state.

## Example

Here's an example of how to use the ModuloThree component:

import React from 'react';
import ModuloThree from './ModuloThree';

function App() {
return (

<div>
<h1>Modulo Three Calculator</h1>
<ModuloThree />
</div>
);
}

### To use the Advanced component, follow these steps:

1. Import the Advanced component into your React application:

import Advanced from './Advanced';

2. Render the Advanced component in your React component:

function App() {
return (

<div>
<Advanced />
</div>
);
}

3. The Advanced component will render an input field and a "Calculate" button. Enter a string into the input field and click the "Calculate" button to see the modulo three output value.

## Component Props

The Advanced component does not accept any props.

## Component State

The Advanced component manages the following state:

- inputString : The current input string entered by the user.
- outputValue : The calculated modulo three output value.

## Example

Here's an example of how to use the ModuloThree component:

import React from 'react';
import Advanced from './Advanced';

function App() {
return (

<div>
<h1>Mod Three Calculator</h1>
<Advanced />
</div>
);
}

export default App;
