import * as React from 'react';
import {RouteComponentProps} from 'react-router';
import * as ReactDOM from 'react-dom';

export class Product extends React.Component < RouteComponentProps < {} >, {} > {
    static products: any[];

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
                                        id="productname"
                                        type="text"
                                        className="form-control"
                                        placeholder="Name"
                                        aria-describedby="name"/>
                                </div>
                                <br/>

                                <div className="input-group">
                                    <span className="input-group-addon">Description</span>
                                    <textarea
                                        id="productdescription"
                                        type="text"
                                        className="form-control"
                                        placeholder="Description"
                                        aria-describedby="description"/>
                                </div>

                                <br/>
                                <div className="input-group">
                                    <span className="input-group-addon">Price</span>
                                    <input
                                        id="productprice"
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
                                        id="productimage"
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

            <div id="container"></div>
            <p id="try"><br/></p>
        </div>

    }

    saveProduct() {
        var temp = this.newProduct();
        Product.products = [temp];
        console.log(temp);
    }

    productList() {
        return <div>{Product.products.forEach}</div>;
    }

    newProduct() {
        var productname = document.querySelector("#productname")as HTMLInputElement;
        var productdescription = document.querySelector("#productdescription")as HTMLInputElement;
        var productprice = document.querySelector("#productprice")as HTMLInputElement;

        ReactDOM.render(
            <div className="row">
            <div className="col-sm-6 col-md-4">
                <div className="thumbnail">
                    <div className="caption">
                        <h3 id="productname">{productname.value}</h3>
                        <p id="productdescription">{productdescription.value}</p>
                        <p>
                            <a href="signup" className="btn btn-primary" role="button">Add to the list</a>
                        </p>
                    </div>
                </div>
            </div >
        </div>, document.getElementById("container"));
    }
}