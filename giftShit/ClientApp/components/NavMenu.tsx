import * as React from 'react';
import {Link, NavLink} from 'react-router-dom';

export class NavMenu extends React.Component < {}, {} > {
    public render() {
        return <div className='main-nav'>
            <div className='navbar navbar-inverse'>
                <div className='navbar-header'>
                    <button
                        type='button'
                        className='navbar-toggle'
                        data-toggle='collapse'
                        data-target='.navbar-collapse'>
                        <span className='sr-only'>Toggle navigation</span>
                        <span className='icon-bar'></span>
                        <span className='icon-bar'></span>
                        <span className='icon-bar'></span>
                    </button>
                    <Link className='navbar-brand' to={'/'}>giftShit</Link>
                </div>
                <div className='clearfix'></div>
                <div className='navbar-collapse collapse'>
                    <ul className='nav navbar-nav'>

                        <li>
                            <NavLink to={'/home'} exact activeClassName='active'>
                                <span className='glyphicon glyphicon-home'></span>
                                Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to={'/login'} exact activeClassName='active'>
                                <span className='glyphicon glyphicon-user'></span>
                                Login
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to={'/lists'} activeClassName='active'>
                                <span className='glyphicon glyphicon-list'></span>
                                Lists
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to={'/products'} activeClassName='active'>
                                <span className='glyphicon glyphicon-gift'></span>
                                Products
                            </NavLink>
                        </li>

                    </ul>
                </div>
            </div>
        </div>;
    }
}
