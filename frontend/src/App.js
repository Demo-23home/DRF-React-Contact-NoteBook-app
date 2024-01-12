import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
// import PrivateRoute from "./utils/PrivateRoute"
import { AuthProvider } from './context/AuthContext'

import RegisterPage from './views/RegisterPage'
import LoginPage from './views/LoginPage'
import HomePage from './views/HomePage'
// import DashBoard from './views/DashBoard'
import NavBar from './views/NavBar'
import ContactsPage from './components/ContactsPage';
// import ContactDetail from './components/ContactUpdate'




const App = () => {
  return (
    <Router>
      <AuthProvider>
        < NavBar/>
        <Switch>
          {/* <Route component={DashBoard} path="/dashboard" exact /> */}
          <Route component={LoginPage} path="/login" />
          <Route component={RegisterPage} path="/register" exact />
          <Route component={HomePage} path="/" exact />
          <Route path="/contacts" component={ContactsPage} />

        </Switch>
      </AuthProvider>
    </Router>
  )
}

export default App