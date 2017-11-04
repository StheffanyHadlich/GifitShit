import * as React from 'react';
import {RouteComponentProps} from 'react-router';

export class Login extends React.Component < RouteComponentProps < {} >, {} > {
    public function () {
        console.log("What");
    }

    public render() {
        return <div>
            <h1>Sign In</h1>
            <form name="loginform">
                <div className="input-group">
                    <span className="input-group-addon">UserName</span>
                    <input
                        id="username"
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
                    <a>
                        <button
                            type="button"
                            className="btn btn-default"
                            onClick
                            ={() => this.saveData()}>Enter</button>
                    </a>
                    <a href="signup">
                        <button type="button" className="btn btn-default">Signup</button>
                    </a>
                </div>
            </form>
        </div>;
    }
    saveData() {
        var i = ((document.querySelector("#username") as HTMLInputElement));
    }
}