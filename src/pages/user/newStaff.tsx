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

    const user = data.users
    
    return (
        <Format>
        <section className='container mx-auto md:px-20 py-10'>
            <h1 className='font-bold text-4xl py-12 text-center'>User Listing</h1>
            {/* grid column */}
            <div className='grid md:grid-cols-3 lg:grid-cols-5 gap-4'>
                TEST 1
                {/* {
                    user.map(( value:any, index:any ) => (
                        <User data={value} key={index} />
                    ))
                } */}
            </div>
        </section>
        </Format>
    );
}
