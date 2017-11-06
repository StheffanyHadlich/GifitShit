import * as React from 'react';
import {RouteComponentProps} from 'react-router';

interface userContent {
    name : string;
    address : string;
    date : string;
}
export class Signup extends React.Component < RouteComponentProps < {} >,
userContent > {

    constructor() {
        super();
        this.state = {
            name: "empty",
            address: "empty",
            date: "empty"
        }
    }
    static user={
        name: "empty",
        address: "empty",
        date: "empty"
    };
    componentWillMount() {
        var name = Signup.user.name;
        var address = Signup.user.address;
        var date = Signup.user.date;
        this.setState({name: name, address: address, date: date});
    }
    public render() {
        return <div>
            <h1>Enter Your Data</h1>
            <div className="input-group">
                <span className="input-group-addon">Name</span>
                <input
                    id="username"
                    type="text"
                    placeholder={this.state.name}                    
                    className="form-control"
                    aria-describedby="username"/>
            </div>
            <br/>
            <div className="input-group">
                <span className="input-group-addon">Address</span>
                <input
                    id="useraddress"
                    type="text"
                    className="form-control"
                    placeholder={this.state.address}
                    aria-describedby="address"/>
            </div>
            <br/>
            <div className="input-group">
                <span className="input-group-addon">Birthday</span>
                <input
                    id="userbirthday"
                    type="date"
                    placeholder={this.state.date}
                    
                    className="form-control"
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
            <br/>
            <h1>Current User</h1>
            <div>
                {this.renderUser()}
            </div>
        </div>;
    }
    saveUser() {
        var newUser = this.newUser();
        var name = newUser.username;
        var address = newUser.useraddress;
        var date = newUser.userbirthday;

        this.setState({name: name, address: address, date: date});

        Signup.user = {name,address,date};
    }
    renderUser() {
        return <div>
            <h3>UserName : {this.state.name}</h3>
            <h3>UserAddress : {this.state.address}</h3>
            <h3>UserBirthday : {this.state.date}</h3>

        </div>

    }

    newUser() {
        var newUser = {
            username: (document.querySelector("#username")as HTMLInputElement).value,
            useraddress: (document.querySelector("#useraddress")as HTMLInputElement).value,
            userbirthday: (document.querySelector("#userbirthday")as HTMLInputElement).value
        }
        return newUser;
    }
}