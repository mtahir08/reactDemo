import React, { Component } from 'react';
import './excel.css'
import { headers, data } from './data';
import { Table, Glyphicon } from 'react-bootstrap';

class Excel extends Component {
    constructor(props) {
        super(props);
        this.check = this.check.bind(this);
        this.state = {
            descending: false,
            editing: null
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

    edit(i, event) {
        let editingValue = {
            row: i,
            column: event.target.cellIndex
        }
        this.setState({
            editing: editingValue
        });
    }

    handleSubmit(event) {
        event.preventDefault();
        let row = this.state.editing.row;
        let col = this.state.editing.column;
        var input = event.target.firstChild;
        data[row][col] = input.value;
        this.setState({
            editing: null
        })
    }

    render() {
        let arrow = !this.state.descending ? <Glyphicon glyph="arrow-up" /> : <Glyphicon glyph="arrow-down" />;
        let editing = this.state.editing;
        let content = null;
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
                        this.data.map((arr, rIndex) =>
                            <tr key={rIndex} onDoubleClick={this.edit.bind(this, rIndex)}>
                                {arr.map(function (d, dIndex) {
                                    content = d;
                                    if (editing && editing.row === rIndex && editing.column === dIndex) {
                                        content = <form onSubmit={this.handleSubmit.bind(this)}>
                                            <input type="text" defaultValue={content} />
                                        </form>
                                    }
                                    return <td key={dIndex}>
                                        {content}
                                    </td>
                                }, this)
                                }
                            </tr>
                        )
                    }
                </tbody>
            </Table>
        );
    }
}

export default Excel;