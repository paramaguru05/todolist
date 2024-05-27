import React from 'react'

const Footer = ({length}) => {
  return (
  <footer className='bg-purple-400 fixed bottom-1 p-2 with sm:container' >
    <div>
      <p className='text-white text-center text-2xl'>{length>1?"ITEMS":"ITEM"} {length}</p>
    </div>

  </footer>
  )
}

export default Footer