import React from 'react'
import { Card, Button } from 'react-bootstrap'
import './CartWidget.css'

export const CartWidget = () => {
  return (
    <div className='CartWidget'>
        <Card className='contenedor' style={{ width: '18rem' }}
        >
            <Card.Img  variant="top" src="holder.js/100px180" />
            <Card.Body >
                <Card.Title>"Nombre del Ticket"</Card.Title>
                <Card.Text>
                    "Informacion del evento"
                </Card.Text>
                <Button variant="primary"
                type='danger'
                onClick={(evento) =>{
                    console.log(evento);
                    
                }}>Comprar Ticket</Button>
            </Card.Body>
    </Card>
    </div>
  )
}

export default CartWidget;


