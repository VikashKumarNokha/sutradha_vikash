import * as types from "./actionType"
import axios from "axios"

export const getmasterData = () => (dispatch) =>{
        dispatch({type : types.GET_MASTER_DATA_REQUEST});
       return axios.get("https://sutradhar.herokuapp.com/master").then((res)=>{
           console.log( "getdata",res.data)
           dispatch({type : types.GET_MASTER_DATA_SUCCESS, payload : res.data});
       }).catch((err)=>{
           console.log(err);
           dispatch({type :  types.GET_MASTER_DATA_FAILURE});
       });  
}


export const editmasterData = (Id, payload) => (dispatch) =>{
    dispatch({type : types.EDIT_MASTER_DATA_REQUEST});
   return axios.patch(`https://sutradhar.herokuapp.com/master/${Id}`, payload).then((res)=>{
       console.log( "getdata",res.data)
       dispatch({type : types.EDIT_MASTER_DATA_SUCCESS, });
   }).catch((err)=>{
       console.log(err);
       dispatch({type :  types.EDIT_MASTER_DATA_FAILURE});
   });  
}