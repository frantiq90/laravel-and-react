import React, {Component} from 'react';
import { browserHistory } from 'react-router';

class CreateItem extends Component {
    constructor(props){
        super(props);

        this.state = {productName: '', productPrice: ''};

        this.handleChangeName = this.handleChangeName.bind(this);
        this.handleChangePrice = this.handleChangePrice.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChangeName(e){
        this.setState({
            productName: e.target.value
        })
    }
    handleChangePrice(e){
        this.setState({
            productPrice: e.target.value
        })
    }
    handleSubmit(e){
        console.log(this.state);
        e.preventDefault();

        const products = {
            name: this.state.productName,
            price: this.state.productPrice
        };

        let uri = 'http://laravelandreact.test/api/items';

        axios.post(uri, products).then((response) => {
            browserHistory.push('/display-item');
        });
    }

    render() {
        return (
            <div>
                <h1>Create An Item</h1>
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="item_name">Item name: </label>
                        <input type="text" className="form-control" id="item_name" aria-describedby="item_name" placeholder="Item name" onChange={this.handleChangeName}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="item_price">Item name: </label>
                        <input type="text" className="form-control" id="item_price" aria-describedby="item_price" placeholder="Item price" onChange={this.handleChangePrice}/>
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        )
    }
}

export default CreateItem;