'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import Router from 'react-router';

import LoginActions from '../actions/login-actions';

class LoginPage extends React.Component {
    //constructor() {
    //    super();
    //    this.state = {data: null};
    //}

    componentWillMount(){
        LoginActions.authenticate((data)=>this.setState(data));
    }

    render() {

        if(this.state === null){
            return <div></div>;
        }

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

                        {
                            this.state.callbacks.map((callback, index)=>
                                <input key={index}
                                    style={styleInput}
                                    size={20}
                                    className="form-control input-lg"
                                    placeholder={callback.output[0].value.replace(/:/g, '')}
                                    autoFocus={index ? false : true}
                                    type={index ? 'password' : 'text'}
                                    onChange={event=>callback.input[0].value = event.target.value}/>
                            )
                        }

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
        console.log(JSON.stringify(this.state));
    }
}
export default LoginPage;