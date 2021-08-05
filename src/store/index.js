import {configureStore, createSlice} from '@reduxjs/toolkit';

const initialCounterState = {counter:0}
const initialAuthState={isLogged:false}
const counterSlice = createSlice({
    name:'counter',
    initialState:initialCounterState,
    reducers:{
        increment(state){
            state.counter++;
        },
        decrement(state){
            state.counter--;
        },
        increase(state,action){
            state.counter+=action.payload
        }
    }
})
const authSlice = createSlice({
    name:'auth',
    initialState:initialAuthState,
    reducers:{
        loginHandler(state){
            state.isLogged=true
        },
        logoutHandler(state){
            state.isLogged=false
        }
    }

})
export const counterActions = counterSlice.actions;
export const authActions = authSlice.actions;

const store = configureStore({
    reducer: { counter:counterSlice.reducer, auth:authSlice.reducer}
})
// 
// const counterReducer = (state=initialState,action) =>{
//     if(action.type==='increment'){
//         return {
//             counter: state.counter+1
//         }
//     }
//     if(action.type==='decrement'){
//         return{
//             counter: state.counter-1
//         }
//     }
//     if(action.type==='increase'){
//         return{
//             counter: state.counter + action.payload
//         }
//     }
//     return state;
// }

export default store;