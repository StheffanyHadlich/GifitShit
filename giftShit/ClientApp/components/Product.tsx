import * as React from 'react';
import {RouteComponentProps} from 'react-router';
import * as ReactDOM from 'react-dom';
import {Component} from 'react';
import axios from 'axios';
import * as ListContent from "./ListContent"

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
                            <button type="button" className="btn btn-primary">Cancel</button>
                        </div>
                    </div>
                </div>
            </div>
            <br/>
            <br/>

            < h1>
                All Products
            </h1>
            <div>{content}</div>
        </div>

    }

    renderProducts(forecasts : productsContent[]) {
        return <div>
            {forecasts.map(forecasts => <div className="row">
                <div className="col-sm-6 col-md-4">
                    <div className="thumbnail">
                        <div className="caption">
                            <h3 id={"productname"} name="productname">{forecasts.name}</h3>
                            <p id={"productdescription"}>{forecasts.description}</p>
                            <h5 id={"productprice"}>R$ {forecasts.price}</h5>
                            <a
                                className="btn btn-primary"
                                role="button"
                                onClick=
                                {()=>this.addToList(forecasts)}>Add to the list</a>
                        </div>
                    </div >
                </div>
            </div>)}
        </div>
    }

    saveProduct() {
        //var temp = this.newProduct();
        var newProduct = this.newProduct();
        var double = false;
        var forecasts = this.state.forecasts;
        forecasts.push({name: newProduct.productname, description: newProduct.productdescription, price: newProduct.productprice});

        //fix this
        if (Product.products.indexOf(forecasts[forecasts.length]as never) == -1) {

            this.setState({forecasts: forecasts});
            Product.products = forecasts as never;

            // console.log(forecasts.map(forecasts => forecasts.name))
            // Product.products.push(temp as never);

        } else {
            alert("Is already a product with this name");

        }
    }

    productListAtt() {
        ReactDOM.render(
            <div>{Product.products}</div>, document.getElementById("container"));
    }

    addToList(cast : productsContent) {
        if (ListContent.ListContent.listContent.indexOf(cast as never) == -1) {
            ListContent
                .ListContent
                .listContent
                .push(cast as never);
        } else {
            alert("Error: Product is already on the list !!!");
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
