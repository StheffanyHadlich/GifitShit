import * as React from 'react';
import {RouteComponentProps} from 'react-router';
import * as ReactDOM from 'react-dom';
import {Component} from 'react';
import axios from 'axios';
import * as ListContent from "./ListContent"
import * as MyLists from "./MyLists";
import {Link, NavLink} from 'react-router-dom';

export class Product extends React.Component < RouteComponentProps < {} >,
listOfProducts > {
    static products = [];

    constructor() {
        super();
        this.state = {
            forecasts: []
        }
    }

    componentWillMount() {
        let forecasts = Product.products;
        this.setState({forecasts: forecasts});
    }

    public render() {
        let content = this.renderProducts(this.state.forecasts);
        return <div>

            <h1>Add a New Product</h1>
            <script type="text/javascript"></script>
            <button
                type="button"
                className="btn btn-primary"
                data-toggle="modal"
                data-target="#exampleModal">New Product</button>

            <div
                className="modal fade"
                id="exampleModal"
                role="dialog"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">New Product</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <form name="newproduct">

                                <div className="input-group">
                                    <span className="input-group-addon">Product Name</span>
                                    <input
                                        id="newproductname"
                                        type="text"
                                        className="form-control"
                                        placeholder="Name"
                                        aria-describedby="name"/>
                                </div>
                                <br/>

                                <div className="input-group">
                                    <span className="input-group-addon">Description</span>
                                    <textarea
                                        id="newproductdescription"
                                        type="text"
                                        className="form-control"
                                        placeholder="Description"
                                        aria-describedby="description"/>
                                </div>

                                <br/>
                                <div className="input-group">
                                    <span className="input-group-addon">Price</span>
                                    <input
                                        id="newproductprice"
                                        type="number"
                                        step="0.1"
                                        className="form-control"
                                        placeholder="Price"
                                        aria-describedby="price"/>
                                </div>

                                <br/>
                                <div className="input-group">
                                    <span className="input-group-addon">Image</span>
                                    <input
                                        id="newproductimage"
                                        type="file"
                                        accept="image/*"
                                        className="form-control"
                                        placeholder="Image"
                                        aria-describedby="image"/>
                                </div>

                            </form>
                        </div>
                        <div className="modal-footer">
                            <button
                                type="button"
                                onClick={() => this.saveProduct()}
                                className="btn btn-secondary"
                                data-dismiss="modal">Save</button>
                            <button type="button" data-dismiss="modal" className="btn btn-primary">Cancel</button>
                        </div>
                    </div>
                </div>
            </div>
            <div
                className="modal fade"
                id="containermodal"
                role="dialog"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"></div>

            <br/>
            <br/>

            < h1>
                All Products
            </h1>
            <div className="row">{content}</div>
        </div>

    }

    renderProducts(forecasts : productsContent[]) {
        return <div>
            {forecasts.map(forecasts => <div className="col-sm-6">
                <div className="card">
                    <div className="card-body">
                        <h3 className="cardtitle" id={"productname"} name="productname">{forecasts.name}</h3>
                        <p className="card-text" id={"productdescription"}>{forecasts.description}</p>
                        <h5 className="card-text" id={"productprice"}>R$ {forecasts.price}</h5>
                        <a
                            className="btn btn-success"
                            role="button"
                            onClick=
                            {()=>this.addToList(forecasts)}>Add to the list</a>
                    </div>
                </div >
            </div>)}
        </div>
    }

    renderModal() {
        ReactDOM.render(
            <div className="modal-dialog" role="document">
            <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLabel">New List</h5>
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div className="modal-body">
                    <form name="newproduct">

                        <h1>You don't have a list Yet</h1>

                    </form>
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" data-dismiss="modal">Create a List</button>
                    <button type="button" data-dismiss="modal" className="btn btn-primary">Cancel</button>
                </div>
            </div>
        </div>, document.getElementById("containermodal"));

    }
    saveProduct() {
        //var temp = this.newProduct();

        var newProduct = this.newProduct();
        var double = false;
        var aux : productsContent;
        aux = ({name: newProduct.productname, description: newProduct.productdescription, price: newProduct.productprice});
        var forecasts = this.state.forecasts;

        forecasts.map(p => {
            if (aux.name == p.name) {
                double = true;
            }
        })

        if (double) {
            alert("Is already a product with this name");

        } else {
            forecasts.push({name: newProduct.productname, description: newProduct.productdescription, price: newProduct.productprice});
            this.setState({forecasts: forecasts});
            Product.products = forecasts as never;

        }
    }

    productListAtt() {
        ReactDOM.render(
            <div>{Product.products}</div>, document.getElementById("container"));
    }

    addToList(cast : productsContent) {
        if (MyLists.MyLists.list.name == "empty") {
            alert("You don't have a list yet, click on MyLists and create one");
        } else {
            if (ListContent.ListContent.listContent.indexOf(cast as never) == -1) {
                ListContent
                    .ListContent
                    .listContent
                    .push(cast as never);
            } else {
                alert("Error: Product is already on the list !!!");
            }
        }
    }

    newProduct() {

        var newproduct = {
            productname: (document.querySelector("#newproductname")as HTMLInputElement).value,
            productdescription: (document.querySelector("#newproductdescription")as HTMLInputElement).value,
            productprice: (document.querySelector("#newproductprice")as HTMLInputElement).valueAsNumber
        }

        return newproduct;
    }
}

interface productsContent {
    name : string;
    description : string;
    price : number;
}

interface listOfProducts {
    forecasts : productsContent[];
}
