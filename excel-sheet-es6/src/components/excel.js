import React, { Component } from 'react';
import './excel.css'
import { headers, data } from './data';
import { Table, Glyphicon } from 'react-bootstrap';

class Excel extends Component {
    constructor(props) {
        super(props);
        this.check = this.check.bind(this);
        this.state = {
            descending: false
        }
        this.headers = headers;
        this.data = data;
    }
    check(event) {
        var column = event.target.cellIndex;
        this.setState({
            descending: !this.state.descending
        });
        this.data.sort((a, b) => {
            return this.state.descending ?
                (a[column] < b[column] ? 1 : -1) :
                (a[column] > b[column] ? 1 : -1);
        })
    }
    render() {
        let arrow = !this.state.descending ? <Glyphicon glyph="arrow-up" />:<Glyphicon glyph="arrow-down" />;
        return (

            <Table striped bordered condensed hover>
                <thead>
                    <tr>
                        {this.headers.map((header, hIndex) =>
                            <td key={hIndex} onClick={this.check}>  {header} {arrow}</td>
                        )}
                    </tr>
                </thead>
                <tbody>
                    {
                        this.data.map((arr, aIndex) =>
                            <tr key={aIndex}>
                                {arr.map((d, dIndex) =>
                                    <td key={dIndex}>
                                        {d}
                                    </td>
                                )}
                            </tr>
                        )
                    }
                </tbody>
            </Table>
        );
    }
}

export default Excel;