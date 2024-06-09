import React from 'react'
import "../../../../src/Chat.css"

const UserChat = () => {
  return (
    <>
      <input type="checkbox" name="" id="check" />
      <label className="chat-btn" htmlFor='check'>
        <i className="bi bi-chat-dots comment"></i>
        <i className="bi bi-x-circle close"></i>
        <span className='position-absolute top-0 start-10 translate-middle p-2 bg-danger border border-light rounded-circle'></span>
      </label>
      <div className="chat-wrapper">
        <div className="chat-header">
          <h5>Let's Chat</h5>
        </div>
        <div className="chat-form">
          <div className="chat-msg">
            {
               Array .from({length:20}).map((_, id) =>(
               <div key={id}>
                  <p>
                  <b>You wrote:</b>Hello world, this is a toast message
                  </p>
                  <p className='bg-primary p-3 ms-4 text-light rounded-pill'>
                  <b>Support wrote</b>Hello this is a toast message
                  </p>
               </div> 
               ))
            }
           
            
          </div>
          <textarea name="" id="clientChatMsg" cols="30" rows="1" className='form-control' placeholder='Your Text Message'></textarea>
          <button className='btn btn-success btn-block'>Submit</button>
        </div>
      </div>
    </>
    
  )
}

export default UserChat