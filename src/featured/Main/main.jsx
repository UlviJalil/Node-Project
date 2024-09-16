import React from 'react'
import { useState, useEffect } from 'react';
import { IoIosArrowForward } from "react-icons/io";



const main = () => {



  return (


    <div className="container mx-auto p-6">

      <div className='flex gap-3 justify-center items-center flex-col p-10'>
        <h1 className='text-center text-4xl'>News</h1>

        <div className='flex justify-center items-center'>
          <p className='text-gray-500 cursor-pointer'>Home</p>
          <IoIosArrowForward className='text-gray-500' />
          <p>News</p>
        </div>
      </div>


      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        <aside className="space-y-8">

          <div className=" shadow-lg p-6 rounded-lg w-full max-w-md mx-auto">
            <h3 className="font-semibold text-lg mb-6">POPULAR POSTS</h3>
            <ul className="space-y-6">
              <li className="flex items-start">
                <img src="https://demo-alukas.myshopify.com/cdn/shop/articles/7.jpg?v=1711695353&width=533" alt="Takı Burç Yorumu Sonbahar" className="w-24 h-24 rounded-md object-cover" />
                <div className="ml-6">
                  <h4 className="font-medium text-lg">Jewelry Horoscope Autumn</h4>
                  <p className="text-sm text-gray-500 mt-2">06 Eyl 2023</p>
                </div>
              </li>
              <li className="flex items-start">
                <img src="https://demo-alukas.myshopify.com/cdn/shop/articles/10.jpg?v=1711695267&width=533" alt="Wainland Bilezik" className="w-24 h-24 rounded-md object-cover" />
                <div className="ml-6">
                  <h4 className="font-medium text-lg">The Wasteland Bracelet</h4>
                  <p className="text-sm text-gray-500 mt-2">06 Eyl 2023</p>
                </div>
              </li>
              <li className="flex items-start">
                <img src="https://demo-alukas.myshopify.com/cdn/shop/articles/11.jpg?v=1711695396&width=533" alt="Kuzey Bronz Küpe" className="w-24 h-24 rounded-md object-cover" />
                <div className="ml-6">
                  <h4 className="font-medium text-lg">The North Earrings Bronze</h4>
                  <p className="text-sm text-gray-500 mt-2">06 Eyl 2023</p>
                </div>
              </li>
            </ul>
          </div>


          <div className="shadow-lg p-6 rounded-lg w-full max-w-md mx-auto">
            <h3 className="font-semibold text-lg mb-6">CATEGORY</h3>
            <ul className="space-y-4">
              <li><button className="text-base">News</button></li>
              <li><button className="text-base">Accessories</button></li>
              <li><button className="text-base">Collection</button></li>
              <li><button className="text-base">Fashion</button></li>
              <li><button className="text-base">Jewelry</button></li>
              <li><button className="text-base">Trends</button></li>
            </ul>
          </div>


          <div className=" shadow-lg p-6 rounded-lg w-full max-w-md mx-auto">
            <h3 className="font-semibold text-lg mb-6">TAGS</h3>
            <div className="flex flex-wrap gap-3">
              <button className="text-sm border  px-3 py-2 rounded">Accessories</button>
              <button className="text-sm border px-3 py-2 rounded">Collection</button>
              <button className="text-sm border px-3 py-2 rounded">Fashion</button>
              <button className="text-sm border px-3 py-2 rounded">Trends</button>
              <button className="text-sm border px-3 py-2 rounded">Jewelry</button>
            </div>
          </div>

          <div>
            <img src="https://demo-alukas.myshopify.com/cdn/shop/files/1_cfa07896-8a09-4ba5-ab76-257dd1c39520.jpg?v=1709716954&width=1000" alt="" />
          </div>
        </aside>




        <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-2 gap-6">

          <div className=" shadow-lg overflow-hidden w-full md:w-96">
            <img
              className="w-full h-[250px] object-cover cursor-pointer  transform transition hover:scale-105 "
              src="https://demo-alukas.myshopify.com/cdn/shop/articles/7.jpg?v=1711695353&width=533"
              alt="Jewelry Horoscope"
            />
            <div className="p-4">
              <span className="text-xs text-gray-500">NEWS</span>
              <p className="text-sm text-gray-500 mb-4">
                POST BY ALUKAS SHOPIFY - MAR 09 2024
              </p>
              <h2 className="font-bold text-xl mt-2">Jewelry Horoscope Autumn</h2>
              <p className="text-sm text-gray-700">
                Oneself endless holiest society philosophy dept valuation Contradicts
                gains nobless end lose preju dice battle hope the battle philosophy
                Gains endless capitalize taking seamless key...
              </p>
              <a href="#" className="text-blue-500 text-sm font-semibold mt-4 block">
                Continue Reading
              </a>
            </div>
          </div>



          <div className=" shadow-lg overflow-hidden w-full md:w-96">
            <img
              className="w-full h-[250px] object-cover cursor-pointer transform transition hover:scale-105"
              src="https://demo-alukas.myshopify.com/cdn/shop/articles/10.jpg?v=1711695267&width=533"
              alt="Jewelry Horoscope"
            />
            <div className="p-4">
              <span className="text-xs text-gray-500">NEWS</span>
              <p className="text-sm text-gray-500 mb-4">
                POST BY ALUKAS SHOPIFY - MAR 09 2024
              </p>
              <h2 className="font-bold text-xl mt-2">Jewelry Horoscope Autumn</h2>
              <p className="text-sm text-gray-700">
                Oneself endless holiest society philosophy dept valuation Contradicts
                gains nobless end lose preju dice battle hope the battle philosophy
                Gains endless capitalize taking seamless key...
              </p>
              <a href="#" className="text-blue-500 text-sm font-semibold mt-4 block">
                Continue Reading
              </a>
            </div>
          </div>




          <div className=" shadow-lg overflow-hidden w-full md:w-96">
            <img
              className="w-full h-[250px] object-cover cursor-pointer transform transition hover:scale-105 "
              src="https://demo-alukas.myshopify.com/cdn/shop/articles/11.jpg?v=1711695396&width=533"
              alt="Jewelry Horoscope"
            />
            <div className="p-4">
              <span className="text-xs text-gray-500">NEWS</span>
              <p className="text-sm text-gray-500 mb-4">
                POST BY ALUKAS SHOPIFY - MAR 09 2024
              </p>
              <h2 className="font-bold text-xl mt-2">Jewelry Horoscope Autumn</h2>

              <p className="text-sm text-gray-700">
                Oneself endless holiest society philosophy dept valuation Contradicts
                gains nobless end lose preju dice battle hope the battle philosophy
                Gains endless capitalize taking seamless key...
              </p>
              <a href="#" className="text-blue-500 text-sm font-semibold mt-4 block">
                Continue Reading
              </a>
            </div>
          </div>


          <div className="shadow-lg overflow-hidden w-full md:w-96">
            <img

              className="w-full h-[250px] object-cover cursor-pointer transform transition hover:scale-105 "
              src="https://demo-alukas.myshopify.com/cdn/shop/articles/14.jpg?v=1711695388&width=533"
              alt="Jewelry Horoscope"
            />
            <div className="p-4">
              <span className="text-xs text-gray-500">NEWS</span>
              <p className="text-sm text-gray-500 mb-4">
                POST BY ALUKAS SHOPIFY - MAR 09 2024
              </p>
              <h2 className="font-bold text-xl mt-2">Jewelry Horoscope Autumn</h2>
              <p className="text-sm text-gray-700">
                Oneself endless holiest society philosophy dept valuation Contradicts
                gains nobless end lose preju dice battle hope the battle philosophy
                Gains endless capitalize taking seamless key...
              </p>
              <a href="#" className="text-blue-500 text-sm font-semibold mt-4 block">
                Continue Reading
              </a>
            </div>
          </div>


          <div className=" shadow-lg overflow-hidden w-full md:w-96">
            <img
              className="w-full h-[250px] object-cover cursor-pointer transform transition hover:scale-105 "
              src="https://demo-alukas.myshopify.com/cdn/shop/articles/9.jpg?v=1711695256&width=533"
            />
            <div className="p-4">
              <span className="text-xs text-gray-500">NEWS</span>
              <p className="text-sm text-gray-500 mb-4">
                POST BY ALUKAS SHOPIFY - MAR 09 2024
              </p>
              <h2 className="font-bold text-xl mt-2">Jewelry Horoscope Autumn</h2>
              <p className="text-sm text-gray-700">
                Oneself endless holiest society philosophy dept valuation Contradicts
                gains nobless end lose preju dice battle hope the battle philosophy
                Gains endless capitalize taking seamless key...
              </p>
              <a href="#" className="text-blue-500 text-sm font-semibold mt-4 block">
                Continue Reading
              </a>
            </div>
          </div>


          <div className="shadow-lg overflow-hidden w-full md:w-96">
            <img
              className="w-full h-[250px] object-cover cursor-pointer transform transition hover:scale-105 "
              src="https://demo-alukas.myshopify.com/cdn/shop/articles/8.jpg?v=1711695344&width=533"
              alt="Jewelry Horoscope"
            />
            <div className="p-4">
              <span className="text-xs text-gray-500">NEWS</span>
              <p className="text-sm text-gray-500 mb-4">
                POST BY ALUKAS SHOPIFY - MAR 09 2024
              </p>
              <h2 className="font-bold text-xl mt-2">Jewelry Horoscope Autumn</h2>
              <p className="text-sm text-gray-700">
                Oneself endless holiest society philosophy dept valuation Contradicts
                gains nobless end lose preju dice battle hope the battle philosophy
                Gains endless capitalize taking seamless key...
              </p>
              <a href="#" className="text-blue-500 text-sm font-semibold mt-4 block">
                Continue Reading
              </a>
            </div>
          </div>

          <div className="shadow-lg overflow-hidden w-full md:w-96">
            <img
              className="w-full h-[250px] object-cover cursor-pointer transform transition hover:scale-105 "
              src="https://demo-alukas.myshopify.com/cdn/shop/articles/4.jpg?v=1711695367&width=533"
              alt="Jewelry Horoscope"
            />
            <div className="p-4">
              <span className="text-xs text-gray-500">NEWS</span>
              <p className="text-sm text-gray-500 mb-4">
                POST BY ALUKAS SHOPIFY - MAR 09 2024
              </p>
              <h2 className="font-bold text-xl mt-2">Jewelry Horoscope Autumn</h2>
              <p className="text-sm text-gray-700">
                Oneself endless holiest society philosophy dept valuation Contradicts
                gains nobless end lose preju dice battle hope the battle philosophy
                Gains endless capitalize taking seamless key...
              </p>
              <a href="#" className="text-blue-500 text-sm font-semibold mt-4 block">
                Continue Reading
              </a>
            </div>
          </div>
          <div className="shadow-lg overflow-hidden w-full md:w-96">
            <img
              className="w-full h-[250px] object-cover cursor-pointer transform transition hover:scale-105 "
              src="https://demo-alukas.myshopify.com/cdn/shop/articles/5.jpg?v=1711695279&width=533"
              alt="Jewelry Horoscope"
            />
            <div className="p-4">
              <span className="text-xs text-gray-500">NEWS</span>
              <p className="text-sm text-gray-500 mb-4">
                POST BY ALUKAS SHOPIFY - MAR 09 2024
              </p>
              <h2 className="font-bold text-xl mt-2">Jewelry Horoscope Autumn</h2>
              <p className="text-sm text-gray-700">
                Oneself endless holiest society philosophy dept valuation Contradicts
                gains nobless end lose preju dice battle hope the battle philosophy
                Gains endless capitalize taking seamless key...
              </p>
              <a href="#" className="text-blue-500 text-sm font-semibold mt-4 block">
                Continue Reading
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default main
