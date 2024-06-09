import React from 'react'
import Form from 'react-bootstrap/Form';

const PriceFilter = () => {
  return (
    <>
      <Form.Label>
        <span className='fw-bold'>Price no greater than</span> KSH 3500
      </Form.Label>
      <Form.Range  min={10} max={1000} step={10}/>
    </>
    
  )
}

export default PriceFilter