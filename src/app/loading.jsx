import Image from 'next/image';
import React from 'react'

const Loading = () => {
  return (
    <div className='flex justify-center'>
        <Image src="spinner1.svg" alt="" />
    </div>
  )
}

export default Loading;