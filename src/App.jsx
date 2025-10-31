import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import { Form } from './components/Form/Form.jsx'
import { Produto } from './components/Produto/Produto.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <h1>
          Boa noite a todos!
        </h1>
        <span>Agora é a hora de vocês</span>
      </div>
      <br />
      <Produto nome='Camisa do Flamengo' />
      <footer>
        <span>SERRATEC - 2025</span>
      </footer>
      \    </>
  )
}

export default App
