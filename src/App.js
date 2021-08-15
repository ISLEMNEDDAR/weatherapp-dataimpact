import React from 'react'
import { Redirect, Route, BrowserRouter as Router, Switch } from 'react-router-dom'
import routeConst from './lib/routes/route.const'
import MainPage from './lib/pages/main/MainPage'
import LayoutApp from './lib/layout/template/LayoutApp'

function App() {
  return (
    <Router>
      <LayoutApp>
        <Switch>
          <Route exact path="/" render={() => <Redirect to={routeConst.root} />} />
          <Route path={routeConst.root} component={MainPage} />
          <Redirect to={routeConst.root} />
        </Switch>
      </LayoutApp>
    </Router>
  )
}

export default App
