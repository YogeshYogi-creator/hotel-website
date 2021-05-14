import React from 'react'
import ReactDOM from 'react-dom'
import configureStore from './store/configureStore'
import {Provider} from 'react-redux'
import App from './App'

  const store = configureStore()
    // console.log(store.getState())
    store.subscribe(()=>{
    // console.log('updated store', store.getState())
  })

ReactDOM.render(
  <Provider store = {store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
