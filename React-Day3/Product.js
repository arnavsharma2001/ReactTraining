import { useState} from "react";

function  Product()
{ 
    const [pname, setPname] = useState("");
    const [price, setPrice] = useState("");
    const [qty, setQty] = useState("");
    const [result, setResult] = useState("");


    function updatePname(event)
    {        
       setPname(event.target.value);
    }

    function updatePrice(event)
    {        
       setPrice(event.target.value);
    }

    function updateQty(event)
    {        
       setQty(event.target.value);
    }

    function  loginClick()
    {
        
            setResult("Total Amount: " + price*qty);
       
    }


    return (
        <>		
             
                Product Name  :    <input type="text" onChange={updatePname}  />
                <br /><br />

                Unit Price  :    <input type="integer" onChange={updatePrice}  />
                <br /><br />

                Quantity  :    <input type="integer" onChange={updateQty} />
                <br /><br />

                <input type="button" onClick={loginClick} value="Get Total" />
               <p>{result}</p>
           
        </>
    );
}

export default Product;