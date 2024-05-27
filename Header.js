import React from 'react'
import Input from './Input'

const Header = ({item,setItem,addItem,title}) => {
  return (
    <header className='flex flex-col items-center '>
      <div className='bg-purple-400 fixed top-1 with p-2 sm:container'>
        <p className='text-center text-white'>{title}</p>
      </div>
      <Input
        item={item}
        setItem={setItem}
        addItem={addItem}

        
        />
    </header>
  )
}

export default Header