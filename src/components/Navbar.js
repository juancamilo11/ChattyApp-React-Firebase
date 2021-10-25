import React from 'react'
import { Link } from 'react-router-dom'
import img_logo from '../img/chat-img.png'
import { auth } from '../services/firebase'

export const PrivateNavbar = () => (
  <nav className="navbar">
      <img className="img-icon" src={img_logo} alt="Icon" style={{width:"50px"}}/>
      <button className="btn btn-danger" id="btn-salir" onClick={() => auth().signOut()}>salir</button>
    <section>
    </section>
  </nav>
)