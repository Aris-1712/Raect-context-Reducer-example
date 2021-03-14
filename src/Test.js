import React, { useContext } from 'react'
import {context} from './context'
import Actions from './Reducer/Actions';
function Test(props) {
  const {state,dispatch}=useContext(context)
  console.log(state)
  return (
   <div>
     {state.name}
     <button onClick={()=>{dispatch(Actions.changeName("ABCDSS"))}}>Change</button>
   </div>
  );
}

export default Test;
