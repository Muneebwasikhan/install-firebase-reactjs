# install-firebase-reactjs
install firebase / firestore in react.js 

[![NPM version][npm-image]][npm-url]
[![NPM downloads][npm-downloads-image]][npm-url]
[![Quality][quality-image]][quality-url]
[![Code Coverage][coverage-image]][coverage-url]
[![Code Style][code-style-image]][code-style-url]
[![License][license-image]][license-url]
[![Build Status][travis-image]][travis-url]
[![Dependency Status][daviddm-image]][daviddm-url]

[![Gitter][gitter-image]][gitter-url]


> installing and setting up firebase with react.

## [Demo]

## Step-1

First you should have react project for making new creact app use ,
```bash
creact-react-app new-project
```
## Step-2

Now go to your project directory & install firebase in you react app ,
```bash
cd new-project
npm install firebase --save
```

## Step-3

Open `Firebase` and  get your project's config like ,
```bash
// Initialize Firebase
  var config = {
    apiKey: "XXXXXXXXXXXXX",
    authDomain: "XXXXXXXXXXXXX",
    databaseURL: "XXXXXXXXXXXXX",
    projectId: "XXXXXXXXXXXXX",
    storageBucket: "XXXXXXXXXXXXX",
    messagingSenderId: "XXXXXXXXXXXXX"
  };
  firebase.initializeApp(config);
  ```
  
## Step-4 -USE

Open index.js and use these js
```javascript
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as firebase from 'firebase';
import registerServiceWorker from './registerServiceWorker';

// Initialize Firebase
// paste your own configuration
var config = {
    apiKey: "XXXXXXXXXXXXX",
    authDomain: "XXXXXXXXXXXXX",
    databaseURL: "XXXXXXXXXXXXX",
    projectId: "XXXXXXXXXXXXX",
    storageBucket: "XXXXXXXXXXXXX",
    messagingSenderId: "XXXXXXXXXXXXX"
  };
  firebase.initializeApp(config);
  
  const db = firebase.firestore();
  const settings = {/* your settings... */ timestampsInSnapshots: true};
  db.settings(settings);
  
  //export db from here for using it in all page like im using firestore so for acceccing firestore in all pages we use db , 
  export default (db);

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();

```



## Step-4 -USE

importing firebase in you other components

```jsx
import db from './index.js';
```


## Firestore

If you plan to use Firestore, you should checkout [`redux-firestore`][redux-firestore]. It integrates nicely with `react-redux-firebase` and it allows you to run Real Time Database and Firestore along side each other.

`react-redux-firebase` provides the `firestoreConnect` HOC (similar to `firebaseConnect`) for easy setting/unsetting of listeners.

Currently `react-redux-firebase` still handles auth when using [`redux-firestore`][redux-firestore] - The future plan is to also have auth standalone auth library that will allow the developer to choose which pieces they do/do not want.

## [Docs](http://react-redux-firebase.com)
See full documentation at [react-redux-firebase.com](http://react-redux-firebase.com)

* [Getting Started](http://react-redux-firebase.com/docs/getting_started)
* [Auth](http://react-redux-firebase.com/docs/auth)
* [Queries](http://react-redux-firebase.com/docs/queries)
* [Firestore](http://react-redux-firebase.com/docs/firestore)
* [Populate](http://react-redux-firebase.com/docs/populate)
* [API Reference](http://react-redux-firebase.com/docs/api)

## [Examples](examples)

### Real World Applications
* [fireadmin.io](http://fireadmin.io) - Firebase Instance Management Tool (source [available here](https://github.com/prescottprue/fireadmin))

If you would like a project added to this section please reach out [over gitter][gitter-url]

### [Examples Folder](examples)

Examples folder is broken into two categories [snippets](examples/snippets) and [complete](examples/complete). `/complete` contains full applications that can be run as is, where as `/snippets` contains small amounts of code to highlight specific functionality (dev tools and deps not included).

#### [State Based Query Snippet](examples/snippets/stateBasedQuery)

Snippet showing querying based on data in redux state. One of the more common examples is querying based on the current users auth UID.

#### [Decorators Snippet](examples/snippets/decorators)

Snippet showing how to use decorators to simplify connect functions (redux's `connect` and react-redux-firebase's `firebaseConnect`)

#### [Simple App Example](examples/complete/simple)

A simple example that was created using [create-react-app](https://github.com/facebookincubator/create-react-app)'s. Shows a list of todo items and allows you to add to them.

#### [Material App Example](examples/complete/material)

An example that user Material UI built on top of the output of [create-react-app](https://github.com/facebookincubator/create-react-app)'s eject command.  Shows a list of todo items and allows you to add to them. This is what is deployed to [redux-firebasev3.firebaseapp.com](https://redux-firebasev3.firebaseapp.com/).

## Discussion

Join us on the [redux-firebase gitter](https://gitter.im/redux-firebase/Lobby).


## Backers

Thank you to all our backers! 🙏

