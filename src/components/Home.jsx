import React from 'react'
import "./Home.css"
import {  FiChevronLeft,FiChevronRight,FiChevronsLeft,FiChevronsRight } from "react-icons/fi";
import { useState, useEffect } from 'react';
import { getmasterData, editmasterData } from '../redux/action';
import { useSelector, useDispatch } from 'react-redux';


export const Home = () => {
    const [master, setMaster] = useState("");
    const [editId, setEditId] = useState(0);
    const masterData = useSelector((state)=>state.reducer.masterdata);
    const dispatch = useDispatch();

    useEffect(()=>{
      if(masterData.length === 0){
         dispatch(getmasterData());
      }    
    },[dispatch]);

    const editHandler = (Id,funType) =>{
        console.log(Id,funType);
        if(funType == "copy1" && (master == "copy" || master == "move") && Id){
          const payload = {
            "master":  false,
            "newElement" : true,   
           }
             console.log("iddd",Id);
            dispatch(editmasterData(Id,payload)).then(()=>{
                  dispatch(getmasterData());
            })
        }else if(funType == "copyAll" && (master == "copy" || master == "move")  ){
              for(var i=1; i<= masterData.length; i++){
                const payload = {
                  "master":  false,
                  "newElement" : true,   
                 }
                   console.log("iddd",i);
                  dispatch(editmasterData(i,payload)).then(()=>{
                        dispatch(getmasterData());
                  })
              }
        }else if(funType == "move1" && master == "move" && Id){
          const payload = {
            "master":  true,
            "newElement" : false,   
           }
             console.log("iddd",Id);
            dispatch(editmasterData(Id,payload)).then(()=>{
                  dispatch(getmasterData());
            })
        }else if(funType == "moveAll" && master == "move"){
          for(var i=1; i<= masterData.length; i++){
            const payload = {
              "master":  true,
              "newElement" : false,   
             }
               console.log("iddd",i);
              dispatch(editmasterData(i,payload)).then(()=>{
                    dispatch(getmasterData());
              })
          }
        }
      

  };


     console.log("data", masterData);
     console.log( "master",master);
  return (
    <div className='page_container'>

        {/*here checkbox   */}
       <div className='checkbox_container'>
        <label className="container">
        <input type="radio" name='radio' onChange={()=>setMaster("copy")} />
        <span className="checkmark"></span>Copy
        </label>

       <label className="container">
        <input type="radio" name='radio' onChange={()=>setMaster("move")} />
        <span className="checkmark"></span>Move
       </label>
       </div>
         {/* Here master, icons and new Element boxes   */}

       <div className='main_box'>
         {/* Box1 here */}
           <div>
            <p className='innerbox_header1'>Master</p>
            <div className='innerbox_content'>
              {
                masterData.length > 0 && masterData.map((e)=>(
                  <p key={e.id} onClick={()=>setEditId(e.id)}  style={{background : `${e.master == false ? "red" : e.id == editId ? "blue" :""}`, cursor : "pointer"}} >{`${e.master == true ? e.name : "Data copyed/moved"}`} </p> 
                ))
              }
            
            </div>
           </div>
            {/* box2 here */}
           <div id='Icon_mainBox' >
             <FiChevronRight onClick={()=>editHandler(editId,"copy1")}  className='icon_box'/>
             <FiChevronLeft onClick={()=>editHandler(editId,"move1")}  className='icon_box' />
             <FiChevronsRight onClick={()=>editHandler(0,"copyAll")}   className='icon_box'/>
             <FiChevronsLeft onClick={()=>editHandler(0,"moveAll")}  className='icon_box'/>  
           </div>
            {/* Box3 here */}
           <div>
            <p className='innerbox_header2'>New Elements</p>
             <div className='innerbox_content' >
             {
              masterData.length  > 0 && masterData.filter((a)=>a.newElement == true).map((a)=>(
                <p key={a.id} onClick={()=>setEditId(a.id)} style={{background : `${a.id ==editId ? "blue" : "" }`, cursor : "pointer" }}   >{a.name}</p>
              ))
             }  
                    
             </div>
           </div>
       </div>
    </div>
  )
}
