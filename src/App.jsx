import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { NavBar } from './componentes/navbar/NavBar'
import { CartWidget } from './componentes/cart/CartWidget'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      
        <div className="App">
          <div>
            <NavBar></NavBar>
          </div>

          <div className='CartWidget'>

            <CartWidget></CartWidget>
            <CartWidget></CartWidget>
            <CartWidget></CartWidget>
          </div>
        </div>

      
    </>
  )
}

export default App
