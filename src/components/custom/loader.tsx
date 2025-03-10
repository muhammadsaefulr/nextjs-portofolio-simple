import Image from 'next/image'
import React from 'react'

const LoaderAnimate = () => {
  return (
    <div className='min-h-screen flex justify-center items-center'>
        <div className="flex flex-col gap-3">
            <Image className='mx-auto' width={150} height={150} alt='loadingAnimation' src={'/kuru-kuru.gif'}/>
            <p className="pt-3 ml-3 font-semibold">Loading, Incoming Content...</p>
        </div>
    </div>
  )
}

export default LoaderAnimate