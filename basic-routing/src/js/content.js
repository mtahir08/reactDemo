import React, { Component } from 'react';
import { Link } from 'react-router';

class Content extends Component {
    contextTypes = {
        router: React.PropsTypes.object.isRequired
    }
    render() {
        const element =
            <div>
                <div className="navbar navbar-default">
                    <ul className="nav nav-pills navbar-nav ">
                        <li className={(this.context.router.isActive('/about')) ? 'active' : ''}>
                            <Link to="/about" activeClassName="active">About </Link>
                        </li>
                        <li className={(this.context.router.isActive('/about')) ? 'active' : ''}>
                            <Link to="/posts" activeClassName="active">Blog </Link>
                        </li>
                        <li>
                            <Link to="/login" activeClassName="active">
                                Login
                        </Link>
                        </li>
                    </ul>
                </div>
                {this.props.children}
            </div>
        return element;
    }

}

export default Content