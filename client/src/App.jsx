import { useState } from 'react'
import './App.css'
import Cards from './components/Cards'

function App() {

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#f8fafc', fontFamily: 'Arial, sans-serif' }}>
    <header style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      backgroundColor: '#1e293b',
      color: 'white',
      padding: '20px 0',
      boxShadow: '0 2px 4px 0 rgba(0,0,0,.1)',
      zIndex: 1000}}>
      <div style={{ display: 'flex', alignItems: 'center', padding: '0 20px' }}>
        <h1 style={{ fontSize: '24px', fontWeight: 'bold', margin: 0 }}>RPTECH RMA Dashboard</h1>
      </div>
    </header>
    <Cards />
    </div>
  )
}

export default App
