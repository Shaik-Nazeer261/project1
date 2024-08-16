'use client';
import React, { useEffect, useState } from 'react'
import firebase from '../firebase';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

const page = () => {

    const router=useRouter();
    const [getdata,setGetdata]=useState({});

    useEffect(()=>{
        firebase.child('register').on('value',(details)=>{
            setGetdata(details.val());
        });
    },[]);

    const delhandler=e=>{
        firebase.child(`register/${e}`).remove((err)=>
        {
            if(err)
            {
                console.log(err);
            }
            else{
                alert('data deleted');
            }
        })
    }

  return (
    <div className='p-5'>
        {getdata&&
        Object.keys(getdata).map((key)=>{
            return(
            <div
            key={key}
            className="border border-gray-300 p-4 mb-4 rounded-md bg-gray-100 ">
            <p className="mb-2 font-bold">
              FirstName: <span className="font-normal">{getdata[key].firstname}</span>
            </p>
            <p className="mb-2 font-bold">
              LastName: <span className="font-normal">{getdata[key].lastname}</span>
            </p>
            <p className="mb-2 font-bold">
              Email: <span className="font-normal">{getdata[key].email}</span>
            </p>

         <Link href={`/update/${getdata[key].firstname}/${getdata[key].lastname}/${encodeURIComponent(getdata[key].email)}/${key}`}><button
              className="px-4 py-2 text-white bg-green-600 rounded-md hover:bg-green-700 mr-2">
              Update
            </button></Link> 

            <button onClick={()=>delhandler(key)}
              className="px-4 py-2 text-white bg-red-600 rounded-md hover:bg-red-700"
            >
              Delete
            </button>
          </div>
            )})}

<div className="text-center mt-5">
        <button
          onClick={() => router.back()}
          className="px-5 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700 transition duration-300"
        >
          Go Back
        </button>
      </div>
    </div>
  )
}

export default page