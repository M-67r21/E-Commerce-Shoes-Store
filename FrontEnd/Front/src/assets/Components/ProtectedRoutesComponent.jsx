 
import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import UserChat from './User/UserChat';


const ProtectedRoutesComponent = ({admin}) => {
    
    if (admin) {
      let adminAuth =  true;

      return adminAuth ? <Outlet /> : <Navigate to ="/login" />
    }else{
      let userAuth =  true
      return userAuth ? 
      <>
       <UserChat /> <Outlet />
      </> : <Navigate to ="/login" />
    }
  
}

export default ProtectedRoutesComponent