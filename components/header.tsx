// import * as React from 'react';
import { ImFacebook, ImTwitter, ImYoutube } from "react-icons/im";
import Link from 'next/link'

export default function header() {
    return (
        <div className='bg-gray-200'>
            <div className="xl:container xl:mx-auto flex flex-col items-center sm:flex-row sm:justify-between center p-3">
                <div className="md:flex-none w-96 order-2 sm:order-1 flex justify-center py-4 sm:py-0">
                <div className="flex gap-6 ">
                    <Link href={"/products/listing"}>
                        <span>Products</span>
                    </Link>
                    <Link href={"/user/listing"}>
                        <span>Users</span>
                    </Link>
                    </div>
                    {/* <input type="text" className="mt-1 block w-60 px-3 py-2 bg-white border-slate-300 rounded-full text-sm shadow-sm placeholder-slate-500 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500" placeholder="search..."></input> */}
                </div>
                <div className="shrink w-80 sm:order-2 text-center">
                <Link href={"/"}>
                <p className="font-bold  text-2xl">inDESIGN</p>
                        </Link>
                </div>
                <div className="w-96 order-3 flex justify-center">
                    <div className="flex gap-6">
                        <Link href={"/"}>
                            <ImFacebook color="#063970" />
                        </Link>
                        <Link href={"/"}>
                            <ImTwitter color="#1e81b0" />
                        </Link>
                        <Link href={"/"}>
                            <ImYoutube color="#d40d11" />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
