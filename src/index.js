// import dependencies
import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
// import { createStore, applyMiddleware, compose } from 'redux'
// import { Provider } from 'react-redux'
// import thunk from 'redux-thunk'

// import components and CSS
import './index.css'
// import reducer from './reducers/rootReducer'
import App from './App'

// Redux dev tools
// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

// create store and use thunk
// const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)))

// render App with React Router and Redux
ReactDOM.render(
  // <Provider store={store}>
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  // </Provider>
  document.querySelector('#App'),
)
