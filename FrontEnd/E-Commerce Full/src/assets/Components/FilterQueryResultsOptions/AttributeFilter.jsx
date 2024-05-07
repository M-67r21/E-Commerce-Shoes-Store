import React from 'react'
import Form from 'react-bootstrap/Form';

const AttributeFilter = () => {
  return (
    <>
    {[{color:['red', 'black','blue', 'white' ]}, {size:[36,37, 38, 39, 40, 41, 42, 43, 44, 45]}].map((item, idx)=>
      <div key={idx} className='mb-3'>
        <Form.Label> <b> {Object.keys(item)} </b> </Form.Label>
        {item[Object.keys(item)].map((i, idx)=> (
          <Form.Check
          key={idx}
            type="checkbox"
            label={i}
          />
        ))}
        
      </div>
  )}
      
    </>
  )
}

export default AttributeFilter