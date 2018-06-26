import React, {Component} from 'react';
import axios from 'axios';
import { Link } from 'react-router';
import { browserHistory } from 'react-router';

class EditItem extends Component {
    constructor(props) {
        super(props);
        this.state = {name: '', price: ''};
        this.handleChangeName = this.handleChangeName.bind(this);
        this.handleChangePrice = this.handleChangePrice.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount(){
        axios.get(`http://laravelandreact.test/api/items/${this.props.params.id}/edit`)
            .then(response => {
                this.setState({ name: response.data.name, price: response.data.price });
            })
            .catch(function (error) {
                console.log(error);
            })
    }
    handleChangeName(e){
        this.setState({
            name: e.target.value
        })
    }
    handleChangePrice(e){
        this.setState({
            price: e.target.value
        })
    }

    handleSubmit(event) {
        event.preventDefault();
        const products = {
            name: this.state.name,
            price: this.state.price
        };
        let uri = 'http://laravelandreact.test/api/items/'+this.props.params.id;
        axios.patch(uri, products).then((response) => {
            browserHistory.push('/display-item');
        });
    }
    render(){
        return (
            <div>
                <h1>Update Item</h1>
                <div className="row">
                    <div className="col-md-10"></div>
                    <div className="col-md-2">
                        <Link to="/display-item" className="btn btn-success">Return to Items</Link>
                    </div>
                </div>
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label>Item Name</label>
                        <input type="text"
                               className="form-control"
                               value={this.state.name}
                               onChange={this.handleChangeName} />
                    </div>

                    <div className="form-group">
                        <label name="product_price">Item Price</label>
                        <input type="text" className="form-control"
                               value={this.state.price}
                               onChange={this.handleChangePrice} />
                    </div>

                    <div className="form-group">
                        <button className="btn btn-primary">Update</button>
                    </div>
                </form>
            </div>
        )
    }
}
export default EditItem;