import React, { useEffect } from 'react'
import logo from './logo.svg'
import './App.css'
import { getInfo, getNote, putNote } from './services/notes'

function App() {
  useEffect(() => {
    getInfo()
    // putNote({ title: 'new note', text: 'hello' })
    getNote({ id: '7946f1f6-efeb-4128-bc40-58f4a7aff2af' }).then((value) => {
      console.log('NOTE', value)
    })
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  )
}

export default App
