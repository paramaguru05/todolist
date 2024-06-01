import React from 'react'
const Content = ({handleDelete,listItems}) => {
  return (
    <main className=' mt-6'>
      {listItems.length?<ul className='content-width mx-auto'>
        {listItems.map((values,index)=>{
          return <li key={index} className='bg-purple-200 flex justify-between p-2 mt-3'>
          <input type="checkbox" className='w-10 bg-slate-100 ' />
          <p>{values.item}</p>
          <button className='' onClick={()=>handleDelete(index)}>Delete</button>
        </li>
        })}
      </ul>:<p className='text-3xl italic text-center nmtop sm:mtop'>Your's list is empty</p>}
    </main>
  )
}

export default Content