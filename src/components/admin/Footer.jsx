import React from 'react'
import { Card } from 'react-bootstrap'

function Footer() {
  return (
    <div>
        <div>
        <Card className="text-center bg-secondary">
        <Card.Header className='text-light'>Featured</Card.Header>
        <Card.Body>
          <Card.Title className='text-light'>Special title treatment</Card.Title>
          <Card.Text className='text-light'>
            With supporting text below as a natural lead-in to additional content.
          </Card.Text>
        </Card.Body>
        <Card.Footer className="text-light">2 days ago</Card.Footer>
      </Card>
    </div>
    </div>
  )
}

export default Footer