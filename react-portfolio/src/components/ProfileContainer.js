import React from "react";
import Footer from "./Footer";
import Header from './Header'
import Navbar from './Navbar'
import 'bootstrap/dist/css/bootstrap.min.css'

function ProfileContainer() {
  return (
    <div>
      <Header />
      <Navbar />
      <Footer />
    </div>
  )
}

export default ProfileContainer;