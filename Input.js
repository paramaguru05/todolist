import React from 'react'
import { FaSearchLocation } from "react-icons/fa";
const Input = ({item,setItem,addItem}) => {
  return (
    <>
    <form onSubmit={(e)=>e.preventDefault()} className='rounded-md bg-purple-400  w-3/4 mtop'>
      <label htmlFor="cityName" className='absolute -left-full'>CityName</label>
      <input type="text" id='cityName' placeholder='Search city'
      value={item}
      onChange={(e)=>setItem(e.target.value)}
      className='content-width cursor-pointer pl-5 py-2 bg-transparent outline-none placeholder:text-white' />
      <button className='' onClick={addItem} ><p className='text-white'><FaSearchLocation/></p></button>
    </form>
    </>
  )
}

export default Input