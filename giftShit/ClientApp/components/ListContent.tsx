import * as React from 'react';
import {RouteComponentProps} from 'react-router';
import * as ReactDOM from 'react-dom';
import * as MyLists from "./MyLists"
export class ListContent extends React.Component < RouteComponentProps < {} >,Exm > {

    constructor() {
        super();
        this.state = {
            forecasts: []
        }
    }
    static listContent = [];

    componentWillMount() {
        let forecasts = ListContent.listContent;
        this.setState({forecasts: forecasts});
        console.log(forecasts.map(forecasts => (forecasts)))
    }
    public render() {
        let content = this.letsRender(this.state.forecasts);
        return <div>
            <h1>{MyLists.MyLists.list.name}</h1>
            < h1 id="listName"></h1>
            <div id="list">
                {content}
            </div>
        </div>
    }

    public removeList(cast:teste) {
        var forecasts = this.state.forecasts;
        var index = forecasts.indexOf(cast as never);
        forecasts.splice(index,1);
        this.setState({forecasts:forecasts});

        ListContent.listContent = forecasts as never;
    }

    public letsRender(forecasts : teste[]) {
        return <div>
            {forecasts.map(forecasts => <div className="row">
                <div className="card">
                    <div className="card-body">
                        <h3 className="cardtitle" id={"productname"} name="productname">{forecasts.name}</h3>
                        <p className="card-text" id={"productdescription"}>{forecasts.description}</p>
                        <h5 className="card-text" id={"productprice"}>R$ {forecasts.price}</h5>
                        <a className="btn btn-primary" onClick={()=> this.removeList(forecasts)} role="button">Remove to the list</a>
                       </div>
                </div >
            </div>)}
        </div>
    }

}

interface teste {
    name : string;
    description:string;
    price:string;
}

interface Exm {
    forecasts : teste[];
}