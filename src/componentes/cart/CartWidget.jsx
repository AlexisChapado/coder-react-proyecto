import React from 'react'
import { Card, Button } from 'react-bootstrap'
import './CartWidget.css'
import '../../App.jsx'

export const CartWidget = () => {

  return (

    <Card className='CartWidget'> 
      <Card.Body>
        <Card.Title>Bienvenidos a Evenza</Card.Title>
        <Card.Text>
        En esta seccion podras comprar tus tickets para los eventos que mas te gustan
        </Card.Text>
        <div className='boton'>
          <Button variant="primary"
                type='danger'
                onClick={() =>{
                    console.log('REDIRECCIONANDO AL PAGINA DE COMPRA');
                    
                }}>Comprar Ticket</Button>
        </div>
        
      </Card.Body>
    </Card>

  )
}

export default CartWidget;


