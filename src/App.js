import React, { Component } from 'react';
import './App.css';
import Dashboard from './components/Dashboard/Dashboard';
import Form from './components/Form/Form';
import Header from './components/Header/Header';
import Product from './components/Product/Product';

class App extends Component {
  constructor(){
    super();


   this.state = {
     inventoryList: 
      [{name: 'shirt', price: '10', image: 'shirtImage'},
      {name: 'pants', price: '20', image: 'pantsImage'},
      {name: 'glasses', price: '30', image: 'glassesImage'}]
   }
  }

  render() {
    return (
      <div className="App">
      <Dashboard
      inventoryList= {this.state.inventoryList} />
      <Form/>
      <Header/>
      </div>
    );
  }
}

export default App;
