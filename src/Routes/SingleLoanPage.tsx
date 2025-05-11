import React from 'react'
import { useLocation } from 'react-router-dom'



const SingleLoanPage = () => {
    const {state} = useLocation()
    console.info(state)
    
  return (
    <div>SingleLoanPage</div>
  )
}

export default SingleLoanPage