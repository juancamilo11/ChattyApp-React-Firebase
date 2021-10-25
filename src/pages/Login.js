import React, { Component } from "react";
import { Link } from "react-router-dom";
import { signin, signInWithGoogle, signInWithGitHub } from "../helpers/auth";

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      email: "",
      password: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.googleSignIn = this.googleSignIn.bind(this);
	  this.githubSignIn = this.githubSignIn.bind(this);
  }

  handleChange(event) {
    this.setState({[event.target.name]: event.target.value});
  }

  async handleSubmit(event) {
    event.preventDefault();
    this.setState({ error: "" });
    try {
      await signin(this.state.email, this.state.password);
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
                        <form onSubmit={this.handleSubmit} autoComplete="off">
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
                                    value={this.state.password} />
                            </div>
                            <div>
                              {this.state.error ? <p className="form-text">{this.state.error}</p> : null}
                              <button type="submit" className="btn btn-light btn-ingresar"><span className="text-button">Ingresar</span><i class="fas fa-sign-in-alt"></i></button>
                            </div>
                            <hr></hr>
                            ¿No tienes una cuenta? <Link to="/signup">Create una cuenta</Link>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
  }
}