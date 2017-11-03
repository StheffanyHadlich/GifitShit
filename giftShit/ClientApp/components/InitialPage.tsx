import * as React from 'react';
import {RouteComponentProps} from 'react-router';

export class InitialPage extends React.Component < RouteComponentProps < {} >, {} > {
    public function () {
        console.log("What");
    }

    public render() {
       return <div/>
    }
}