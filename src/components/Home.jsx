import React from 'react'
import "./Home.css"
import {  FiChevronLeft,FiChevronRight,FiChevronsLeft,FiChevronsRight } from "react-icons/fi";
import { useState } from 'react';


export const Home = () => {
    const [master, setMaster] = useState("");

     console.log( "master",master);
  return (
    <div className='page_container'>

        {/*here checkbox   */}
       <div className='checkbox_container'>
        <label className="container">
        <input type="radio" name='radio' onChange={()=>setMaster("master")} />
        <span className="checkmark"></span>Copy
        </label>

       <label className="container">
        <input type="radio" name='radio' onChange={()=>setMaster("newElement")} />
        <span className="checkmark"></span>Move
       </label>
       </div>
         {/* Here master, icons and new Element boxes   */}

       <div className='main_box'>
         {/* Box1 here */}
           <div>
            <p className='innerbox_header1'>Master</p>
            <div className='innerbox_content'>
            <p>vikash kumar</p>
            <p>vikash kumar</p>
            <p>vikash kumar</p>
            <p>vikash kumar</p>
            <p>vikash kumar</p>
            <p>vikash kumar</p>
            <p>vikash kumar</p>
            <p>vikash kumar</p>
            <p>vikash kumar</p>
            <p>vikash kumar</p>
            <p>vikash kumar</p>
            <p>vikash kumar</p>
            <p>vikash kumar</p>
            <p>vikash kumar</p>
            <p>vikash kumar</p>
            <p>vikash kumar</p>
            </div>
           </div>
            {/* box2 here */}
           <div id='Icon_mainBox' >
             <FiChevronLeft className='icon_box' />
             <FiChevronRight className='icon_box'/>
             <FiChevronsLeft className='icon_box'/>
             <FiChevronsRight className='icon_box'/>
           </div>
            {/* Box3 here */}
           <div>
            <p className='innerbox_header2'>New Elements</p>
             <div className='innerbox_content' >
            <p>vikash kumar</p>
            <p>vikash kumar</p>
            <p>vikash kumar</p>
            <p>vikash kumar</p>
            <p>vikash kumar</p>
            <p>vikash kumar</p>
            <p>vikash kumar</p>
            <p>vikash kumar</p>
             </div>
           </div>
       </div>
    </div>
  )
}
