import React from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import { AppRouter } from './router/AppRouter'
import { store } from './store/store'

export const PatenteApp = () => {
  return (
    <BrowserRouter>
     <Provider store={store}>
      <AppRouter/>
     </Provider>
    </BrowserRouter>
  )
}
