import {Route, Switch} from 'react-router-dom'
import Customers from './components/Customers'
import Products from './components/Products'
import Settings from './components/Settings'

import './App.css'
import Demos from './components/Demos'
import NotFound from './components/NotFound'
import DemoScript from './components/DemoScript'
import SalesTeam from './components/SalesTeam'

const App = () => (
  <div className="App">
    <Switch>
      <Route exact path="/customers" component={Customers} />
      <Route exact path="/demo-script" component={DemoScript} />
      <Route exact path="/demos" component={Demos} />
      <Route exact path="/sales-team" component={SalesTeam} />
      <Route exact path="/products" component={Products} />
      <Route exact path="/settings" component={Settings} />
      <NotFound />
    </Switch>
  </div>
)

export default App
