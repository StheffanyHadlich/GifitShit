import * as React from 'react';
import {RouteComponentProps} from 'react-router';

export class Product extends React.Component < RouteComponentProps < {} >, {} > {
    public render() {
        return <div>
            <br/>
            <br/>
            
            <button
                type="button"
                className="btn btn-primary"
                data-toggle="modal"
                data-target="#exampleModal"
                data-whatever="@mdo">New Product</button>

            <div
                className="modal fade"
                id="exampleModal"
                role="dialog"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">New message</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <form>
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
                                <div className="input-group">
                                    <span className="input-group-addon" id="price">Price</span>
                                    <input
                                        type="number"
                                        step="0.1"
                                        className="form-control"
                                        placeholder="Price"
                                        aria-describedby="price"/>
                                </div>

                                <br/>
                                <div className="input-group">
                                    <span className="input-group-addon" id="image">Image</span>
                                    <input
                                        type="file"
                                        accept="image/*"
                                        className="form-control"
                                        placeholder="Image"
                                        aria-describedby="image"/>
                                </div>
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Save</button>
                            <button type="button" className="btn btn-primary">Cancel</button>
                        </div>
                    </div>
                </div>
            </div>

            < h1>
                Showcase
            </h1>
            <div className="row">
                <div className="col-sm-6 col-md-4">
                    <div className="thumbnail">
                        <img src="snake.jpg" alt="teste 1"/>
                        <div className="caption">
                            <h3>Cobra com bracinhos</h3>
                            <p>batatas
                            </p>
                            <p>
                                <a href="#" className="btn btn-primary" role="button">Add to the list</a>
                            </p>
                        </div>
                    </div>
                </div >
            </div>
        </div>
    }
}