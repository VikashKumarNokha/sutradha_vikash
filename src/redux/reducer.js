import  * as types from "./actionType"
const initialstate = {
      masterdata : [],
      isLoading : false,
      isError : false,
}

export const reducer = (state = initialstate, action) =>{
       const {type, payload} = action;
       switch(type){
           case types.GET_MASTER_DATA_REQUEST :
              return {...state, isLoading: true, isError : false};
           case types.GET_MASTER_DATA_SUCCESS :
             return {...state, isLoading : false, isError : false , masterdata : payload };
           case types.GET_MASTER_DATA_FAILURE :
             return {...state, isLoading : false, isError : true };
            default :
             return state;     
       }
}