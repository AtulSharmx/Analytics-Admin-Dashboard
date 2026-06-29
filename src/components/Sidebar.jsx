import './Sidebar.css'

function Sidebar({ currentView, setCurrentView, onLogout }) {
  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <h2>AdminPanel</h2>
      </div>
      <nav className="sidebar-nav">
        <button
          className={currentView === 'dashboard' ? 'nav-btn active' : 'nav-btn'}
          onClick={() => setCurrentView('dashboard')}
        >
          Dashboard
        </button>
        <button
          className={currentView === 'users' ? 'nav-btn active' : 'nav-btn'}
          onClick={() => setCurrentView('users')}
        >
          Users
        </button>
        <button
          className={currentView === 'settings' ? 'nav-btn active' : 'nav-btn'}
          onClick={() => setCurrentView('settings')}
        >
          Settings
        </button>
      </nav>
      <div className="sidebar-footer">
        <button className="logout-btn" onClick={onLogout}>
          Logout
        </button>
      </div>
    </div>
  )
}

export default Sidebar
