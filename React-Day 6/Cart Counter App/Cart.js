import React, { useState } from 'react';

import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

function Cart(props){

    const [numValue, setNum] = useState(0);

   // let currentCount = useSelector((state) => state.count);

    const dispatch =useDispatch();

    function addClick(){
        dispatch({type:"ADD", count:numValue} );
        setNum(0); 
    }

    function removeClick(){
        dispatch({type:"REMOVE", count:numValue} );
        setNum(0); 
    }

    return (
        
              <div> 
                
                <button onClick={addClick}>ADD</button>
                <button onClick={removeClick}>REMOVE</button>
        </div>
        
        );
}

export default Cart;