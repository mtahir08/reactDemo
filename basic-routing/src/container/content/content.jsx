import React, { Component } from 'react';
import contents from '../../menu.json';

class Content extends Component {

    render() {
        return (
            <ul>
                {
                    Object.keys(contents).map((i, a) =>
                        <li key={a}><a href={i}>{i}</a></li>)
                }
            </ul>
        )
    }
}

export default Content;