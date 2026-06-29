import { useState } from 'react'
import Login from './components/Login'
import Sidebar from './components/Sidebar'
import Dashboard from './components/Dashboard'
import UsersTable from './components/UsersTable'
import Settings from './components/Settings'
import './App.css'

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [currentView, setCurrentView] = useState('dashboard')

  if (!isLoggedIn) {
    return <Login onLogin={() => setIsLoggedIn(true)} />
  }

  return (
    <div className="app-layout">
      <Sidebar
        currentView={currentView}
        setCurrentView={setCurrentView}
        onLogout={() => setIsLoggedIn(false)}
      />
      <main className="main-content">
        {currentView === 'dashboard' && <Dashboard />}
        {currentView === 'users' && <UsersTable />}
        {currentView === 'settings' && <Settings />}
      </main>
    </div>
  )
}

export default App
