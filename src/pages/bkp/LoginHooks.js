import React, { Component, useState } from 'react';
/*import { Link, Redirect, Route } from "react-router-dom";*/
import './Login.css';
import logo from '../assets/logo.jpg';
//class Login extends Component {
export default function Login(){
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
  //  render(){
  
  
  handleSubmit = e =>{
    e.preventDefault();  
    console.log(username);
    console.log(password);
   this.props.history.push('/checkin');      
  }
  
  /*function handleSubmit(e){
    e.preventDefault();  
    console.log(username);
    console.log(password);   
  }*/

  return (
        <div id="principal">
            <div className="form-login">                                            
            <form onSubmit={this.handleSubmit}>
                
                <img src={logo} className="logo" alt="Eventos Logo" />                   
                
                <input
                type="text" placeholder="Nome de usuário" value={username}
                onChange={e => setUsername(e.target.value)} />            
                
                <input type="password" placeholder="Senha" value={password}
                onChange={e => setPassword(e.target.value)}/>
                
                <button type="submit">Login</button>                                        
            </form>
            </div>
        </div>
    );
  }
//}

//export default Login;