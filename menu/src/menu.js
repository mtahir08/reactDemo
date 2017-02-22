import React, { Component } from 'react';
import './App.css';
import List from './list';

class Menu extends Component {

    render() {
        let menus = ['Home',
            'About',
            'Services',
            'Portfolio',
            'Contact us']

        return (
            <div>
                {menus.map((v, i) => {
                    return <div key={i}><List label={v} /></div>
                })}
            </div>

        )
    }
}

export default Menu;