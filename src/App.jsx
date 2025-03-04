import React from 'react'
import Entry from './pages/Entry'
import Dashboard from './pages/Dashboard'
import Shop from './pages/Shop'
import ChatPage from './pages/ChatPage'
import { Router, Routes } from 'react-router-dom'

const App = () => {
  return (
    <div>
    <Router>
      <Routes>
        <Route path="/" element={<Entry />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/chat" element={<ChatPage />} />
      </Routes>
    </Router>
    </div>
  )
}

export default App
