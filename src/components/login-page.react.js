'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import Router from 'react-router';

class LoginPage extends React.Component {
    constructor() {
        super();
        this.state = {login:null, password:null};
    }

    render() {

        let styleForm = {borderRadius:10, backgroundColor:'#f2f2f2', padding:10};
        let styleInput = {margin:5, borderRadius:6 };
        let styleLoginBtn = {margin:10, color:'#fff', backgroundColor:'#29C9FF'};
        let styleBanner = {textAlign:'center', backgroundColor:'rgba(242, 242, 242, 0.85)', padding:10, border:'2px solid #29abe1'};

        return(
            <div className="container-fluid">
                <div style={styleBanner} className="row">
                    <p><img style={{maxHeight:90, maxWidth:500}} src="img/banner.gif"/></p>
                    <span>Login to access the Portal</span>
                </div>

                <div className="row row-margin-top-60">
                    <div style={styleForm} className="form-inline col-sm-offset-5 col-sm-2 text-center">
                        <p><img src="img/utah-id-logo.png"/></p>
                        <input style={styleInput}
                               size={19}
                               className="form-control"
                               placeholder="Login"
                               autoFocus={true}
                               onChange={event=>this.setState({login:event.target.value})}/><br/>
                        <input style={styleInput}
                               size={19}
                               className="form-control"
                               type="password"
                               placeholder="Password"
                               onChange={event=>this.setState({password:event.target.value})}/><br/>
                        <button style={styleLoginBtn}
                                type="button"
                                className="btn"
                                onClick={event=>{
                                    event.preventDefault();
                                    this.onLoginButtonClick();
                            }}
                            >Login</button><br/>
                        <a href="">Forgot Password</a><br/>
                        <a href="">Create Account</a>
                    </div>
                </div>
            </div>
        );
    }

    onLoginButtonClick(){
        console.log(this.state);
    }
}
export default LoginPage;