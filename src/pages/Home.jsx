import React from 'react'
import { AiFillDelete } from 'react-icons/ai'
import { MdOutlineEdit } from 'react-icons/md'

const Home = () => {
  return (
    <>
    <div className='mt-10'>
      <div className='w-[50vw] border-2 mx-auto'>
        <div className='flex justify-end gap-2 text-xl'>
          <AiFillDelete/>
          <MdOutlineEdit/>
        </div>

      </div>
    </div>
    </>
  )
}

export default Home