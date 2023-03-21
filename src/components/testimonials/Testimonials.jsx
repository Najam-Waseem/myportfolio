import React from 'react'
import './testimonials.css'
import AVT1 from '../../assets/avatar1.jpg'
import AVT2 from '../../assets/avatar2.jpg'
import AVT3 from '../../assets/avatar3.jpg'
import AVT4 from '../../assets/avatar4.jpg'
import {  Pagination,Navigation,Scrollbar,A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


const Testimonials = () => {
  return (
    <section className='testimonials'>
      <h5>Reviews from Clients</h5>
      <h2>Testimonials</h2>
      <Swiper className="container testimonials__container"
      modules={[ Pagination]}
      spaceBetween={40}
      slidesPerView={1}
      pagination={{ clickable: true }}
      >
        <SwiperSlide className="testimonial">
          <div className="clients__avatar">
            <img src={AVT1} alt="Avatar One" />
          </div>
          <h5 className='client__name'>Meg Blue</h5>
            <small className="client__review">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem, ducimus harum rem illum magni facere in maxime natus possimus? Ea consequuntur sint quis cum animi vel voluptas eos, a obcaecati.
            </small>
        </SwiperSlide>
        <SwiperSlide className="testimonial">
          <div className="clients__avatar">
            <img src={AVT2} alt="Avatar One" />
          </div>
          <h5 className='client__name'>Petter Griffin</h5>
            <small className="client__review">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem, ducimus harum rem illum magni facere in maxime natus possimus? Ea consequuntur sint quis cum animi vel voluptas eos, a obcaecati.
            </small>  
        </SwiperSlide>
        <SwiperSlide className="testimonial">
          <div className="clients__avatar">
            <img src={AVT3} alt="Avatar One" />
          </div>
          <h5 className='client__name'>Micheal Scott</h5>
            <small className="client__review">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem, ducimus harum rem illum magni facere in maxime natus possimus? Ea consequuntur sint quis cum animi vel voluptas eos, a obcaecati.
            </small>
        </SwiperSlide>
        <SwiperSlide className="testimonial">
          <div className="clients__avatar">
            <img src={AVT4} alt="Avatar One" />
          </div>
          <h5 className='client__name'>Esra Hanfi</h5>
            <small className="client__review">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem, ducimus harum rem illum magni facere in maxime natus possimus? Ea consequuntur sint quis cum animi vel voluptas eos, a obcaecati.
            </small>
        </SwiperSlide>
        
      </Swiper>
    </section>
  )
}

export default Testimonials
