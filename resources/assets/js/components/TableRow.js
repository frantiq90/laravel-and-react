import React, { Component } from 'react';
import {browserHistory, Link} from 'react-router';
import axios from "axios/index";

class TableRow extends Component {
    constructor(props) {
        super(props);
        this.deleteItem = this.deleteItem.bind(this);
    }
    deleteItem(event) {
        event.preventDefault();
        let uri = `http://laravelandreact.test/api/items/${this.props.obj.id}`;
        axios.delete(uri).then(response => {
            browserHistory.push('/display-item');
        });
    }

    render() {
        return (
            <tr>
                <td>
                    {this.props.obj.id}
                </td>
                <td>
                    {this.props.obj.name}
                </td>
                <td>
                    {this.props.obj.price}
                </td>
                <td>
                    <Link to={"edit/"+ this.props.obj.id} className="btn btn-primary">Edit</Link>
                </td>
                <td>
                    <button onClick={this.deleteItem.bind(this)} className="btn btn-danger">Delete</button>
                </td>
            </tr>
        );
    }
}

export default TableRow;