import React from 'react'
import Animated from '../components/Animated'
import { bookingTestimonial } from '../data/data'

const BookingProcess = () => {
  return (
    <section id='booking-process' className='px-auto mt-44'>
        <div className='max-w-7xl mx-auto grid md:grid-cols-2 gap-16 md:gap-25'>
            <div className='flex flex-col text-center md:text-left'>
                <Animated delay={0.2}>
                    <p className='text-orange-500 font-medium uppercase mb-4'>Table Reservation Process</p>

                </Animated>
                 <Animated delay={0.2}>
                    <p className='text-4xl md:text-5xl md-16'>Reserve your table in three simple steps</p>

                </Animated>
                 <Animated className="flex gap-0.5 mb-6 justify-center md:justify-start">
                    ([...Array(bookingTestimonal.rating)].map((_,i)=>(
                        <Star key={i} className='size-4 fill-orange-500 text-orange-500' />
                    )))
                
                    <p className='text-orange-500 font-medium uppercase mb-4'>Reserve your table in three simple steps</p>

                </Animated>

            </div>
            <div>

            </div>

        </div>
    </section>
  )
}

export default BookingProcess