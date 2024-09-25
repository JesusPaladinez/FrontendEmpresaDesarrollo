import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Usuario from './pages/Usuarios'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Usuario />
      </div>
    </>
  )
}

export default App
