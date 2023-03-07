import * as React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Author from './_child/author';
import fetcher from '../lib/fetcher'
import Spinner from './_child/spinner';
import Error from './_child/error';

export default function section2() {
    const { data, isLoading, isError } = fetcher('api/posts/post')

    if(isLoading)return <Spinner />
    if(isError)return <Error />
    return (
        <section className='container mx-auto md:px-20 py-10'>
            <h1 className='font-bold text-4xl py-12 text-center'>Latets Post</h1>
            {/* grid column */}
            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-14'>
                
                {
                    data.map(( value:any, index:any ) => (
                        <Post data={value} key={index} />
                    ))
                }
            </div>
        </section>
    );
}

function Post(data: { data: { id: any; title: any; subtitle: any; category: any; img: any; published: any; author: any; }; }) {
    const {id, title, subtitle, category, img, published, author} = data.data
    console.log('data', img);
    
    return (
        <div className='item'>
            <div className='images'>
                <Link href={"/"}>
                    <Image src={img || "/"} alt="image" width={500} height={350} className="rounded" />
                </Link>
            </div>
            <div className='info flex justify-center flex-col py-4'>
                <div className='cat'>
                    <Link href={"/"}><span className='text-orange-600 hover:text-orange-800'>{category || "Unknown"}</span></Link>
                    <Link href={"/"}><span className='text-gray-800 hover:text-gray-600'>-{published || "Unknown"}</span></Link>
                </div>
                <div className='title'>
                    <Link href={"/"}>
                        <span className='text-xl font-bold text-gray-800 hover:text-gray-600'>
                            {title || "Title"}
                        </span>
                    </Link>
                </div>
                <p className='text-gray-500 py-3'>
                    {subtitle || "No subtitle"}
                </p>
            </div>
            {author ? <Author /> : <></>}
        </div>
    )
}
