import React from 'react'
import"./Home.css";
import Product from './Product';

function Home() {
    return (
        <div className="home">
            <div className="home__container">
                <img className="home__image" src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" 
                 alt=""/>

                 <div className="home__row">
                     <Product 
                     id="12345611"
                     title='Apple iPhone 12 Pro Max, 128GB, Gold - Fully Unlocked (Renewed)'
                     price={1350} 
                     image='https://m.media-amazon.com/images/I/71u1BzjGJbL._AC_SL1500_.jpg'
                     rating={4}/>
                     <Product
                     id="49538094"
                     title="DualShock 4 Wireless Controller for PlayStation 4 - Jet Black"
                     price={59.99}
                     image="https://m.media-amazon.com/images/I/61IG46p-yHL._SL1500_.jpg"
                     rating={4}/>
                 </div>

                 <div className="home__row">
                     <Product
                     id="1111111"
                     title="Apple EarPods with Lightning Connector - White"
                     price={40.99}
                     image="https://m.media-amazon.com/images/I/41wYbyr3LLL._AC_SL1144_.jpg"
                     rating={4}/>
                     <Product
                     id="222222"
                     title="ASUS ROG Zephyrus S Ultra Slim Gaming PC Laptop"
                     price={1200}
                     image="https://m.media-amazon.com/images/I/81Nox3hzQaL._AC_SL1500_.jpg"
                     rating={5}/>
                     <Product
                     id="3333333"
                     title="Acer Nitro 5 Gaming Laptop"
                     price={769.99}
                     image="https://m.media-amazon.com/images/I/71s1LRpaprL._AC_SL1500_.jpg"
                     rating={4}/>
                 </div>

                 <div className="home__row">
                 <Product
                 id="44444444"
                 title="SAMSUNG Galaxy Z Flip 3 5G"
                 price={999.99}
                 image="https://m.media-amazon.com/images/I/51JgTGwH8US._AC_SL1000_.jpg"
                 rating={4}/>
                  </div>

            </div>
        </div>
    )
}

export default Home
