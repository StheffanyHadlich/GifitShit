import * as React from 'react';
import {RouteComponentProps} from 'react-router';

export class Showcase extends React.Component < RouteComponentProps < {} >, {} > {
    public render() {  
            return <div>      
                <div className="row">
                    <div className="col-sm-6 col-md-4">
                        <div className="thumbnail">
                            <img src="gameoflife.png" alt="teste 1"/>
                                <div className="caption">
                                    <h3>Thumbnail label</h3>
                                    <p>batatas </p>
                                    <p>
                                        <a href="#" className="btn btn-primary" role="button">Button</a>
                                        <a href="#" className="btn btn-default" role="button">Button</a>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
            </div>
    }
}