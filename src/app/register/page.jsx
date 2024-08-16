'use client'
import React from 'react'
import { useState } from 'react';
import firebase from '../firebase';
import { useRouter } from 'next/navigation';
const page = () => {
    const route=useRouter();
    const [data,setData]=useState({
        firstname:"",
        lastname:"",
        email:"",
    });

    const {firstname,lastname,email}={...data};
    const changehandler=e=>{
        setData({...data,[e.target.name]:[e.target.value]});
    }

    const submithandler=async(e)=>{
        e.preventDefault();
        await firebase.child('register').push(
            data,
            err=>{
                if(err){
                    console.log(error)
                }
                else{
                    alert("data added");
                }
            }
        );
        setData({
            firstname:"",
            lastname:"",
            email:"",
        })
        route.push('/');

    }

  return (
    <div className="text-center mt-12 p-5">
            <h2 className="text-4xl text-green-500 mb-5">Register Form</h2>
            <form 
                onSubmit={submithandler}
                autoComplete="off" 
                className="max-w-lg mx-auto p-5 border border-gray-300 rounded-lg"
            >
                <div className="mb-4">
                    <label className="block mb-2 font-bold">First Name:</label>
                    <input
                        type="text"
                        placeholder="First Name"
                        name="firstname"
                        value={firstname}
                        onChange={changehandler}
                        className="w-full p-2  border rounded-md border-gray-300"
                        required
                    />
                </div>

                <div className="mb-4">
                    <label className="block mb-2 font-bold">Last Name:</label>
                    <input
                        type="text"
                        placeholder="Last Name"
                        name="lastname"
                        value={lastname}
                        onChange={changehandler}
                        className="w-full p-2 border rounded-md border-gray-300"
                        required
                    />
                </div>

                <div className="mb-4">
                    <label className="block mb-2 font-bold">Email:</label>
                    <input
                        type="email"
                        placeholder="Enter Email"
                        name="email"
                        value={email}
                        onChange={changehandler}
                        className="w-full p-2  border rounded-md border-gray-300"
                        required
                    />
                </div>

                <div>
                    <input
                        type="submit"
                        value="Submit"
                        className="px-4 py-2 text-white bg-green-500 rounded-lg cursor-pointer hover:bg-blue-600"
                    />
                </div>
            </form>
        </div>
  )
}

export default page