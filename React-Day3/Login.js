import { useState } from "react";

function Login() {

    const [uid, setUid] = useState("");
    const [pwd, setPwd] = useState("");
    const [result, setResult] = useState("");


    function updateUid(event)
    {        
       setUid(event.target.value);
    }

    function updatePwd(event)
    {        
       setPwd(event.target.value);
    }

    function  loginClick()
    {
        if(uid == "admin"  && pwd == "admin123")
        {
            setResult("Welcome to Admin");
        }
        else
        {
            setResult("Invalid User Id or Password");
        }
    }

    return (

        // we use value attribute here to reflect the given value directly to the box which is reverse
        // of what we did previously where we stores the entered value in the box to uid variable
        <>
            <h3>Working with state in React</h3>
            <hr/>

            <fieldset>
                <legend>User Login</legend>
                User Name  :    <input type="text" value = {uid} onChange={updateUid}  />
                <br /><br />

                Password  :    <input type="password" value ={pwd} onChange={updatePwd}  />
                <br /><br />

                <input type="button" onClick={loginClick} value="Login" />
               <p>{result}</p>
            </fieldset>
        </>
    );
}

export default Login;