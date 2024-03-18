'use client'

import React from 'react'
import { useEffect } from 'react'

const Error = ({error , reset}) => {
    useEffect(() => {
        console.log(error)
    },[error])
  return (
    <div>
        <h1>Something went Wrong</h1>
        <button onClick={() => reset()}>Try Again</button>
    </div>
  )
}

export default Error