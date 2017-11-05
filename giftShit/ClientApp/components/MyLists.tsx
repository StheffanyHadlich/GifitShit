import * as React from 'react';
import {RouteComponentProps} from 'react-router';
import * as ReactDOM from 'react-dom';
import * as ListContent from "./ListContent";
import {Link, NavLink} from 'react-router-dom';

export class MyLists extends React.Component < RouteComponentProps < {} >, {} > {

    public render() {
        return <div>

            <h1>Add a New List</h1>
            <button
                type="button"
                className="btn btn-primary"
                data-toggle="modal"
                data-target="#exampleModal">New List</button>

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
                                    <span className="input-group-addon">List Name</span>
                                    <input
                                        id="listname"
                                        type="text"
                                        className="form-control"
                                        placeholder="Name"
                                        aria-describedby="username"/>
                                </div>
                            </form>
                        </div>

                        <div className="modal-footer">
                            <button
                                type="button"
                                onClick=
                                {()=> this.saveList()}
                                className="btn btn-secondary"
                                data-dismiss="modal">Save</button>
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
            <div className="row">
                <div className="col-sm-6 col-md-4">
                    <div id="container">{MyLists.list}</div>
                </div>
            </div>
        </div>
    }

    static list = [];

    saveList() {
        var temp = this.newList();
        MyLists.list.push(temp as never);

        this.renderList();
    }

    newList() {
        var listname = document.querySelector("#listname")as HTMLInputElement;
        return (
            <div className="thumbnail" key = {listname.value}>
                <div className="caption">
                    <h3>{listname.value}</h3>
                </div>
            </div >
        )
    }

    renderList() {
        ReactDOM.render(
            <div>{MyLists.list}</div>, document.getElementById("container"));
    }
}