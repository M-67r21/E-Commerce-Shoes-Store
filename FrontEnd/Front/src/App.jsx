import {BrowserRouter, Routes, Route} from "react-router-dom"
import './App.css'

// Publically available pages
import Homepage from './assets/Pages/Homepage'
import Cart from "./assets/Pages/Cart"
import ProductDetails from "./assets/Pages/ProductDetails"
import ProductsList from "./assets/Pages/ProductsList"
import Login from "./assets/Pages/Login"
import Register from "./assets/Pages/Register"

// User pages
import UserProfile from "./assets/Pages/Users/UserProfile"
import UserOrders from "./assets/Pages/Users/UserOrders"
import UserCartDetails from "./assets/Pages/Users/UserCartDetails"
import UserOrderDetails from "./assets/Pages/Users/UserOrderDetails"
import ProtectedRoutesComponent from "./assets/Components/ProtectedRoutesComponent"

// Admin pages
import AdminAnalytics from "./assets/Pages/Admin/AdminAnalytics"
import AdminChats from "./assets/Pages/Admin/AdminChats"
import AdminCreateProduct from "./assets/Pages/Admin/AdminCreateProduct"
import AdminEditProduct from "./assets/Pages/Admin/AdminEditProduct"
import AdminEditUser from "./assets/Pages/Admin/AdminEditUser"
import AdminOrderDetails from "./assets/Pages/Admin/AdminOrderDetails"
import AdminOrders from "./assets/Pages/Admin/AdminOrders"
import AdminProducts from "./assets/Pages/Admin/AdminProducts"
import AdminUsers from "./assets/Pages/Admin/AdminUsers"

// Components
import Header from "./assets/Components/Header"
import Footer from "./assets/Components/Footer"


// User components
import RoutesWithUserChat from "./assets/Components/User/RoutesWithUserChat"
import ScrollTop from "./utils/ScrollTop"

function App() {


  return (
    <>
    <BrowserRouter>
    <ScrollTop />
    <Header />
      <Routes>
        <Route element = {<RoutesWithUserChat />}>
          {/* publically available */}
          <Route path="/" element={<Homepage />}/>
          <Route path="/cart" element={<Cart />}/>
          <Route path="/productdetails" element={<ProductDetails />}/>
          <Route path="/productdetails/:id" element={<ProductDetails />}/>
          <Route path="/productlist" element={<ProductsList />}/>
          <Route path="/login" element={<Login />}/>
          <Route path="/register" element={<Register />}/>
        </Route>
          {/* Protected users pages */}
          <Route element = {<ProtectedRoutesComponent admim={false}/>}>
            <Route path="/userprofile" element={<UserProfile />}/>
            <Route path="/userorders" element={<UserOrders />}/>
            <Route path="/usercartdetails" element={<UserCartDetails />}/>
            <Route path="/userorderdetails" element={<UserOrderDetails />}/>
          </Route> 
       

        {/* Protected admin pages */}
        <Route element = {<ProtectedRoutesComponent admim={true} />}>
          <Route path="/adminanalytics" element={<AdminAnalytics />}/>
          <Route path="/adminchats" element={<AdminChats />}/>
          <Route path="/admincreateproducts" element={<AdminCreateProduct />}/>
          <Route path="/admineditproduct" element={<AdminEditProduct />}/>
          <Route path="/adminedituser" element={<AdminEditUser />}/>
          <Route path="/adminorderdetails" element={<AdminOrderDetails />}/>
          <Route path="/adminorders" element={<AdminOrders />}/>
          <Route path="/adminproducts" element={<AdminProducts />}/>
          <Route path="/adminusers" element={<AdminUsers />}/>
        </Route>
      </Routes>
      <Footer />
    </BrowserRouter>
      
    </>
  )
}

export default App
