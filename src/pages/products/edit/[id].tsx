import * as React from 'react';
import Image from 'next/image';
import Link from 'next/link'
import { getOne } from '../../../../lib/helper';
import Spinner from '../../../../components/_child/spinner'; 
import Error from '../../../../components/_child/error';
import Format from '../../../../layout/format';
import { useRouter } from 'next/router';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay } from 'swiper'
import 'swiper/css';


export default function Edit() {
    const router = useRouter()
    const { id } = router.query
    const { data, isLoading, isError } = getOne('products', id)

    if (isLoading) return <Spinner />
    if (isError) return <Error />

    return (
        <Format>
            <div className='flex justify-center py-5'>
                <h1 className='text-2xl'>{'Edit Page'}</h1>
            </div>
            <section className='container flex justify-center mx-auto md:px-2 pb-16'>
                {Product(data)}
            </section>
        </Format>
    );
}


function Product(data: { id: any; title: any; description: any; category: any; images: any; price: any; brand: any; rating: any; stock: any; }) {
    const { id, title, description, category, images, price, brand, rating, stock } = data

    return (
        <div className='grid mr-5 card'>
            <div className='flex justify-end'>
                <button className='text-sm border-2 bg-yellow-400 w-auto px-5 py-1 rounded-lg'>Edit</button>
            </div>
            
            <div className='images'>
                <Swiper
                    slidesPerView={1}
                    loop={true}
                    autoplay={{ delay: 2000 }}
                >
                    {
                        images.map((image: any, index: any) => (
                            <SwiperSlide key={index}>
                                <Image src={image} alt="image" width={300} height={300} className="mx-auto" />
                            </SwiperSlide>
                        ))
                    }

                </Swiper>
            </div>
            <div className='info flex justify-center flex-col py-4'>
                <div className='cat flex justify-between'>
                    <span>
                        <span className='text-md text-orange-600 hover:text-orange-800 capitalize'>{category + ' ' + brand}</span>
                        <span className='text-xs text-gray-800 hover:text-gray-600'> - {rating + ' star'}</span>
                    </span>
                    <span>{stock + 'units'}</span>
                </div>
                <div className='title'>
                    <Link href={"/"}>
                        <span className='text-xl md:text-2xl font-bold text-gray-800 hover:text-gray-600'>
                            {title}
                        </span>
                    </Link>
                </div>
                <p className='text-gray-500 py-3'>
                    {description}
                </p>
                <p>{'RM ' + price}</p>
            </div>

        </div>
    )
}
