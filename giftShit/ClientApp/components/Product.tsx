import * as React from 'react';
import {RouteComponentProps} from 'react-router';
import * as ReactDOM from 'react-dom';
import {Component} from 'react';
import axios from 'axios';
import * as ListContent from "./ListContent"

export class Product extends React.Component < RouteComponentProps < {} >, {} > {
    static products = [];

    public render() {
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
            <div className="row">
                <div className="col-sm-6 col-md-4">
                    <div id="container">{Product.products}</div>
                </div>
            </div>
        </div>

    }

    saveProduct() {
        var temp = this.newProduct();

        Product
            .products
            .push(temp as never);

        this.productListAtt();
    }

    test() {
        axios
            .get('localhost:5000/api/Clients')
            .then(function (data : any) {
                console.log(data);
            })
    }

    static ID: number = 0;

    productListAtt() {
        ReactDOM.render(
            <div>{Product.products}</div>, document.getElementById("container"));
    }

    addToList(product : any) {

        console.log(Product.products);
        ListContent
            .ListContent
            .listContent
            .push(product as never);
    }
   
    static temp = [];
    newProduct() {

        var productcode = Product.ID;
        var productname = document.querySelector("#newproductname")as HTMLInputElement;
        var productdescription = document.querySelector("#newproductdescription")as HTMLInputElement;
        var productprice = document.querySelector("#newproductprice")as HTMLInputElement;

        var newp = {
            productcode: Product.ID,
            productname: (document.querySelector("#newproductname")as HTMLInputElement).value,
            productdescription: (document.querySelector("#newproductdescription")as HTMLInputElement).value,
            productprice: (document.querySelector("#newproductprice")as HTMLInputElement).value
        }

        Product
            .temp
            .push(newp as never)
        var teem = Product.temp[0]as Object;

        console.log();

        Product.ID = Product.ID + 1;

        return (
            <div className="thumbnail" key={productcode}>
                <div className="caption">
                    <h3 id={"productname" + productcode as any as string} name="productname">{productname.value}</h3>
                    <p id={productdescription.value + productcode as any as string}>{productdescription.value}</p>
                    <h5 id={productprice.value + productcode as any as string}>R$ {productprice.valueAsNumber}</h5>
                    <h5 id="productcode">Code {productcode}</h5>

                    <a
                        className="btn btn-primary"
                        role="button"
                        onClick=
                        {()=>this.addToList(Product.products[productcode])}>Add to the list</a>
                </div>
            </div >
        );
    }
}

