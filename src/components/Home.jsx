import React from 'react'
import { Link } from 'react-router-dom';
 import styles from "./Home.module.css"; 

export const Home = () => {
      
  return (
     <div className={styles.container}>
       
       //<h1 className={styles.heading}> WELCOME TO SUTRADHAR</h1>
      
    <div className={styles.box} >
           <div className={styles.leftbox} >
              <Link id={styles.link} to ="/method1" >Methode 1</Link>  
          </div>
          <div className={styles.rightbox} >
             <Link id={styles.link}  to ="/method2">Methode 2</Link>
          </div>
    </div>
    </div>
  )
}
