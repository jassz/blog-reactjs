import * as React from 'react';
import Image from 'next/image';
import Link from 'next/link'
import {getAll} from '../../../lib/helper';
import Spinner from '../../../components/_child/spinner';
import Error from '../../../components/_child/error';
import Format from '../../../layout/format';


export default function Listing() {
    const { data, isLoading, isError } = getAll('user')

    if(isLoading)return <Spinner />
    if(isError)return <Error />

    const staff = data.users
    
    return (
        <Format>
        <section className='container mx-auto md:px-20 py-10'>
            <h1 className='font-bold text-4xl py-12 text-center'>Staff Listing</h1>
            {/* grid column */}
            <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-4'>
                
                {
                    staff.map(( value:any, index:any ) => (
                        <Staff data={value} key={index} />
                    ))
                }
            </div>
        </section>
        </Format>
    );
}


function Staff(data: { data: { id: any; firstName: any; maidenName:any; lastName: any; company:any; phone: any; image: any; email:any; }; }) {
    const {id, firstName, maidenName, lastName, company, phone, image, email} = data.data
    
    return (
        <div className='item border p-4'>
            <div className='images'>
                <Link href={`/staff/${id}`}>
                    <Image src={image || "/"} alt="image" width={300} height={150} className="rounded" />
                </Link>
            </div>
            <div className='info flex justify-center flex-col py-4'>
                <div className='name text-orange-600 hover:text-orange-800'>
                    <span > {firstName || ""}</span>
                    <span> {maidenName || ""}</span>
                    <span> {lastName || ""}</span>
                </div>
                <div className='company'>
                    {/* <Link href={"/"}> */}
                        <div className='text-lg font-bold text-gray-800 hover:text-gray-600'>
                            {company.title || "Anonymous"}
                        </div>
                        <div className='text-xs font-bold text-gray-500 hover:text-gray-600'>
                            {company.department +' Department'  || "Anonymous"}
                        </div>
                    {/* </Link> */}
                </div>
                <div className='mt-3'>
                <p className='text-blue-500 text-sm'>
                    {email || "No subtitle"}
                    </p>
                    <p className='text-gray-500 text-sm'>
                    {phone || "No subtitle"}
                </p>
                </div>
                
            </div>
          
        </div>
    )
}