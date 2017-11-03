import * as React from 'react';
import {RouteComponentProps} from 'react-router';

export class Signup extends React.Component < RouteComponentProps < {} >, {} > {
    public render() {
        return <div>
            <li>Entre com seus dados</li>
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
                <span className="input-group-addon" id="address">Address</span>
                <input
                    type="date"
                    className="form-control"
                    placeholder="Birthday"
                    aria-describedby="address"/>
            </div>
            <br/>
            <div className="btn-group" role="group" aria-label="...">
                <button type="button" className="btn btn-default">Cancelar</button>
                <button type="button" className="btn btn-default">Salvar</button>
            </div>      

            

        </div>;
    }
}