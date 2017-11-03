import * as React from 'react';
import { Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Home } from './components/Home';
import { FetchData } from './components/FetchData';
import { Counter } from './components/Counter';
import { Signup } from './components/Signup';
import { Product } from './components/Product';
import { Showcase } from './components/Showcase';


export const routes = <Layout>
    <Route exact path='/' component={ Home } />
    <Route path='/counter' component={ Counter } />
    <Route path='/fetchdata' component={ FetchData } />
    <Route path='/signup' component={ Signup } />
    <Route path='/product' component={ Product } />
    <Route path='/showcase' component={ Showcase } />
    
</Layout>;
