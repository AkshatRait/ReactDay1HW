import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import HelloWorld from './components/HelloWorld'
import ColorChanger from './components/ColorChanger'
import ContactForm from './components/ContactForm'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <HelloWorld/>
    <ColorChanger/>
    <ContactForm/>
    </>
  )
}

export default App
