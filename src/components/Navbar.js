import React from 'react'
import { Link } from 'react-router-dom'
import question from '../img/question.png'

export const PublicNavbar = () => (
  <nav className="navbar">
      <img className="img-icon" src={question} alt="Icon" style={{width:"35px"}}/>
      <section className="navlinks">
        <Link to="/">Home</Link>
        <Link to="/questions">Questions</Link>
        <Link to="/login">Login</Link>
      </section>
  </nav>
)

export const PrivateNavbar = () => (
  <nav className="navbar">
      <img className="img-icon" src={question} alt="Icon" style={{width:"35px"}}/>
    <section>
      <Link to="/">Home</Link>
      <Link to="/questions">Questions</Link>
      <Link to="/new">New</Link>
      <Link to="/list">List</Link>
    </section>
  </nav>
)