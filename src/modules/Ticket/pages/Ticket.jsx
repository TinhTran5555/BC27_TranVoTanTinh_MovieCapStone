import React from 'react'
import { useParams } from 'react-router-dom'
import SeatDetails from '../components/SeatDetails'


const Ticket = () => {
 const {ticketId} = useParams()
 
  return (
    <div>
        <SeatDetails ticketId= {ticketId}/>
        
    </div>
  )
}

export default Ticket