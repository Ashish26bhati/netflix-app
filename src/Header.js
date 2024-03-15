import React from 'react'

export default function Header() {
  return (
    <>
          <div className='text-4xl text-red-800 bg-black p-2 fixed w-full mb-6 pl-14 pr-14 pt-4 pb-4'>
              <div className="relative  bg-black  w-full mb-6 pl-14 pr-14 ">
                  <p className="absolute left-0">
                      <a href="https://www.netflix.com/">
                          <svg width="3em" height="1em" viewBox="0 0 512 138"><path fill="#db202c" d="M340.657 0v100.203c12.36.575 24.687 1.27 36.98 2.09v21.245a1822.444 1822.444 0 0 0-58.542-2.959V0zM512 .012l-28.077 65.094l28.07 72.438l-.031.013a1789.409 1789.409 0 0 0-24.576-3.323l-15.763-40.656l-15.913 36.882a1815.88 1815.88 0 0 0-22.662-2.36l27.371-63.43L435.352.013h23.325l14.035 36.184L488.318.012zM245.093 119.526V.011h60.19v21.436h-38.628v27.78h29.227v21.245h-29.227v49.05zM164.58 21.448V.01h66.69v21.437h-22.565v98.66c-7.197.19-14.386.412-21.56.683V21.448zM90.868 126.966V.014h59.89v21.435h-38.331v29.036c8.806-.113 21.327-.24 29.117-.222V71.51c-9.751-.12-20.758.134-29.117.217v32.164a1848.195 1848.195 0 0 1 38.331-2.62v21.247a1815.638 1815.638 0 0 0-59.89 4.45M48.571 77.854L48.57.01h21.562v128.96c-7.882.81-15.75 1.673-23.603 2.584L21.56 59.824v74.802a1834.87 1834.87 0 0 0-21.561 2.936V.012H20.49zm346.854 46.965V.012h21.563V126.6c-7.179-.64-14.364-1.23-21.563-1.78" /></svg>
                      </a>
                  </p>
                  <p className="absolute right-0  mt-[-15px]" >
                    <span className=' text-white text-xs pl-4 pr-4'>UNLIMITED TV SHOWS & MOVIES</span>
                      <a href="https://www.netflix.com/login" className='border-red-600 border bg-red-600 text-white text-xs  pt-2 pb-2 pl-4 pr-4 hover:bg-red-700 hover:border-red-700 '>JOIN NOW</a>
                      <a href="https://www.netflix.com/login" className=' border border-white text-white text-xs  pt-2 pb-2 pl-4 pr-4 hover:bg-gray-700 ml-4'>SIGN IN</a>
                  </p>
              </div>
          </div>
          <div>
              <h1 className=' text-white text-5xl w-1/3 pt-40 pl-14 pr-14  font-extrabold  pb-20'>Award-Winning TV Shows</h1>
          </div>
          <h6 className=' text-white  pl-14 pr-14 '>Popular on Netflix</h6>

    </>
  )
}
