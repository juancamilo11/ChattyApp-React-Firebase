import React, { Component } from "react";
import { auth } from "../services/firebase";
import { db } from "../services/firebase"
import { PrivateNavbar } from "../components/Navbar";
import { Footer } from "../components/Footer";

export default class Chat extends Component {
    constructor(props) {
      super(props);
      this.state = {
        user: auth().currentUser,
        chats: [],
        content: '',
        readError: null,
        writeError: null,
        loadingChats: false
      };
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
      this.myRef = React.createRef();
    }

    async componentDidMount() {
      this.setState({ readError: null });
      try {
        db.ref("chats").on("value", snapshot => {
          let chats = [];
          snapshot.forEach((snap) => {
            chats.push(snap.val());
          });
          this.setState({ chats });
        });
      } catch (error) {
        this.setState({ readError: error.message });
      }
    }

    handleChange(event) {
        this.setState({
            content: event.target.value
        });
    }

    async handleSubmit(event) {
        event.preventDefault();
        this.setState({ writeError: null });
        try {
          await db.ref("chats").push({
            content: this.state.content,
            timestamp: Date.now(),
            uid: this.state.user.uid
          });
          this.setState({ content: '' });
        } catch (error) {
          this.setState({ writeError: error.message });
        }
    }

    render() {
        return (
            <div>
              <PrivateNavbar />
              <div className="chat-area container" ref={this.myRef}>
                  {/* loading */}
                  {this.state.loadingChats ? 
                  <div role="status">
                  <span className="sr-only">Loading...</span>
                  </div> : ""}
                  {/* chat area */}
                  {this.state.chats.map(chat => {
                  return <p  key={chat.timestamp} className={"chat-bubble " + (this.state.user.uid === chat.uid ? "current-user" : "")}>
                      <p className="message-content">{chat.content}</p> 
                      <br />
                      <p>{new Date(chat.timestamp).toUTCString()}</p>
                      <span>{this.state.user.email}</span>
                      <hr className="message-separator"/>
                  </p>
                  })}
                  <form className="mx-3" onSubmit={this.handleSubmit}>
                  <textarea className="form-control" id="input-message" name="content" onChange={this.handleChange} value={this.state.content}></textarea>
                  {this.state.error ? <p>{this.state.error}</p> : null}
                  <button className="btn btn-dark px-5 mt-4" type="submit">Enviar</button>
                  </form>
                  <div className="py-5">
                  En sesi??n: <strong>{this.state.user.email}</strong>
                  </div>
              </div>
              <Footer />    
            </div>
        );
    }
}

