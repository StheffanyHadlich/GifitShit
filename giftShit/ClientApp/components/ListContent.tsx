import * as React from 'react';
import {RouteComponentProps} from 'react-router';
import * as ReactDOM from 'react-dom';

export class ListContent extends React.Component < RouteComponentProps < {} >,
Exm > {

    constructor() {
        super();
        this.state = {
            forecasts: []
        }
    }
    static listContent = [];

    componentWillMount(){
        let forecasts = ListContent.listContent;
        this.setState({forecasts:forecasts});
        console.log(forecasts.map(forecasts => (forecasts)))
    }
    public render() {
        let content = ListContent.letsRender(this.state.forecasts);
        return <div>
            < h1 id="listName">
            </h1>
            <div id="list">
                {content}
            </div>
        </div>
    }

    public static letsRender(forecasts : teste[]) {
        return <div>
            {forecasts.map(forecasts => <div className="row">
                <div className="col-sm-6 col-md-4">
                    <div className="thumbnail">
                        <div className="caption">
                            <h3 id={"productname"} name="productname">{forecasts.name}</h3>
                            <a className="btn btn-primary" role="button">Add to the list</a>
                        </div>
                    </div >
                </div>
            </div>)}
        </div>
    }

}

interface teste {
    name : string;
}

interface Exm {
    forecasts : teste[];
}