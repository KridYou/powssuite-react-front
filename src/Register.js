import React from "react";
import { Link } from "react-router-dom";


export default function SignUp() {

    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        const jsonData = {
            password: data.get('password'),
            email: data.get('email'),
            firstname: data.get('firstname'),
            lastname: data.get('lastname'),
        }

        fetch('http://localhost:3333/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(jsonData),
            })
        .then(response => response.json())
        .then(data => {
            if(data.status === 'ok') {
                localStorage.setItem("token", data.token)
                alert('register success')
            } else {
                alert('register fail')
            }
        })
        .catch((error) => {
            console.error('Error:', error);
        });
      };

    return(
        <div className="Container flex h-screen w-full">
            <div className="Form-container m-auto w-1/2">
                <div className="Form-header flex justify-center">
                    <h1 className="font-bold text-xl">Powssuite</h1>
                </div>
                <div className="Form-header flex justify-center">
                    <h3>Register</h3>
                </div>

                <form onSubmit={handleSubmit}>
                    <div className="Name-input mt-4 flex w-full justify-item-stretch">
                        <div className="w-1/2">
                            <label>First Name</label>
                            <div>
                                <input id='email' name="firstname" className="h-10 rounded-md bg-gray-100 border-2 border-solid border-black-100 w-full">
                                </input>
                            </div>
                        </div>

                        <div className="w-1/2 ml-4">
                            <label>Last Name</label>
                            <div>
                                <input id='password' name="lastname" className="h-10 rounded-md bg-gray-100 border-2 border-solid border-black-100 w-full">
                                </input>
                            </div>
                        </div>
                    </div>

                    <div className="mt-4">
                        <label>Email</label>
                        <div>
                            <input id='email' name="email" className="w-full h-10 rounded-md bg-gray-100 border-2 border-solid border-black-100">
                            </input>
                        </div>
                    </div>

                    <div className="mt-4">
                        <label>Password</label>
                        <div>
                            <input id='password' name="password" type="password" className="w-full h-10 rounded-md bg-gray-100 border-2 border-solid border-black-100">
                            </input>
                        </div>
                    </div>
                    <button type="submit" className="mt-4 w-full h-10 bg-blue-400 rounded-md px-4 hover:bg-blue-500">
                        <h3 className="text-white">
                            Register
                        </h3>
                    </button>

                    <div className="flex justify-end mt-2">
                        <a href="/login">
                            <p className="text-sm underline text-blue-500 hover:text-blue-800">Already have an account? Sign in</p>
                        </a>
                    </div>
                </form>
            </div>
        </div>
        
    )
}