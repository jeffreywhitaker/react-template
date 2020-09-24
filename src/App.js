// import dependencies
import React, { useEffect } from 'react'
// import { connect } from 'react-redux'
import { Route, Redirect } from 'react-router-dom'

import Header from './components/Header'

export function App(props) {
  return (
    <>
      <Route component={Header} />
      <div>Hello world!</div>
    </>
  )
}

// export default connect(null, {})(App)
export default App
