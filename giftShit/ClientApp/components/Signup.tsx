import * as React from 'react';
import {RouteComponentProps} from 'react-router';

export class Signup extends React.Component < RouteComponentProps < {} >, {} > {
    public render() {
        return <div>
            <h1>Enter Your Data</h1>
            <div className="input-group">
                <span className="input-group-addon" id="username">Name</span>
                <input
                    type="text"
                    className="form-control"
                    placeholder="Username"
                    aria-describedby="username"/>
            </div>
            <br/>
            <div className="input-group">
                <span className="input-group-addon" id="address">Address</span>
                <input
                    type="text"
                    className="form-control"
                    placeholder="Address"
                    aria-describedby="address"/>
            </div>
            <br/>
            <div className="input-group">
                <span className="input-group-addon" id="birthday">Birthday</span>
                <input
                    type="date"
                    className="form-control"
                    placeholder="Birthday"
                    aria-describedby="date"/>
            </div>
            <br/>
            <div className="btn-group" role="group" aria-label="...">
                <button type="button" className="btn btn-default">Cancel</button>
                <button type="button" className="btn btn-default">Save</button>
            </div>      
        </div>;
    }
}