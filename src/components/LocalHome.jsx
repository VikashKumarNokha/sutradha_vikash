import React from 'react'
import "./Home.css"
import {  FiChevronLeft,FiChevronRight,FiChevronsLeft,FiChevronsRight } from "react-icons/fi";
import { useState, useEffect } from 'react';

 import {MASTERData} from "../utility/masterData"

   
export const LocalHome = () => {
    const [master, setMaster] = useState("");
    const [editId, setEditId] = useState(0);
    const [Data, setData] = useState([]);

     useEffect(()=>{
         if(Data.length == 0){
            setData(MASTERData);
         }
     },[]);
     
    const editHandler = (Id,funType) =>{
        console.log(Id,funType);
        if(funType == "copy1" && (master == "copy" || master == "move") && Id){        
            var data =  Data.map((e)=>{
                 if(e.id == Id){
                  return {...e, "master" : false, "newElement" : true };
                 }else{
                    return e;
                 }
              })
             setData(data); 
        }else if(funType == "copyAll" && (master == "copy" || master == "move")  ){
            var data =  Data.map((e)=>{ 
                 return {...e, "master" : false, "newElement" : true }; 
             })
            setData(data);    
            

        }else if(funType == "move1" && master == "move" && Id){
            var data =  Data.map((e)=>{
                if(e.id == Id){
                 return {...e, "master" : true, "newElement" : false };
                }else{
                   return e;
                }
             })
            setData(data);
              
        }else if(funType == "moveAll" && master == "move"){
            var data =  Data.map((e)=>{ 
                return {...e, "master" : true, "newElement" : false }; 
            })
           setData(data); 
        }
      

  };
    
     console.log("data", MASTERData);
     console.log( "master",master);
     console.log("ddd",Data);
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
                Data.length > 0 && Data.map((e)=>(
                  <p key={e.id} onClick={()=>setEditId(e.id)}  style={{background : `${e.master == false ? "red" : e.id == editId ? "blue" :""}`, cursor : "pointer"}} >{`${e.master == true ? e.name : "Data copyed/moved"}`} </p> 
                ))
              }
            
            </div>
           </div>
            {/* here all button that transfer data from master to NewElement and NewElement to master */}
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
              Data.length  > 0 && Data.filter((a)=>a.newElement == true).map((a)=>(
                <p key={a.id} onClick={()=>setEditId(a.id)} style={{background : `${a.id ==editId ? "blue" : "" }`, cursor : "pointer" }} >{a.name}</p>
              ))
             }  
                    
             </div>
           </div>
       </div>
    </div>
  )
}
