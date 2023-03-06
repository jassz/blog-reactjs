import * as React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Author from './_child/author';

export default function section1() {
    
    // const bg:Object
    let bg:Object = {
        background: "url('images/banner.png')no-repeat",
        backgroundPosition: "right"
    }
    return (
        <section className='py-16' style={bg}>
            <div className='container mx-auto md:px-20'>
                <h1 className='font-bold text-4xl pb-12 text-center'>Trending</h1>
            </div>
            <Slide />
        </section>
    )
}

function Slide() {
    return (
        <div className='grid md:grid-cols-2'>
            <div className='image'>
                <Link href={"/"}>
                    <Image src={"/images/img1.jpg"} alt="image" width={600} height={600} />

                </Link>
            </div>
            <div className='info flex justify-center flex-col p-3'>
                <div className='cat'>
                    <Link href={"/"}><span className='text-orange-600 hover:text-orange-800'>Business Travel</span></Link>
                    <Link href={"/"}><span className='text-gray-800 hover:text-gray-600'>-July 3, 2023</span></Link>
                </div>
                <div>
                    <Link href={"/"}><span className='text-xl md:text-3xl font-bold text-gray-800 hover:text-gray-600'>Your most unhappy customers are your greatest source of learning</span></Link>
                    <p className='text-gray-500 py-3'>
                        Unhappy customers can provide valuable feedback and insight for a business to improve its products or services. By listening to and addressing the complaints and concerns of dissatisfied customers, a company can learn what needs to be changed or improved to better meet the needs of its customers and ultimately improve its overall performance.
                    </p>
                   <Author />
                </div>
            </div>
        </div>
    )
}