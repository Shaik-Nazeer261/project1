import Link from "next/link"

const Welcome = () => {
  return (
<div className="text-center mt-12 p-5 bg-gray-100 ">
      <h1 className="text-3xl md:text-5xl text-blue-500">
        Welcome to Our Website
      </h1>
      <p className="text-lg md:text-2xl text-gray-600 mb-8">
        Join us by registering your account
      </p>
      <div className="flex justify-center gap-5">
        <Link href='/register'>
         <button  className="px-5 py-2 text-white text-lg bg-green-500 rounded-lg hover:bg-blue-600 "
        >
          Register
        </button></Link>
        <Link href='/members'>
        <button
          className="px-5 py-2 text-white text-lg bg-green-500 rounded-lg hover:bg-blue-600 "
        >
          View Members
        </button></Link>
      </div>
    </div>  )
}

export default Welcome