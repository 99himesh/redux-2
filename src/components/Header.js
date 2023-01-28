import classes from './Header.module.css';

import { useSelector,useDispatch}from 'react-redux';

import { counterAction } from '../store';
const Header = () => {
  const ifLoggedIn= useSelector(state=>state.loggedIn);

  const  dispatch=useDispatch();
  const logoutHandler=()=>{
      // dispatch({type:'INCREAMENT'});
      dispatch(counterAction.IsLoggedout())
      
   };

  
 
  return (
    <header className={classes.header}>
      <h1>Redux Auth</h1>
     { ifLoggedIn &&  <nav>
        <ul>
          <li>
            <a href='/'>My Products</a>
          </li>
          <li>
            <a href='/'>My Sales</a>
          </li>
          <li>
            <button onClick={logoutHandler}>Logout</button>
          </li>
        </ul>
      </nav>}
    </header>
  );
};

export default Header;
