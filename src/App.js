import './App.css'

import {Route, Switch} from 'react-router-dom'
import Login from './components/Login'
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute'
import Home from './components/Home'

// Replace your code here
const App = () => (
  <>
    <Switch>
      <Route path="/login" component={Login} />
      <ProtectedRoute to="/" component={Home} />
    </Switch>
  </>
)

export default App
