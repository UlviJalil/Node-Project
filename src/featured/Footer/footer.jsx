import React from 'react'


const Footer = () => {
  return (
    <footer className="py-14 w-full max-w-full">
      <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-8">


          <div>
            <h2 className="text-3xl">ALUKAS & CO</h2>
            <p className="mt-2 text-gray-600">Gold & Diamonds</p>
          </div>


          <div>
            <h3 className="text-lg font-semibold text-gray-800">About Alukas</h3>
            <ul className="mt-4 space-y-2 text-gray-600">
              <li><a href="#">About Us</a></li>
              <li><a href="#">Core Values</a></li>
              <li><a href="#">Careers</a></li>
              <li><a href="#">Press Releases</a></li>
              <li><a href="#">Blog</a></li>
              <li><a href="#">Sitemap</a></li>
            </ul>
          </div>


          <div>
            <h3 className="text-lg font-semibold text-gray-800">Our Company</h3>
            <ul className="mt-4 space-y-2 text-gray-600">
              <li><a href="#">Shopping App</a></li>
              <li><a href="#">Be An Affiliate</a></li>
              <li><a href="#">Advertise Your Product</a></li>
              <li><a href="#">Media Enquiries</a></li>
              <li><a href="#">Other Services</a></li>
            </ul>
          </div>


          <div>
            <h3 className="text-lg font-semibold text-gray-800">Store Details</h3>
            <div className="mt-4  flex items-center">

              <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10  text-gray-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 1c-5.523 0-10 4.477-10 10v5a3 3 0 003 3h1a3 3 0 003-3v-3a3 3 0 00-3-3H5a7 7 0 0114 0h-1a3 3 0 00-3 3v3a3 3 0 003 3h1a3 3 0 003-3v-5c0-5.523-4.477-10-10-10z" />
              </svg>
              <p className="text-gray-600">Need Any Help?</p>
            </div>
            <p className="font-bold text-gray-800">(+800) 1234 56</p>
            <p className="mt-2 text-gray-600">502 New Design Str, Melbourne, Australia</p>
            <p className="text-gray-600">Email: <a href="mailto:alukas@domain.com" className="text-blue-600">alukas@domain.com</a></p>
          </div>


          <div>
            <h3 className="text-lg font-semibold text-gray-800">Follow Us</h3>
            <div className="mt-4 flex space-x-4">
              <a href="#"><img src="https://www.iconpacks.net/icons/2/free-instagram-logo-icon-3497-thumb.png" alt="Instagram" className="w-5 h-5 text-[#000]" /></a>
              <a href="#"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGD6NXa0rUyqCEeu1xizKJlvHqFDikg2L_Vg&s" alt="TikTok" className="w-5 h-5" /></a>
              <a href="#"><img src="https://images.rawpixel.com/image_png_800/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvdjk4Mi1kNi0wOS5wbmc.png" alt="yt" className="w-5 h-5" /></a>
              <a href="#"><img src="https://vimm.com/wp-content/uploads/2023/08/twitter-changes-to-x.png" alt="twitter" className="w-5 h-5" /></a>
              <a href="#"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAb1BMVEX///8AAAAxMTH5+fmMjIz19fVWVlZqampOTk6ampr8/PzHx8f29vY1NTXw8PDk5OTQ0NBbW1skJCSnp6fY2Nh/f3/q6uq3t7dnZ2d4eHgaGhrDw8Oenp5HR0ewsLASEhIqKio9PT2QkJBCQkJycnJZfBqVAAADDklEQVR4nO3da0/iYBCGYbCwQjkJAoqKKPL/f+Nms4mLCZV5p83OM+a+v5PMFaTHt7XXE6ka3r2OT8v9bHXonze7j56si7bPm9FX13mn6PFaVk8G+0bc3+6iZ2zTenNF96eX6CndbcdvBl+/P4ge1NnC8vUlFi5urb6cwsXS7ssorI8lvoTCyawMmE1YPRb6sgnvin3JhC8OYCbhtGgTmlC4fXIB8wjXPl8e4cQLzCJ8cAOTCFsAcwj9f6JJhO6NTBbhthUwgXC4+unC8mPtZML7lkB5YbutTALhtOWPUF+4aw0UF3rOeHMJS6/JpBO6zukzCeddAKWFHWxmtIWLToDKQvO9l6zCbn6F/b7ufe5BR8JFNKSpqiPgOBrS2KsP9PY+Om83iXY091Gu2z1sqzp6bnPFu4pH4W/rYuMy3yjdmpL6vcT39Bw9b3lFp/b7afS4jkrOKnbRw7oquMCmu8P7rtoOvI2e1Zf9Z7iPHtWZeV+xmkeP6sx8x/41elJvzQtivzaLHtSd9SvMdqT2mfWgNOtmptd7Ngofogd1Z73fVEUP6s54Deoxek5/J5sw7xp16+4w3Tnhv0Y2oexVtOvZrtEcsh6x9aw31VbD6Dn93ZiEN3l3FggRJgghQv0QItQPIUL9ECLUDyFC/RAi1A8hQv1s17xT3MRfH39daGlbqHC49NmzBgL3plo/W3ilYzSwowcqvin6W3Qu5S4oelVfV88bNBe9rA8hQoQIESJEiBAhQoQIESJEiBAhQoQIESJEiBDhzxFGP2XayWsRv20TLGz1mm5T4a9c8P07B3sf0cBedWz/Et3mnjYKj2DWwwvVxhVD8+mlT3+mvKDo56+JQohQP4QI9UOIUD+ECPVDiFA/hAj1Q4hQP4QI9UOIUD+ECPVDiFA/hAj1Q4hQP4QI9UOIUD+ECPVDiFA/hAj1Q4hQP4QI9UOIUD+ECPVDiFA/hAj1Q4hQP4QI9UOIUD+ECPVDiFA/hAj1Q4hQv3eTMP79q/42JuEueswWVSbhPHrMNs13116/uzr9H+Bv+CxBgXilGyMAAAAASUVORK5CYII=" alt="Facebook" className="w-5 h-5" /></a>
            </div>
          </div>
        </div>


        <div className="mt-10 border-t border-gray-300 pt-10 flex flex-col items-center">
          <p className="text-gray-500"><img src="https://demo-alukas.myshopify.com/cdn/shop/files/alk_payment.png?v=1711955031" alt="" /></p>
          <p className='text-gray-500'>Copyright © Alukas all rights reserved. Powered by Bersky.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;