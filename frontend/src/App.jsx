import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import LoginPage from './pages/login/LoginPage'
import NewUserPrompt from './pages/login/NewUserPrompt'
import CreateAccount from './pages/login/Register'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <CreateAccount/>

    </>
  )
}

export default App
