import React from 'react'
import styles from "./SignLogin.module.css"
import { useForm } from "react-hook-form"
import { Link } from "react-router-dom"



export default function Login() {

    //input type
    type inputs = {
        identity: string;
        password: string;
    }

    const form = useForm<inputs>();
    const { register, formState, handleSubmit } = form;
    const { errors } = formState;

    const submitHandler = (data: inputs) => {
        console.log("data submitted", data);
    }
    return (
        <>
            {/* body background design start */}
            <div className={`${styles.circle} ${styles.cl1}`}></div >
            <div className={`${styles.circle} ${styles.cl2}`}></div>
            <div className={`${styles.circle} ${styles.cl3}`}></div>
            <div className={`${styles.circle} ${styles.cl4}`}></div>
            <div className={`${styles.circle} ${styles.cl5}`}></div>
            <div className={`${styles.circle} ${styles.cl6}`}></div>
            <div className={`${styles.circle} ${styles.cl7}`}></div>
            {/* body background design end */}

            {/* form container start*/}
            <div className={styles.container}>
                <h2>Login!</h2>

                {/* form start */}
                <form onSubmit={handleSubmit(submitHandler)} noValidate>

                    {/* username input */}
                    <input type="text" placeholder='username or email' id='identity' {...register("identity", {
                        required: {
                            value: true,
                            message: "Please enter a username!"
                        },
                    })} aria-invalid={errors.identity ? true : false} />

                    {/* identity input validation message */}
                    <span>{errors.identity?.message}</span>


                    {/* password input */}
                    <input type="password" id="password" placeholder='password' {...register("password", {
                        required: {
                            value: true,
                            message: "Please enter a password!"
                        }
                    })} aria-invalid={errors.password ? true : false} />

                    {/* password input validation message */}
                    <span>{errors.password?.message}</span>

                    {/* submit button */}
                    <button type='submit' role="submit button">Submit</button>

                    {/* navigate to sign up page */}
                    <p>Don't have an account? <Link to="/">Create new account</Link></p>
                </form>
                {/* form end */}
            </div >
            {/* form container end */}
        </>
    )
}
