import { useState } from "react";
import LoginCard from "./LoginCard";

const MobileInput = props =>{
    const [mobno,setMobno] = useState()
    const handleChange = (event) => setMobno(event.target.value)
    return(
      <LoginCard>
        <h4>Login</h4>
        <input placeholder="Mobile number" type="number" onChange={handleChange} value={mobno}/><br/>
        <button onClick={()=>props.mobnoValidityHandler(mobno)}>Next</button>
      </LoginCard>
    )
}

export default MobileInput;