import React, { useEffect, useReducer } from 'react'
import { createContext } from 'react'


export const Storecontext = createContext()
function Store({children}) {

  const initialValue ={
    loginDatas:JSON.parse(localStorage.getItem('jebindata')) || null
  }



    function display(state,action){
      if(action.type == "success"){
        return {loginDatas:action.payload}
      }else if(action.type == "remove"){
        return {loginDatas:null}
      }
    }

    const [state,dispatch] = useReducer(display,initialValue)

  console.log("state value in store page",state);

  useEffect(()=>{
    localStorage.setItem('jebindata',JSON.stringify(state.loginDatas))
  },[state])
  

  return (
    <Storecontext.Provider value={{dispatch,info:state.loginDatas}} >
      {children}
    </Storecontext.Provider>
  )
}

export default Store
