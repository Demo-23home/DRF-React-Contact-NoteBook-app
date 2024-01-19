import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { AuthProvider } from './context/AuthContext'
import RegisterPage from './views/RegisterPage'
import LoginPage from './views/LoginPage'
import HomePage from './views/HomePage'
import NavBar from './views/NavBar'
import ContactsPage from './components/ContactsPage';




const App = () => {
  return (
    <Router>
      <AuthProvider>
        < NavBar/>
        <Switch>
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