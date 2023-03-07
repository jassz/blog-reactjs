
import Image from 'next/image';
import Link from 'next/link';
import Author from './author';

export default function Related(){
    return(
        <section className="pt-20">
            <h1 className='font-bold text-2xl py-10'>Related</h1>
            <div className="flex flex-col gap-10">
                {Post()}
                {Post()}
                {Post()}
                {Post()}
            </div>
        </section>
    )
}

function Post(){
    return (
        <div className="flex gap-5">
            <div className='image flex flex-col justify-start'>
                <Link href={"/"}>
                    <Image src={"/images/img1.jpg"} alt="image" width={200} height={150} className="rounded" />
                </Link>
            </div>
            <div className='info flex flex-col justify-center'>
                <div className='cat'>
                    <Link href={"/"}><span className='text-orange-600 hover:text-orange-800'>Business Travel</span></Link>
                    <Link href={"/"}><span className='text-gray-800 hover:text-gray-600'>-July 3, 2023</span></Link>
                </div>
                <div className='title'>
                    <Link href={"/"}><span className='text-md font-bold text-gray-800 hover:text-gray-600'>Your most unhappy customers are your greatest source of learning</span></Link>
                </div>
                <Author />
            </div>
        </div>
    )
}