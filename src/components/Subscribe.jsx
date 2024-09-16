import React from 'react'

const Subscribe = () => {
    return (

        <div className=' bg-[#f5f5f5] flex-wrap flex justify-center items-center w-full flex-col container max-w-full p-14 '>
            <div className='flex justify-center items-center gap-2 flex-col w-full'>
                <h1 className='text-4xl'>Subscribe Newsletter</h1>
                <p className='text-gray-500 text-[17px]'>Sign up to our Newsletter and get the discount code.</p>
            </div>
            <div className='flex items-center justify-center p-9 gap-2 '>
                <input className=' pl-4 border-[#000] border-2 w-[500px] h-[50px]' type="email" placeholder='Your email address...' />
                <button className='bg-[#000] text-white w-[150px] h-[50px]'>SUBSCRIBE</button>
            </div>
        </div>

    )
}

export default Subscribe
