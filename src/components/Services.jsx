import React from 'react'

const Services = () => {
    return (
        <>
            <div className='container flex-wrap flex justify-around items-center w-full max-w-full p-12 '>
                <div className='flex items-center flex-col'>
                    <img src="https://demo-alukas.myshopify.com/cdn/shop/files/free-shipping.jpg?v=1712656231" alt="" />
                    <h1 className='text-lg font-medium'>Free Shipping</h1>
                    <p>For all Orders Over $100</p>
                </div>
                <div className='flex items-center flex-col'>
                    <img src="https://demo-alukas.myshopify.com/cdn/shop/files/returns.jpg?v=1712656231" alt="" />
                    <h1 className='text-lg font-medium'>30 Days Returns</h1>
                    <p>For an Exchange Product</p>
                </div>
                <div className='flex items-center flex-col' >
                    <img src="https://demo-alukas.myshopify.com/cdn/shop/files/secured-payment.jpg?v=1712656231" alt="" />
                    <h1 className='text-lg font-medium'>Secured Payment</h1>
                    <p>Payment Cards Accepted</p>
                </div>
                <div className='flex items-center flex-col' >
                    <img src="https://demo-alukas.myshopify.com/cdn/shop/files/support.jpg?v=1712656037" alt="" />
                    <h1 className='text-lg font-medium'>Support 24/7</h1>
                    <p>Contact us Anytime</p>
                </div>
            </div>
        </>
    )
}

export default Services
