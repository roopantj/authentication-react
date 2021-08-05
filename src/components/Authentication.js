import React, { useState } from 'react';
import MobileInput from './MobileInput';
import Otp from './Otp';

const Authentication = ({ history }) =>{
  
   const [mobnoValid,setMobnoValid] = useState(false)   
   const mobnoValidityHandler = (mobno) =>{
     if(mobno.length===10)
         setMobnoValid(true)   
     else
         setMobnoValid(false)
   }
   
   return(
       <React.Fragment>
            {
              mobnoValid ?
            <Otp goBack={mobnoValidityHandler} history={history} /> : 
            <MobileInput mobnoValidityHandler={mobnoValidityHandler}/>
            }
       </React.Fragment>
  )
}

export default Authentication;