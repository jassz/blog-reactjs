import * as React from 'react';
import Image from 'next/image';
import Link from 'next/link';
// import Author from './_child/author';
import {getAll} from '../lib/helper'
import Spinner from './_child/spinner';
import Error from './_child/error';

import {ImArrowRight2} from "react-icons/im"

export default function section2() {
    const { data, isLoading, isError } = getAll('products')
    
    if(isLoading)return <Spinner />
    if(isError)return <Error />
    const products: string[] = data.products

    return (
        <section className='container mx-auto md:px-20 py-10'>
            <h1 className='font-bold text-4xl py-12 text-center'>Latest Products</h1>

            {/* grid column */}
            <div className='grid md:grid-cols-3 lg:grid-cols-4 gap-5'>
                {
                    products.slice(8, 16).map(( product:any, index:any ) => (
                        <Post data={product} key={index} />
                    ))
                }
            </div>

            <div className='flex justify-end m-3 w-full'>
                <Link href={"/products/listing" }>
                    <span>View more</span> 
                </Link>
                <ImArrowRight2 className='ml-3 my-auto' />
            </div>
        </section>
    );
}

function Post(data: { data: { id: any; title: any; description: any; category: any; images: any; price: any; brand: any; }; }) {
    const {id, title, description, category, images, price, brand} = data.data
    
    return (
        <div className='item border-2 p-4 rounded-md border-gray-200 '>
            <div className='images h-full bg-white-100' style={{height: '20vh'}}>
                <Link href={"/"}>
                    <Image src={images[0] || "/"} alt="image"  width={100} height={100} className="rounded flex flex-col justify-center mx-auto" />
                </Link>
            </div>
            <div className='info flex justify-center flex-col py-4'>
                <div className='cat'>
                    <Link href={"/"}><span className='text-orange-600 hover:text-orange-800 capitalize'>{category || "Unknown"}</span></Link>
                    <Link href={"/"}><span className='text-gray-800 hover:text-gray-600'>-{description || "Unknown"}</span></Link>
                </div>
                <div className='title'>
                    <Link href={"/"}>
                        <span className='text-xl font-bold text-gray-800 hover:text-gray-600'>
                            {'RM ' +price + '.00' || "-"}
                        </span>
                    </Link>
                </div>
                <p className='text-gray-500 py-3'>
                    {brand || "No subtitle"}
                </p>
            </div>
        </div>
    )
}
