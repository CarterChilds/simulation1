import React from 'react';


export default function Product(props){
    return(
        <div>
            <div>{props.element.name}</div>
            <div>{props.element.price}</div>
           <div>{props.element.image}</div>
        </div>
    
    )
}