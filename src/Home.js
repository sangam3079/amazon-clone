import React from 'react';
import "./Home.css";
import Product from './Product';


function Home() {
    return (
        <div className="home">
            <div className="home__container">
                <img 
                  className="home__image"
                  src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
                  alt=""
                />

                <div className="home__row">
                    <Product 
                      title='my startup' 
                      price={79}
                      image='https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg'
                      rating={4} 
                    />
                    <Product 
                      title='AmazonBasics Small Digital Alarm Clock with Nightlight and Battery Backup, LED Display' 
                      price={9.99}
                      image='https://m.media-amazon.com/images/I/61j17FjPhtL.jpg'
                      rating={4} 
                    />
                </div>  
                <div className="home__row">
                    <Product 
                      title='Mkeke Compatible with iPhone XR Case,Clear Anti-Scratch Shock Absorption Cover Case for iPhone XR' 
                      price={7.99}
                      image='https://images-na.ssl-images-amazon.com/images/I/71j2Zqi6BGL._AC_SX569_.jpg'
                      rating={5} 
                    />
                    <Product 
                      title='my startup' 
                      price={9}
                      image='https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg'
                      rating={4} 
                    />
                    <Product 
                      title='NICETOWN Thermal Insulated Grommet Blackout Curtains for Bedroom (2 Panels, W42 x L63 -Inch,Grey)' 
                      price={28}
                      image='https://images-na.ssl-images-amazon.com/images/I/71zuWcCpXrL._AC_SL1024_.jpg'
                      rating={3} 
                    />
                </div>  
                <div className="home__row">
                    <Product 
                      title='Lenovo Flex 5 14" 2-in-1 Laptop, 14.0" FHD (1920 x 1080) Touch Display, AMD Ryzen 5 4500U Processor, 16GB DDR4, 256GB SSD, AMD Radeon Graphics, Digital Pen Included, Win 10, 81X20005US, Graphite Grey' 
                      price={200}
                      image='https://img-cdn.tnwcdn.com/image?fit=1280%2C720&url=https%3A%2F%2Fcdn0.tnwcdn.com%2Fwp-content%2Fblogs.dir%2F1%2Ffiles%2F2020%2F05%2FSnag_1f7d7f0a.png&signature=3ca2705268d218683025ba332e155019'
                      rating={5} 
                    />
                </div>  
            </div>
            
        </div>
    )
}

export default Home
