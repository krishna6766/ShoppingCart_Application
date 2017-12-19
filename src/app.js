'use strict'
//React
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

//Redux store & Loggers
import { applyMiddleware, createStore } from 'redux';
import logger from 'redux-logger';

//Import Reducers
import reducers from './reducers/index';
//Import Actions
import {addToCart} from './actions/cartActions.js';
import {postBooks, deleteBooks, updateBooks} from './actions/booksActions';

//step:1 create a createStore
const middleware = applyMiddleware(logger);
const store = createStore(reducers, middleware);

import BooksList from './components/pages/booksList';

//step2 create and dispatch actions
// store.dispatch(postBooks([
//   {
//     id : 1,
//     title: 'React-Redux',
//     description: 'How to create a web app using react and redux',
//     price: 200
//   },
//   {
//     id : 2,
//     title: 'Nodejs Tutorial',
//     description: 'To learn about Nodejs',
//     price: 150
//   }
// ]))

//second dispatch actions
// store.dispatch(deleteBooks({
//     id : 1
//   })
// )
//
// store.dispatch(updateBooks({
//   id: 2,
//   title: 'MongoDB Tutorial',
//   description: 'To learn about MongoDB',
//   price: 170
// }))
//
// //---cart actions---
//
// //Add to cart
// store.dispatch(addToCart([ {id: 1 } ]))

render(
  <Provider store= {store}>
    <BooksList />
  </Provider>,
  document.getElementById('app'));
