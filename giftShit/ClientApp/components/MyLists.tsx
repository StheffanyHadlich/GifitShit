import * as React from 'react';
import {RouteComponentProps} from 'react-router';

export class MyLists extends React.Component < RouteComponentProps < {} >, {} > {
    public render() {
        return <div>

            <h1>Add a New List</h1>
            <button
                type="button"
                className="btn btn-primary"
                data-toggle="modal"
                data-target="#exampleModal"
               >New List</button>

            <div
                className="modal fade"
                id="exampleModal"
                role="dialog"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">New List</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <form>
                                <div className="input-group">
                                    <span className="input-group-addon" id="productname">List Name</span>
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Name"
                                        aria-describedby="username"/>
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

            <br/>
            <br/>
            
            < h1>
                My Lists
            </h1>
        </div>
    }
}