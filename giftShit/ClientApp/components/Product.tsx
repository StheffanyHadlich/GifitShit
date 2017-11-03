import * as React from 'react';
import {RouteComponentProps} from 'react-router';

export class Product extends React.Component < RouteComponentProps < {} >, {} > {
    public render() {
        return <div>
            <h1>Product</h1>
            <div className="input-group">
                <span className="input-group-addon" id="productname">Product Name</span>
                <input
                    type="text"
                    className="form-control"
                    placeholder="Name"
                    aria-describedby="username"/>
            </div>
            <br/>
            <div className="input-group">
                <span className="input-group-addon" id="address">Description</span>
                <textarea
                    type="text"
                    className="form-control"
                    placeholder="Description"
                    aria-describedby="description"/>
            </div>
            <br/>
            <div className="btn-group" role="group" aria-label="...">
                <button type="button" className="btn btn-default">Cancelar</button>
                <button type="button" className="btn btn-default">Salvar</button>
            </div>

        </div>
    }
}