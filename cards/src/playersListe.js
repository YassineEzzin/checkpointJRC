import React from 'react'
import {  Card } from 'react-bootstrap'

function PlayersListe( {e} ) {
  return (
    
    
    <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src="holder.js/100px180" />
    <Card.Body>
      <Card.Title>Card Title</Card.Title>
      <Card.Text>
        <div>
            <h1>{e.name} </h1>
            <h1>{e.team} </h1>
        </div>
      </Card.Text>
      
    </Card.Body>
  </Card>
  )
}

export default PlayersListe
