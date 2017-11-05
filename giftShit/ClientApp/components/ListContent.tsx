import * as React from 'react';
import {RouteComponentProps} from 'react-router';
import * as ReactDOM from 'react-dom';

export class ListContent extends React.Component < RouteComponentProps < {} >, {} > {

    static listContent = [];
    static listName:any;
    
    public render() {
        return <div>
            < h1 id= "listName">
            {ListContent.listName}
            </h1>
            <div id="list">
                {ListContent.listContent}
            </div>
        </div>
    }

}