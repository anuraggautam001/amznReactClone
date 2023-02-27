import React from 'react';
import './home.css';
import Product from './Product.js'


function Home() {
  return (
    <div className='home'>
        <div className='home_container'>
            <img alt='amazon_banner' className='home_image'
            src='https://images-eu.ssl-images-amazon.com/images/G/31/img21/OHL_HMT/HSS_MAR22/LA_TV_OHL/HK_1500x500-UNREC.jpg' 
            />
            <div className='home_row'>
              <Product 
              id="4949494"
              title="The Lean Startup: How Constant Innovation Creates Radically Successful Businesses"
              price = {29.99}
              image="https://m.media-amazon.com/images/I/81-QB7nDh4L.jpg"
              rating={4}
              />
              <Product
              id="3948463"
              title="Samsung Wondertainment"
              price={50.12}
              image = "https://www.reliancedigital.in/medias/Samsung-UA32T4340BKXXL-Smart-Television-492403650-i-6-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wyODUyNTh8aW1hZ2UvanBlZ3xpbWFnZXMvaDY3L2g0OC85ODQyMjA0Mjc4ODE0LmpwZ3xkZmQzY2QzN2JjYjY2Y2EyMTkzZmEyNTk3ZTE5MDk3Yzk5YTAzN2UyYWU1MWVkM2U4NjJlNzc3NDUwM2I0MDg4"
              rating={5}
              />
            </div>
            <div className='home_row'>
               <Product
               id="988763"
               title="mi Smart Watch"
               price={25.87}
               image="https://m.media-amazon.com/images/I/610OiiTm9PL._SY450_.jpg"
               rating={5}
                />
               <Product
               id="234598"
               title="Mamy poko Pants"
               price={11.99}
               image="https://m.media-amazon.com/images/I/71HUgw8aH9L._SY450_.jpg"
               rating={3}
                />
               <Product
               id="678934"
               title="iPhone 14 Pro Max"
               price={799}
               image="https://m.media-amazon.com/images/I/71T5NVOgbpL._SX522_.jpg"
               rating={5}
                />
            </div>
            <div className='home_row'>
            <Product
               id="87652334"
               title="Kitchen Essentials"
               price={20.11}
               image="https://www.saveur.com/uploads/2019/03/18/ZA54XCF4E76TPFCQIGQ5ZK5ZPY.jpg?auto=webp"
               rating={2}
                />
            </div>
        </div>
    </div>
  )
}

export default Home;