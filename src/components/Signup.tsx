import React from 'react'
import styles from "./Signup.module.css"
import { useForm } from "react-hook-form"


export default function Signup() {
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
        <>  <div className={`${styles.circle} ${styles.cl1}`}></div >
            <div className={`${styles.circle} ${styles.cl2}`}></div>
            <div className={`${styles.circle} ${styles.cl3}`}></div>
            <div className={`${styles.circle} ${styles.cl4}`}></div>
            <div className={`${styles.circle} ${styles.cl5}`}></div>
            <div className={`${styles.circle} ${styles.cl6}`}></div>
            <div className={`${styles.circle} ${styles.cl7}`}></div>
            <div className={styles.main}>
                <h2>Sign Up!</h2>
                <form className={styles.container} onSubmit={handleSubmit(onSubmit)} noValidate>

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
                        maxLength: {
                            value: 8,
                            message: "Maximum length is 8 characters!"
                        }
                    })} />
                    <span>{errors.username?.message}</span>

                    <input type="email" id="email" placeholder='email' {...register("email", {
                        required: {
                            value: true,
                            message: "Please enter your email address!"
                        },
                        pattern: {
                            value: /^[a-zA-Z0-9\.-_]+@[a-zA-Z]+\.[a-zA-Z]{2,4}$/i,
                            message: "Please enter a valid email address!"
                        }
                    })} />
                    <span>{errors.email?.message}</span>

                    <input type="password" id="password" placeholder='password' {...register("password", {
                        required: {
                            value: true,
                            message: "Please enter a password!"
                        },
                        minLength: {
                            value: 4,
                            message: "Minimum length of the password should be 4 characters!"
                        }
                    })} />
                    <span>{errors.password?.message}</span>

                    <button type='submit'>Submit</button>
                </form>
            </div >
        </>
    )
}
