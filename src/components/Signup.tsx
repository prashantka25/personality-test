import React from 'react'
// import "./Signup.module.css"
import styles from "./Signup.module.css"

export default function Signup() {
    return (
        <>  <div className={`${styles.circle} ${styles.cl1}`}></div >
            <div className={`${styles.circle} ${styles.cl2}`}></div>
            <div className={`${styles.circle} ${styles.cl3}`}></div>
            <div className={`${styles.circle} ${styles.cl4}`}></div>
            <div className={`${styles.circle} ${styles.cl5}`}></div>
            <div className={`${styles.circle} ${styles.cl6}`}></div>
            <div className={`${styles.circle} ${styles.cl7}`}></div>
            <div className={styles.main}>
                <h2>Sign Up!</h2>
                <form action="" className={styles.container}>

                    <input type="text" placeholder='username' id='username' />

                    <input type="email" name="" id="email" placeholder='email' />

                    <input type="password" name="" id="password" placeholder='password' />
                    <button type='submit'>Submit</button>
                </form>
            </div>
        </>
    )
}
