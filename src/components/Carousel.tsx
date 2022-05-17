import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./styles/Carousel.css"
import { useNavigate } from 'react-router-dom';


const Carousel = () => {
  const navigate =useNavigate()
  return (

    // Carousel utilizando la librería swiper
    <div className='swiper_container'>
    <Swiper
      cssMode={true}
      navigation={true}
      pagination={true}
      mousewheel={true}
      keyboard={true}
      modules={[Navigation, Pagination, Mousewheel, Keyboard]}
      className="mySwiper"
    >
         <SwiperSlide>   <div className='image_container'>
            <div>
              <div className='stars_container'>
                <img src="../assets/StarFill.svg" alt="" />
                <img src="../assets/StarFill.svg" alt="" />
                <img src="../assets/StarFill.svg" alt="" />
                <img src="../assets/StarFill.svg" alt="" />
              </div>
              <div className='carousel_summer_container'>
                <h3 onClick={() => navigate("/movie/414906")}>The Batman</h3>
                <p>In his second year of fighting crime, Batman uncovers corruption in Gotham City that connects to his own family while facing a serial killer known as the Riddler.</p>
              </div>  

            </div>
            <img src={"../assets/carousel_images/batman.jpg"} alt="Batman" />
          </div></SwiperSlide>
      <SwiperSlide>
          <div className='image_container'>
            <div>
              <div className='stars_container'>
                <img src="../assets/StarFill.svg" alt="" />
                <img src="../assets/StarFill.svg" alt="" />
                <img src="../assets/StarFill.svg" alt="" />
                <img src="../assets/StarFill.svg" alt="" />
              </div>
              <div className='carousel_summer_container'>

            <h3  onClick={() => navigate("/movie/335983")}>Venom</h3>
            <p>Investigative journalist Eddie Brock attempts a comeback following a scandal, but accidentally becomes the host of Venom, a violent, super powerful alien symbiote.</p>
              </div>

            </div>
            <img src={"../assets/carousel_images/venom.jpg"} alt="Venom" />
          </div>
        </SwiperSlide>
   
      <SwiperSlide>   <div className='image_container'>
            <div>
              <div className='stars_container'>
                <img src="../assets/StarFill.svg" alt="" />
                <img src="../assets/StarFill.svg" alt="" />
                <img src="../assets/StarFill.svg" alt="" />
                <img src="../assets/StarFill.svg" alt="" />
                <img src="../assets/StarFill.svg" alt="" />
              </div>
              <div className='carousel_summer_container'>

            <h3 onClick={() => navigate("/movie/507086")}>Jurassic World Dominion</h3>
            <p>Four years after the Lockwood estate incident, dinosaurs now live—and hunt—alongside humans all over the world...</p>
              </div>

            </div>
            <img src={"../assets/carousel_images/jurassic.jpg"} alt="Venom" />
          </div></SwiperSlide>

    </Swiper>
    </div>
  )
}

export default Carousel