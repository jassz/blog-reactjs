import * as React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Author from './_child/author';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, {Autoplay} from 'swiper'
import 'swiper/css';
import {getAll} from '../lib/helper'
import Spinner from './_child/spinner';
import Error from './_child/error';

export default function section1() {

    SwiperCore.use([Autoplay])

    // const bg:Object
    let bg: Object = {
        background: "url('images/banner1.jpg')no-repeat  ",
        backgroundSize: 'cover', 
    }

    const { data, isLoading, isError } = getAll('quotes')
    
    if(isLoading)return <Spinner />
    if(isError)return <Error />

    return (
        <section className='py-16' style={bg}>
            <Swiper
                slidesPerView={1}
                loop={true}
                autoplay={{delay:2000}}
            >
                 {
                    data.quotes.map(( quote:any, index:any ) => (
                        <SwiperSlide>{Slide(quote) }</SwiperSlide>
                    ))
                }
            </Swiper>
        </section>
    )
}

function Slide(value: any) {
    return (
        <div className='grid md:grid-cols-3'>
            <div>
            </div>
            <div></div>
            <div className='info flex justify-center flex-col p-3'>
                <div className='cat'>
                    <Link href={"/"}><span className='text-orange-600 hover:text-orange-800'>{value.author}</span></Link>
                    <Link href={"/"}><span className='text-gray-800 hover:text-gray-600'>-March 7, 2023</span></Link>
                </div>
                <div className='title'>
                    <Link href={"/"}><span className='text-xl md:text-3xl font-bold text-gray-800 hover:text-gray-600'>{value.quote}</span></Link>
                </div>
                {/* <p className='text-gray-500 py-3'>
                    Unhappy customers can provide valuable feedback and insight for a business to improve its products or services. By listening to and addressing the complaints and concerns of dissatisfied customers, a company can learn what needs to be changed or improved to better meet the needs of its customers and ultimately improve its overall performance.
                </p> */}
                {/* <Author /> */}
            
            </div>
        </div>
    )
}