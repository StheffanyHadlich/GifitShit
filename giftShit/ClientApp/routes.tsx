import * as React from 'react';
import { Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Home } from './components/Home';
import { FetchData } from './components/FetchData';
import { Counter } from './components/Counter';
import { Signup } from './components/Signup';
import { Product } from './components/Product';
import { Login } from './components/Login';
import { MyLists } from './components/MyLists';




export const routes = <Layout>
    <Route exact path='/' component={ Login } />
    <Route path='/login' component={ Login } />
    <Route path='/lists' component={ MyLists } />
    <Route path='/counter' component={ Counter } />    
    <Route path='/home' component={ Home } />
    <Route path='/fetchdata' component={ FetchData } />
    <Route path='/signup' component={ Signup } />
    <Route path='/products' component={ Product } />
    
</Layout>;
