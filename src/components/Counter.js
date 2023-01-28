import classes from './Counter.module.css';
import { useSelector,useDispatch}from 'react-redux';
//redux toolkit
import { counterAction } from '../store';

const Counter = () => {
    const counter= useSelector(state=>state.counter);
    const show= useSelector(state=>state.showCounter);

    const  dispatch=useDispatch();

   const increamentHandler=()=>{
      // dispatch({type:'INCREAMENT'});
      dispatch(counterAction.INCREAMENT())
   };
   const increamentbytwoHandler=()=>{
    // dispatch({type:'INCREAMENTBYTWO',amount:2});
    dispatch(counterAction.INCREAMENTBYTWO(2))

 };
   const decreamentHandler=()=>{
    // dispatch({type:'DECREAMENT'});
    dispatch(counterAction.DECREAMENT())

 };

  const toggleCounterHandler = () => {
    // dispatch({type:'toggle'})
    dispatch(counterAction.toggle())

  };

  
  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show && <div className={classes.value}>{counter}</div>}
     <div>
      <button onClick={increamentHandler}>IncrementBy5</button>
      <button onClick={increamentbytwoHandler}>IncrementBy2</button>
      <button  onClick={decreamentHandler}>DecrementBy5</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
