import React from "react";

export default function Login() {

    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        const jsonData = {
            email: data.get('email'),
            password: data.get('password'),
        }

        fetch('http://localhost:3333/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(jsonData),
        })
        .then(response => response.json())
        .then(data => {
            if(data.status === 'ok') {
                alert('login success')
                localStorage.setItem("token", data.token)
                window.location = '/'
            } else {
                alert('login fail')
            }
        })
        .catch((error) => {
            console.error('Error:', error);
        });
      };

    return(
        <div className="container flex h-screen">
            <div className="Login-btn-group w-1/2 p-5 flex">
                <div className="form-container w-full m-auto">
                    <div className="Logo flex justify-center">
                        <h1 className="font-bold text-3xl">
                            Powssuite
                        </h1>

                    </div>
                    <div className="Sign-in flex justify-center">
                        <h1 className="font-bold text-xl">
                            Sing in
                        </h1>

                    </div>

                    <form onSubmit={handleSubmit} className="Login-form m-auto">
                        <div>
                            <label>Email address</label>
                            <div className="Input-email mt-2">
                                <input id='email' name="email" placeholder="Email Address" className="bg-gray-100 rounded-md h-10 w-full border-2 border-solid border-black-100">
                                </input>
                            </div>
                        </div>

                        <div className="mt-5">
                            <label>Password</label>
                            <div className="Input-password mt-2">
                                <input id='password' name="password" placeholder="Password" type="password" className="bg-gray-100 rounded-md h-10 w-full border-2 border-solid border-black-100">
                                </input>
                            </div>
                        </div>

                        <div className="Rememberme flex mt-4">
                            <input type="checkbox" className="w-4">
                            
                            </input>
                            <p href="#" className="ml-3">
                                Remember me
                            </p>
                        </div>

                        <button type="submit" className="bg-green-400 flex w-full h-10 items-center rounded-xl px-4 mt-5 hover:bg-green-800">
                            <h4 className="mx-auto text-white">Sign in</h4>
                        </button>

                        <div className="justify-between flex mt-3">
                            <a href="#">
                                <p className="text-xs underline text-blue-400">Forgot password ?</p>
                            </a>
                            <a href="/register">
                                <p className="text-xs underline text-blue-400">Don't have an account? Signup</p>
                            </a>
                        </div>
                    </form>

                </div>
                
            </div>

            <div className="Some-picture w-1/2 p-5 bg-[url('https://littlevisuals.co/images/i.o.jpg')] bg-cover">

            </div>
        </div>
        
    )
}