import * as React from 'react';
import {RouteComponentProps} from 'react-router';
import * as ReactDOM from 'react-dom';
import * as ListContent from "./ListContent";
import {Link, NavLink} from 'react-router-dom';
interface List {
    name : string;
}
export class MyLists extends React.Component < RouteComponentProps < {} >,
List > {

    constructor() {
        super();
        this.state = {
            name: "empty"
        }
    }

    static list = {
        name: "empty"
    }

    componentWillMount() {
        var name = MyLists.list.name;
        this.setState({name: name});
    }

    public render() {
        return <div>

            <h1>Add a New List</h1>
            <button
                type="button"
                className="btn btn-success"
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
                            <button type="button" data-dismiss="modal" className="btn btn-primary">Cancel</button>
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
                <div className="card w-100" id="container">
                    {this.renderList()}
                </div>
                <NavLink to={'/listcontent'}/>
            </div>
        </div>
    }

    saveList() {
        var name = this.newList();
        this.setState({name: name});
        MyLists.list = {
            name
        };
    }

    newList() {
        return (document.querySelector("#listname")as HTMLInputElement).value;
    }

    renderList() {
        if (this.state.name == "empty") {
            return <div/>
        } else {
            return (
                <div className="card-body">
                    <h3 className="card-title" id={"listname"} name="listname">{this.state.name}</h3>
                    <NavLink to='listcontent'>
                        <div className="card text-rigth">
                            <button className="btn btn-primary" role="button">Go to my list</button>
                        </div>
                    </NavLink>
                </div>
            )
        }
    }
}