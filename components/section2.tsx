import * as React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Author from './_child/author';
import getPost from '../lib/helper'
export default function section2() {
    getPost().then(res=>console.log(res))
    return (
        <section className='container mx-auto md:px-20 py-10'>
            <h1 className='font-bold text-4xl py-12 text-center'>Latets Post</h1>
            {/* grid column */}
            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-14'>
                {Post()}
                {Post()}
                {Post()}
                {Post()}
                {Post()}
                {Post()}
            </div>
        </section>
    );
}

function Post() {
    return (
        <div className='item'>
            <div className='images'>
                <Link href={"/"}>
                    <Image src={"/images/img1.jpg"} alt="image" width={500} height={350} className="rounded" />
                </Link>
            </div>
            <div className='info flex justify-center flex-col py-4'>
                <div className='cat'>
                    <Link href={"/"}><span className='text-orange-600 hover:text-orange-800'>Business Travel</span></Link>
                    <Link href={"/"}><span className='text-gray-800 hover:text-gray-600'>-July 3, 2023</span></Link>
                </div>
                <div className='title'>
                    <Link href={"/"}><span className='text-xl font-bold text-gray-800 hover:text-gray-600'>Your most unhappy customers are your greatest source of learning</span></Link>
                </div>
                <p className='text-gray-500 py-3'>
                    Unhappy customers can provide valuable feedback and insight for a business to improve its products or services. By listening to and addressing the complaints and concerns of dissatisfied customers, a company can learn what needs to be changed or improved to better meet the needs of its customers and ultimately improve its overall performance.
                </p>
            </div>
            <Author />
        </div>
    )
}
