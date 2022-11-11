import * as types from "./actionType"
import axios from "axios"

export const getmasterData = () => (dispatch) =>{
        dispatch({type : types.GET_MASTER_DATA_REQUEST});
       return axios.get(" http://localhost:8080/master").then((res)=>{
           console.log( "getdata",res.data)
           dispatch({type : types.GET_MASTER_DATA_SUCCESS, payload : res.data});
       }).catch((err)=>{
           console.log(err);
           dispatch({type :  types.GET_MASTER_DATA_FAILURE});
       });  
}

export const deletemasterData = (Id) => (dispatch) =>{
    dispatch({type : types.DELETE_MASTER_DATA_REQUEST});
   return axios.delete(` http://localhost:8080/master/${Id}`).then((res)=>{
       console.log( "getdata",res.data)
       dispatch({type : types.DELETE_MASTER_DATA_SUCCESS, });
   }).catch((err)=>{
       console.log(err);
       dispatch({type :  types.DELETE_MASTER_DATA_FAILURE});
   });  
}

export const postmasterData = (payload) => (dispatch) =>{
    dispatch({type : types.POST_MASTER_DATA_REQUEST});
   return axios.post(` http://localhost:8080/master`, payload).then((res)=>{
       console.log( "getdata",res.data)
       dispatch({type : types.POST_MASTER_DATA_SUCCESS, });
   }).catch((err)=>{
       console.log(err);
       dispatch({type :  types.POST_MASTER_DATA_FAILURE});
   });  
}

export const editmasterData = (Id, payload) => (dispatch) =>{
    dispatch({type : types.EDIT_MASTER_DATA_REQUEST});
   return axios.patch(` http://localhost:8080/master/${Id}`, payload).then((res)=>{
       console.log( "getdata",res.data)
       dispatch({type : types.EDIT_MASTER_DATA_SUCCESS, });
   }).catch((err)=>{
       console.log(err);
       dispatch({type :  types.EDIT_MASTER_DATA_FAILURE});
   });  
}