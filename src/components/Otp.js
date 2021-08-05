import { useState } from 'react';
import {useDispatch} from 'react-redux'; 
import OtpInput from 'react-otp-input';
import {authActions} from '../store/index';
import './otp.css';

const Otp = props =>{
    const [otp,setOtp] = useState('');
 
    const dispatch = useDispatch();
     
    const handleChange = (otpProp) => setOtp(otpProp)  

    const otpValidityHandler = () =>{
        if(otp.length===6) {
            dispatch(authActions.loginHandler());
            props.history.push('/dashboard')
        }
    }

    return(
        <div className='otp'>
            <h4>Welcome</h4>
             <OtpInput  
                   containerStyle={{justifyContent:'center'}}
                   value={otp}
                   onChange={handleChange}
                   numInputs={6}
                   separator={<span>-</span>}/>
             <button onClick={()=>props.goBack('')}>Go Back</button>
             <button onClick={otpValidityHandler}>Login</button>    
        </div>
    )
}

export default Otp;