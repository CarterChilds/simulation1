import React, {Component} from 'react';


export default class Dashboard extends Component {
    constructor(){
        super();


        this.state = {
            imageUrl: '',
            productName : '',
            price: ''
        }


    }

    handleImageUrlChange = (e) => {
        this.setState({imageUrl: e.target.value});
    }

    handleProductNameChange = (e) => {
        this.setState({productName: e.target.value});
    }

    handlePriceChange = (e) => {
        this.setState({price: e.target.value});
    }

    clearInput = () => {
        this.setState({
            imageUrl: '',
            productName: '',
            price: ''
        })
    }


    render(){
        return(
            <div className='Form'>
                <input value={this.state.imageUrl} onChange={ this.handleImageUrlChange } type='text' />
                <input value={this.state.productName} onChange= { this.handleProductNameChange } type='text'/>
                <input value={this.state.price} onChange={ this.handlePriceChange }  type='text'/>
                <button onClick={this.clearInput}>Cancel</button>
                <button>Add to Inventory</button>
            </div>

        )
    }
}