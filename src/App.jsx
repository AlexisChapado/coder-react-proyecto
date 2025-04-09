import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { NavBar } from './componentes/navbar/NavBar'
import { CartWidget } from './componentes/cart/CartWidget'
import { ItemListContainer } from './componentes/itemListContainer/ItemListContainer';





function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <div>
           <NavBar></NavBar>
           
        </div>

        <div className="App">
        <ItemListContainer greeting="🎟️ Bienvenido a Evenza - Tus tickets sin estafas" />
          <div className='CartWidget'>
          
            <CartWidget></CartWidget>
            <ItemListContainer></ItemListContainer>
          </div>
        </div>

        
        

      
    </>
  )
}

export default App
