import { useState } from 'react'
import './Settings.css'

function Settings() {
  const [name, setName] = useState('Admin User')
  const [email, setEmail] = useState('admin@example.com')
  const [saved, setSaved] = useState(false)

  function handleSave(e) {
    e.preventDefault()
    setSaved(true)
    setTimeout(() => setSaved(false), 2000)
  }

  return (
    <div className="settings-section">
      <h2 className="section-title">Settings</h2>
      <div className="settings-card">
        <form onSubmit={handleSave}>
          <div className="form-group">
            <label>Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <button type="submit" className="save-btn">Save</button>
          {saved && <span className="saved-msg">Saved!</span>}
        </form>
      </div>
    </div>
  )
}

export default Settings
