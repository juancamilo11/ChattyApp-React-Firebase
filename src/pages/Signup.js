import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { signup, signInWithGoogle, signInWithGitHub } from "../helpers/auth";

export default class SignUp extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      email: '',
      password: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.googleSignIn = this.googleSignIn.bind(this);
    this.githubSignIn = this.githubSignIn.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  async handleSubmit(event) {
    event.preventDefault();
    this.setState({ error: '' });
    try {
      await signup(this.state.email, this.state.password);
    } catch (error) {
      this.setState({ error: error.message });
    }
  }

  async googleSignIn() {
    try {
      await signInWithGoogle();
    } catch (error) {
      this.setState({ error: error.message });
    }
  }

  async githubSignIn() {
    try {
      await signInWithGitHub();
    } catch (error) {
      this.setState({ error: error.message });
    }
  }

  render() {
    return (
      <div>
            <div className="sidenav">
                <div className="login-main-text">
                    <h3 className="text-center m-4">¡Ingresa a ChattyApp para chatear con todos tus amigos!</h3><br/>
                </div>
            </div>
            <div className="form-control">
                <div className="form-container">
                    <div className="login-form">
                        <form onSubmit={this.handleSubmit}>
                            <div className="form-group">
                                <label className="text-center form-label" htmlFor="login">Correo electrónico</label>
                                <input 
                                    type="text" 
                                    id="login"
                                    name="email"
                                    className="form-input input-form" 
                                    placeholder="Correo electrónico"
                                    onChange={this.handleChange}
                                    value={this.state.email} />
                            </div>
                            <div class="form-group">
                                <label className="text-center form-label" htmlFor="password">Contraseña</label>
                                <input 
                                    type="password" 
                                    id="password"
                                    name="password"
                                    className="form-input input-form"
                                    placeholder="Contraseña" 
                                    onChange={this.handleChange}
                                    value={this.state.email} />
                            </div>
                            <div>
                              {this.state.error ? <p>{this.state.error}</p> : null}
                              <button type="submit" className="btn btn-light btn-ingresar"><span className="text-button">Ingresar</span><i class="fas fa-sign-in-alt"></i></button>
                            </div>
                            <p className="text-center mt-3 form-label">O también puedes:</p> <hr />
                            <button onClick={this.googleSignIn} type="button" className="btn btn-light btn-ingresar btn-google">
                              <span className="text-button">Ingresar con Google</span><i class="fab fa-google"></i>
                            </button>
                            <button type="button" onClick={this.githubSignIn} className="btn btn-light btn-ingresar btn-github">
                            <span className="text-button">Ingresar con GitHub</span><i class="fab fa-github"></i>
                            </button>
                            <hr></hr>
                            <p className="form-text">¿Ya estás registrado y tienes una cuenta? <Link to="/login">Ingresar</Link></p>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
  }

  // render() {
  //   return (
  //     <div>
  //       <form onSubmit={this.handleSubmit}>
  //         <h1>
  //           Sign Up to
  //         <Link to="/">Chatty</Link>
  //         </h1>
  //         <p>Fill in the form below to create an account.</p>
  //         <div>
  //           <input placeholder="Email" name="email" type="email" onChange={this.handleChange} value={this.state.email}></input>
  //         </div>
  //         <div>
  //           <input placeholder="Password" name="password" onChange={this.handleChange} value={this.state.password} type="password"></input>
  //         </div>
  //         <div>
  //           {this.state.error ? <p>{this.state.error}</p> : null}
  //           <button type="submit">Sign up</button>
  //         </div>
  //         <p>Or</p>
  //         <button onClick={this.googleSignIn} type="button">
  //         Sign up with Google
  //         </button>
  //         <button type="button" onClick={this.githubSignIn}>
  //           Sign up with GitHub
  //         </button>
  //         <hr></hr>
  //         <p>Already have an account? <Link to="/login">Login</Link></p>
  //       </form>
  //     </div>
  //   )
  // }
}