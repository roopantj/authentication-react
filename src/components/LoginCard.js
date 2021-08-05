import './LoginCard.css';

const LoginCard = props =>{
    return(
        <div className='LoginCard'>
           {props.children}
        </div>
    )
}

export default LoginCard;