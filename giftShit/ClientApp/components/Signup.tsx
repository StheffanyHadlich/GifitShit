import * as React from 'react';
import {RouteComponentProps} from 'react-router';

export class Signup extends React.Component < RouteComponentProps < {} >, {} > {

    public static username: string;
    public static useraddress: string;
    public static userbirthday: Date;

    public render() {
        return <div>
            <h1>Enter Your Data</h1>
            <div className="input-group">
                <span className="input-group-addon">Name</span>
                <input
                    id="username"
                    type="text"
                    className="form-control"
                    placeholder="Username"
                    aria-describedby="username"/>
            </div>
            <br/>
            <div className="input-group">
                <span className="input-group-addon">Address</span>
                <input
                    id="useraddress"
                    type="text"
                    className="form-control"
                    placeholder="Address"
                    aria-describedby="address"/>
            </div>
            <br/>
            <div className="input-group">
                <span className="input-group-addon">Birthday</span>
                <input
                    id="userbirthday"
                    type="date"
                    className="form-control"
                    placeholder="Birthday"
                    aria-describedby="date"/>
            </div>
            <br/>
            <div className="btn-group" role="group" aria-label="...">
                <button
                    type="button"
                    className="btn btn-default"
                    onClick=
                    {()=> this.saveUser()}>Save</button>
                <button type="button" className="btn btn-default">Cancel</button>
            </div>
            <p id="try"></p>
        </div>;
    }
    saveUser() {
        Signup.username = (document.querySelector("#username")as HTMLInputElement).value;
        Signup.useraddress= (document.querySelector("#useraddress")as HTMLInputElement).value;
        Signup.userbirthday = (document.querySelector("#userbirthday")as HTMLInputElement).valueAsDate;
    }
}