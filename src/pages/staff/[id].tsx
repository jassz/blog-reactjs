import * as React from 'react';
import Image from 'next/image';
import Link from 'next/link'
import { getOne } from '../../../lib/helper';
import Spinner from '../../../components/_child/spinner';
import Error from '../../../components/_child/error';
import Format from '../../../layout/format';
import { useRouter } from 'next/router';



export default function Listing() {
    const router = useRouter()
    const { id } = router.query

    const { data, isLoading, isError } = getOne('user', id)

    if (isLoading) return <Spinner />
    if (isError) return <Error />

    const staff = data.users

    return (
        <Format>
            <section className='container mx-auto md:px-2 py-16 w-1/2'>
                <div className='flex justify-start border-b-4'>
                    <div className='flex py-5'>
                        <Image src={data.image} alt="image2" width={110} height={110} className="rounded-full" />
                        <div className='flex flex-col justify-center px-4'>
                            <Link href={""}><h1 className='text-2xl font-bold text-gray-800 hover:text-gray-600'>{data.company.title}</h1></Link>
                            <span className='text-sm text-gray-500'>{data.company.department + ' Department'}</span>
                        </div>
                    </div>
                </div>
                    <div className='staffInfo border-b-4 pb-10 '>
                    <h1 className="text-2xl font-bold flex justify-center bg-red-200 py-4">Staff Info</h1>

                    <table className="table-auto staff-details">
                        
                        <tbody>
                            <tr>
                                <td >Name</td>
                                <td>:</td>
                                <td className='value'> {data.firstName} {data.maidenName} {data.lastName}</td>
                            </tr>
                            <tr>
                                <td >Gender</td>
                                <td>:</td>
                                <td className='value'> {data.gender}</td>
                            </tr>
                            <tr>
                                <td >Birthdate</td>
                                <td>:</td>
                                <td className='value'> {data.birthDate} <span className='text-gray-400 text-xs'>({data.age + 'years old'})</span></td>
                            </tr>
                            <tr>
                                <td>Phone Number</td>
                                <td>:</td>
                                <td className='value'> {data.phone}</td>
                            </tr>
                            <tr>
                                <td>Email</td>
                                <td>:</td>
                                <td className='value'> {data.email}</td>
                            </tr>
                            <tr>
                                <td>Address</td>
                                <td>:</td>
                                <td className='value'> {data.address.address + ' ' + data.address.city + ', ' + data.address.postalCode + ', ' + data.address.state}</td>
                            </tr>
                        </tbody>
                    </table>
                    </div>
                    
                    <div className='companyInfo border-b-4 pb-10'>
                    <h1 className="text-2xl font-bold flex justify-center bg-red-200 py-4">Company Info</h1>

                    <table className="table-auto staff-details ">
                        <tbody>
                            <tr>
                                <td >Name</td>
                                <td>:</td>
                                <td className='value'> {data.company.name}</td>
                            </tr>
                            <tr>
                                <td >Department</td>
                                <td>:</td>
                                <td className='value'> {data.company.department}</td>
                            </tr>
                            <tr>
                                <td >Position Title</td>
                                <td>:</td>
                                <td className='value'> {data.company.title}</td>
                            </tr>
                            <tr>
                                <td>Address</td>
                                <td>:</td>
                                <td className='value'> {data.company.address.address + ' ' + data.company.address.city + ', ' + data.company.address.postalCode + ', ' + data.address.state}</td>
                            </tr>

                        </tbody>
                    </table>
                    </div>
                {/* </div> */}
                <div />
            </section>
        </Format>
    );
}