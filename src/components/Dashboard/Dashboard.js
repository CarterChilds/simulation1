import React, {Component} from 'react';
import Product from './../Product/Product';

export default class Dashboard extends Component {
    constructor(props){
        super();




    }

    render(){

        let mappedList = this.props.inventoryList.map((element, i)  => {
            return(
                <Product key={i} element={element}/>
            )
        } )

        return(
            <div>
                {mappedList}
                Dashboard
               
                
            </div>
        )
    }
}