// import   {createStore} from  'redux';
//redux toolkit
import {createSlice,configureStore} from '@reduxjs/toolkit';
//

const initialState={counter:0,showCounter:true ,loggedIn:false};

//reduxtoolkit
 const counterSlice=  createSlice({
   name:'counter',
   initialState,
   reducers:{
      INCREAMENT(state) { 
         state.counter++;
      },
      INCREAMENTBYTWO(state,action) {
         state.counter=state.counter+action.payload;
      },
      DECREAMENT(state) {
         state.counter--;
      },
      toggle (state) {
         state.showCounter=!state.showCounter;
      },
      IsLoggedIn(state){
         state.loggedIn=true;
      },
      IsLoggedout(state){
         state.loggedIn=false;
      }

   }
})




// const counterReducer=(state=initialState,action)=>{
//     if(action.type==='INCREAMENT'){
//        return {
//         counter:state.counter+5,
//         showCounter:state.showCounter
//        }
//     }
//     if(action.type==='INCREAMENTBYTWO'){
//       return {
//        counter:state.counter+ action.amount,
//        showCounter:state.showCounter
//       }
//    }
//     if(action.type==='DECREAMENT'){
//         return {
//          counter:state.counter-5,
//          showCounter:state.showCounter
//         }
//      }
//      if(action.type==='toggle'){
//       return{
//          showCounter: !state.showCounter,
//          counter:state.counter
//       }
//      }
//      return state;

// }
 
// const store=createStore(counterReducer);

//redux toolkit
const store=configureStore({
    reducer:counterSlice.reducer

//     reducer: {
//       auth: authReducer,
//       counter: counterReducer
//   }
});
export const counterAction=counterSlice.actions;

export default store;