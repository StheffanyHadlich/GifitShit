import * as React from 'react';
import {RouteComponentProps} from 'react-router';


export class Showcase extends React.Component < RouteComponentProps < {} >, {} > {
    public render() {  
            return <div> 
                <h1>Showcase</h1>     
                <div className="row">
                    <div className="col-sm-6 col-md-4">
                        <div className="thumbnail">
                            <img src="snake.jpg" alt="teste 1"/>
                                <div className="caption">
                                    <h3>Cobra com bracinhos</h3>
                                    <p>batatas </p>
                                    <p>
                                
                                        <a href="#" className="btn btn-primary" role="button">Add to the list</a>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
            </div>
    }
}