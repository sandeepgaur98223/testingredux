import './App.css';
import {incNum,decNum} from './action';
import { useSelector,useDispatch } from 'react-redux';



function App() {

  const myState=useSelector((state)=>state.changeNumber);
  const dispatch=useDispatch();
  return (
    <div className='center'>
      <button onClick={()=>dispatch(decNum())}>-</button>
      <input value={myState}></input>
      <button onClick={()=>dispatch(incNum())}>+</button>
 
    </div>
  );
}

export default App;
