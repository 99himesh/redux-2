import { useSelector,useDispatch}from 'react-redux';
import { counterAction } from '../store';


const Loggedin=()=>{

    const  dispatch=useDispatch();
    const loggedinHandler=()=>{
        // dispatch({type:'INCREAMENT'});
        dispatch(counterAction.IsLoggedIn())
        
     }
    return (
     <div>
        <div  style={{width:'30%',borderRadius:'20px', padding:'10px 0', margin:'100px auto',textAlign:'center' ,background:"gray"}}>
            <div >
                <label   style={{color:'white',padding:'10px 0', color:'black' ,display:'block'}}>EMAIL</label>
                <input  style={{width:'80%',padding:'5px'}}  type="text"></input>
            </div>
            <div>
                <label style={{color:'white',color:'black',padding:'10px 0'  ,display:'block'}}>PASSWORD</label>
                <input style={{width:'80%',padding:'5px'}}    type="text"></input>
            </div>
            <div style={{padding:'10px 0'}}>
              <button onClick={loggedinHandler}>log in</button>
            </div>
        </div>
       </div>

    );
}
export default Loggedin;