import React from 'react'
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { END_POINT } from './../utils/constant';


export default function PagePdf() {
  const location = useLocation()
  useEffect(()=>{
    console.log(location.pathname)
  },[])

  return (
    <div className="justify-center items-center flex bg-slate-600 h-[100vh] w-[100vw] ">
      <div className='w-[50%] h-[100vh]  '>
        <img
            className="object-contain w-[100%] h-[100%]"
            src={`${END_POINT}/public${location.pathname}`}
           /*  src={`${END_POINT}/public/participant/boy.png`}  */
            alt="#"
            type="application/pdf"
          />

      </div>
    </div>
  )
}
