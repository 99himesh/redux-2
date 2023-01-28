import { useSelector } from 'react-redux';
import Counter from './components/Counter';
import Header from './components/Header';
import Loggedin from './components/loggedin';


function App() {
  const shows= useSelector(state=>state.loggedIn);

  return (
    <div>
      <Header/>
     {!shows && <Loggedin/>}
       <Counter />
    
    </div>
  
  );
}

export default App;
