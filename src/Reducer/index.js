const initialState={
    name:"Aris"
}


const Reducer=(state,action)=>{
    if(action.type==="SET_NAME"){
        return({...state,name:action.payLoad})
    }
    return state
}


export default Reducer