import React, {useState} from "react";
import {signIn} from "next-auth/react";

export default function RegisterForm() {

    const [loginSelected, setLoginSelected] = useState(false)


    const nameInputs = <div>
        <div className="mb-3 row">
            <label className="form-label" htmlFor="firstName">first name</label>
            <input className="form-control" type="text" id="firstName" autoComplete="first name" required/>
        </div>
        <div className="mb-3 row">
            <label className="form-label" htmlFor="lastName">last name</label>
            <input className="form-control" type="text" id="lastName" autoComplete="last name" required/>
        </div>
    </div>

    const handleLoginPressed = () => {
        setLoginSelected(!loginSelected);
    }

    const formSubmit = async event => {
        event.preventDefault();


        const email = event.target.email.value;
        const password = event.target.password.value;
        let data;
        if (!loginSelected) {
            const firstName = event.target.firstName.value;
            const lastName = event.target.lastName.value;
            if (!email || !email.includes('@') || !password || !firstName || !lastName) {
                alert('Invalid details');
            } else {
                const res = await fetch('/api/auth/signup', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        firstName: firstName,
                        lastName: lastName,
                        email: email,
                        password: password,
                    }),
                });
                data = await res.json();
            }
        } else {
            data = await signIn('credentials', {
                redirect: false,
                email: email,
                password: password,
            });
        }

        console.log(data);
    }

    return (
        <div className="formContainer card w-50 p-3 mx-auto">

            <form className="card-body" onSubmit={formSubmit}>
                <h2 className="card-title">{loginSelected ? "Login" : "Register"}</h2>
                {
                    !loginSelected && nameInputs
                }

                <div className="mb-3 row">
                    <label className="form-label" htmlFor="email">email</label>
                    <input className="form-control" type="text" id="email" autoComplete="email" required/>
                </div>
                <div className="mb-3 row">
                    <label className="form-label" htmlFor="password">password</label>
                    <input className="form-control" type="password" id="password" autoComplete="password" required/>
                </div>
                <div className="mb-3 row justify-content-lg-around">
                    <button className="btn btn-primary mb-3 col-4">Next</button>
                    <button type="button" className="btn btn-outline-dark mb-3 col-4"
                            onClick={handleLoginPressed}>Login
                    </button>
                </div>

            </form>
        </div>
    )
}