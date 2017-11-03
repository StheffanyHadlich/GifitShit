import * as React from 'react';
import {RouteComponentProps} from 'react-router';

export class Login extends React.Component < RouteComponentProps < {} >, {} > {
    public function(){
        console.log("What");
    }
    
    public render() {
        return <div>
                <h1>Sign In</h1>
                <div className="input-group">
                    <span className="input-group-addon" id="username">UserName</span>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Username"
                        aria-describedby="username"/>
                </div>
                <br/>
                <div className="input-group">
                    <span className="input-group-addon" id="password">Password</span>
                    <input
                        type="password"
                        className="form-control"
                        placeholder="Password"
                        aria-describedby="password"/>
                </div>
                <br/>
                <div>
                   <a href="lists"> <button type="button" className="btn btn-default">Enter</button></a>
                   <a href="signup"> <button type="button" className="btn btn-default">Signup</button></a>
                </div>
            </div>;
    }
}