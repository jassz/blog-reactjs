import * as React from 'react';

export default function section1(data:any) {
    <table className="table-auto staff-details">
                        <thead className='font-bold uppercase bg-red-200 w-full'>
                            <tr>
                                <td >Staff Info</td>
                            </tr>
                        </thead>
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
                                <td className='value'> {data.phone}</td>
                            </tr>
                            <tr>
                                <td>Address</td>
                                <td>:</td>
                                <td className='value'> {data.address.address + ' ' + data.address.city + ', ' + data.address.postalCode + ', ' + data.address.state}</td>
                            </tr>
                        </tbody>
                    </table>
}