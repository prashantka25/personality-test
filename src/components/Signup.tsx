import React from 'react'
import styles from "./SignLogin.module.css"
import { useForm } from "react-hook-form"
import { Link } from "react-router-dom"


export default function Signup() {

    //input type
    type inputs = {
        username: string;
        email: string;
        password: string;
    }

    const form = useForm<inputs>();
    const { register, formState, handleSubmit } = form;
    const { errors } = formState;

    const onSubmit = (data: inputs) => {
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
                <h2>Sign Up!</h2>

                {/* form start */}
                <form onSubmit={handleSubmit(onSubmit)} noValidate>

                    {/* username input */}
                    <input type="text" placeholder='username' id='username' {...register("username", {
                        required: {
                            value: true,
                            message: "Please enter a username!"
                        },
                        pattern: {
                            value: /^[a-zA-Z]/i,
                            message: "Username must start with a letter!"
                        },
                        validate: (fieldValue) => {
                            return (!fieldValue.match(/[!@#\\$%^&\*()_\+{}",|:><\?\.;'=\]\[\]]+/) || "Username should contain letters and digits only!")
                        },
                        minLength: {
                            value: 4,
                            message: "Minimum username length is 8 characters!"
                        },
                        maxLength: {
                            value: 8,
                            message: "Maximum username length is 8 characters!"
                        }

                    })} aria-invalid={errors.username ? true : false} />

                    {/* username input validation message */}
                    <span>{errors.username?.message}</span>

                    {/* email input */}
                    <input type="email" id="email" placeholder='email' {...register("email", {
                        required: {
                            value: true,
                            message: "Please enter your email address!"
                        },
                        pattern: {
                            value: /^[a-zA-Z0-9\.-_]+@[a-zA-Z]+\.[a-zA-Z]{2,4}$/i,
                            message: "Please enter a valid email address!"
                        }
                    })} aria-invalid={errors.email ? true : false} />

                    {/* email input validation message */}
                    <span>{errors.email?.message}</span>

                    {/* password input */}
                    <input type="password" id="password" placeholder='password' {...register("password", {
                        required: {
                            value: true,
                            message: "Please enter a password!"
                        },
                        minLength: {
                            value: 4,
                            message: "Minimum length of the password should be 4 characters!"
                        }
                    })} aria-invalid={errors.password ? true : false} />

                    {/* password input validation message */}
                    <span>{errors.password?.message}</span>

                    {/* submit button */}
                    <button type='submit' role="submit button">Submit</button>

                    {/* navigate to login page */}
                    <p>Already have an account? <Link to="login">login</Link></p>
                </form>
                {/* form end */}
            </div >
            {/* form container end */}
        </>
    )
}
