import { useState } from 'react'
import './Login.css'

function Login({ onLogin }) {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  function handleLogin(e) {
    e.preventDefault()
    // hardcoded credentials check
    if (username === 'admin' && password === 'admin123') {
      onLogin()
    } else {
      setError('Invalid username or password')
    }
  }

  return (
    <div className="login-page">
      <div className="login-box">
        <h1>Admin Login</h1>
        <form onSubmit={handleLogin}>
          <div className="form-group">
            <label>Username</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Enter username"
            />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter password"
            />
          </div>
          {error && <p className="error-msg">{error}</p>}
          <button type="submit" className="login-btn">Login</button>
        </form>
        <p className="hint-text">Try: admin / admin123</p>
      </div>
    </div>
  )
}

export default Login
