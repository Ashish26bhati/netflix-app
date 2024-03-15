import React from 'react'

export default function Card(props) {

  return (
    <>
    <div className="max-w-sm  text-white  text-center mb-5">
    <a href={props.link} target="_blank" rel="noreferrer">
        <img className=" w-full" src={props.imgsrc} alt="" />
        <div>
            {/* <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{props.title}</h5> */}
            <p className="mb-3 font-normal text-white dark:text-gray-40 pt-2 text">{props.sname}</p>
        </div>
        </a>
    </div>

    </>
  )
}
