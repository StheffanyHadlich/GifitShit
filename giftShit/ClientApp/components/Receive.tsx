import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import {Component} from 'react';
import axios from 'axios';
class Receive extends Component {
    constructor() {
        super();
        this.state = {
            products: []
        }
    }
    componentDidMount() {
        fetch('localhost:5050').then(result => {
            return result.json();
        }).then(data => {
            let products = data
                .results
                .map((product : any) => {
                    return (
                        <div key={product.result}></div>
                    )
                })
            this.setState({products: products});

        })
    }
    render() {
        return (
            <div className="container">
                <div className="container2">

                </div>
            </div>
        );
    }

}
