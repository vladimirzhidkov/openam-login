'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import Router from 'react-router';

import LoginActions from '../actions/login-actions';

class LoginPage extends React.Component {
    constructor() {
        super();
        this.state = {login:null, password:null};
    }

    componentWillMount(){
        LoginActions.authenticate((data)=>console.log(data));
    }

    render() {

        let styleBanner = {textAlign:'center', backgroundColor:'rgba(242, 242, 242, 0.85)', padding:10, border:'2px solid #29abe1'};
        let styleLoginForm = {width:300, borderRadius:10, backgroundColor:'#f2f2f2', padding:30, display:'inline-block'};
        let styleInput = {borderRadius:6, margin:'10px 0px'};
        let styleLoginBtn = {color:'#fff', backgroundColor:'#29C9FF', margin:'10px 0px'};

        return(
            <div className="container-fluid">

                {/* top banner */}
                <div className="row" style={styleBanner}>
                    <p><img style={{maxHeight:90, maxWidth:500}} src="img/banner.gif"/></p>
                    <span>Login to access the Portal</span>
                </div>

                {/* login form */}
                <div className="row row-margin-top-60 text-center">
                    <div className="form text-center" style={styleLoginForm}>
                        <p><img src="img/utah-id-logo.png"/></p>

                        <input style={styleInput}
                               size={20}
                               className="form-control input-lg"
                               placeholder="Login"
                               autoFocus={true}
                               onChange={event=>this.setState({login:event.target.value})}/>

                        <input style={styleInput}
                               size={20}
                               className="form-control input-lg"
                               type="password"
                               placeholder="Password"
                               onChange={event=>this.setState({password:event.target.value})}/>

                        <button style={styleLoginBtn}
                                type="button"
                                className="btn btn-lg"
                                onClick={event=>{
                                    event.preventDefault();
                                    this.onLoginButtonClick();
                                }}>Login</button>

                        <p><a href="">Forgot Password</a></p>
                        <p><a href="">Create Account</a></p>
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