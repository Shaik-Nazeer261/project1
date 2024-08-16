'use client'
import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import firebase from '../../firebase.js'

const Page = ({ params }) => {
  const router = useRouter();
  const [data, setData] = useState({
    firstname: "",
    lastname: "",
    email: "",
  });

  const { firstname, lastname, email } = data;

  useEffect(() => {
    setData({
      ...data,
      firstname: params.user[0],
      lastname: params.user[1],
      email: decodeURIComponent(params.user[2]),
    });
  }, []);

  const changeHandler = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    await firebase.child(`register/${params.user[3]}`).set(
      data,
      err => {
        if (err) {
          console.log(err);
        } else {
          alert('Data updated');
        }
      }
    );
    router.back();
  };

  return (
    <div className="flex justify-center items-center  bg-gray-100">
      <div className="w-full max-w-md p-8  bg-white rounded-lg shadow-md">
        <h2 className="text-center text-2xl font-bold">Edit Form</h2>
        <form onSubmit={submitHandler} autoComplete="off">
          <div >
            <div>
              <label className="block text-sm font-medium text-gray-700">First Name:</label>
              <input
                type="text"
                value={firstname}
                onChange={changeHandler}
                placeholder="First Name"
                name="firstname"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Last Name:</label>
              <input
                type="text"
                value={lastname}
                onChange={changeHandler}
                placeholder="Last Name"
                name="lastname"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Email:</label>
              <input
                type="email"
                value={email}
                onChange={changeHandler}
                placeholder="Enter Email"
                name="email"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>

            <div className="pt-4">
              <input
                type="submit"
                value="Save"
                className="w-full py-2 px-4 bg-green-500 text-white rounded-md shadow hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
              />
            </div>
          </div>
        </form>
      </div>

      
    </div>
  );
}

export default Page;
