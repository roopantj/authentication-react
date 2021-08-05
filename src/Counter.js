import Card from "./Card";
import {useSelector,useDispatch} from 'react-redux';
import {counterActions} from './store/index';
import {Button} from 'reactstrap';

const Counter = () =>{
    const counter = useSelector(state=>state.counter.counter)
    const dispatch = useDispatch();
    
    const incrementHandler = () =>{
        dispatch(counterActions.increment())
    }
    const decrementHandler = () =>{
        dispatch(counterActions.decrement())
    }
    const increaseHandler = () =>{
        dispatch(counterActions.increase(10))
    }
    return(
       <Card>
           <h3 style={{color:'white'}}>Counter</h3>
           <h4 style={{color:'white'}}>{counter}</h4>
           <Button style={{margin:'1rem'}} color='primary' onClick={incrementHandler}>Increment</Button>{'   '}
           <Button style={{margin:'1rem'}} color='primary' onClick={decrementHandler}>Decrement</Button>{'   '}
           <Button style={{margin:'1rem'}} color='primary' onClick={increaseHandler}>Increase</Button>
       </Card>
   )
}

export default Counter;