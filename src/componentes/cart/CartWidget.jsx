import React from 'react'
import { Card, Button } from 'react-bootstrap'
import './CartWidget.css'
import '../../App.jsx'
import { FaShoppingCart } from 'react-icons/fa'


export const CartWidget = () => {

  const tickets = 5;

  return (


    <Card className='CartWidget'> 
      <Card.Body>


        <Card.Title>
          <FaShoppingCart /> Carrito de Compras 
        </Card.Title>
        <Card.Text>
        Tienes <strong>{tickets}</strong>  Tickets en tu carrito. <br /> Para terminar tu compra, haz click en el boton de abajo y seras redireccionado a la pagina de pago
        </Card.Text>


        <div className='boton'>
          <Button variant="primary"
                type='danger'
                onClick={() =>{
                    console.log('REDIRECCIONANDO AL PAGINA DE PAGO');


                    // CUANDO VEAMOS DOM, LA IDEA ES QUE SE REDIRECCIONE A UNA PAGINA DE COMPRA
                    // Y AQUI HACER UNA PAGINA DE LOGIN O REGISTRO, SIN LA NAVBAR EN ESTA PARTE SINO EN 
                    // LA PAGINA DONDE SE REDIRECCIONA

                    
                }}>Ir a pagar</Button>
        </div>
        
      </Card.Body>
    </Card>

  )
}

export default CartWidget;


