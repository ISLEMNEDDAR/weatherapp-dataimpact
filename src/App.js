import React, { Fragment } from 'react'
import { Redirect, Route, BrowserRouter as Router, Switch } from 'react-router-dom'
import { Provider } from 'react-redux'
import { ToastContainer } from 'react-toastify'
import routeConst from './lib/routes/route.const'
import MainPage from './lib/pages/main/MainPage'
import LayoutApp from './lib/layout/template/LayoutApp'
import store from './lib/redux/store'

function App() {
  return (
    <Provider store={store}>
      <Fragment>
        <Router>
          <ToastContainer />
          <LayoutApp>
            <Switch>
              <Route exact path="/" render={() => <Redirect to={routeConst.root} />} />
              <Route path={routeConst.root} component={MainPage} />
              <Redirect to={routeConst.root} />
            </Switch>
          </LayoutApp>
        </Router>
      </Fragment>
    </Provider>
  )
}

export default App
