import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import img_chat from '../img/chat-img.png';
export default class HomePage extends Component {
  render() {
    return (
      <div className="container">
        <div >
          <h1 className="text-center mt-4 mb-4">¡Bienvenido!</h1>
          <img src={img_chat} className="img-home" alt="Chat-img"/>
          <h3 className="subtitulo text-center">¿Cómo comenzar?</h3>
        </div>
        <div className="text-center container-boton">
          <Link className="btn btn-primary form-control mb-3 mt-3" to = "/signup">Crea tu Cuenta</Link>
          <Link className="btn btn-primary form-control" to = "/login">Ingresar</Link>
        </div>
      </div>
    )
  }
}