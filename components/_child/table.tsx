import * as React from 'react';

export default function Table(){
    return (
        <div className="flex flex-col">
                        <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                            <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
                                <div className="overflow-hidden">
                                    <table
                                        className="min-w-full border text-center text-sm font-light dark:border-neutral-500">
                                        <thead className="border-b font-medium dark:border-neutral-500">
                                            <tr>
                                                <th
                                                    scope="col"
                                                    className="border-r px-6 py-2 dark:border-neutral-500">
                                                    #
                                                </th>
                                                <th
                                                    scope="col"
                                                    className="border-r px-6 py-2 dark:border-neutral-500">
                                                    First
                                                </th>
                                                <th
                                                    scope="col"
                                                    className="border-r px-6 py-2 dark:border-neutral-500">
                                                    Last
                                                </th>
                                                <th scope="col" className="px-6 py-2">Handle</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr className="border-b dark:border-neutral-500">
                                                <td
                                                    className="whitespace-nowrap border-r px-6 py-2 font-medium dark:border-neutral-500">
                                                    1
                                                </td>
                                                <td
                                                    className="whitespace-nowrap border-r px-6 py-2 dark:border-neutral-500">
                                                    Mark
                                                </td>
                                                <td
                                                    className="whitespace-nowrap border-r px-6 py-2 dark:border-neutral-500">
                                                    Otto
                                                </td>
                                                <td className="whitespace-nowrap px-6 py-2">@mdo</td>
                                            </tr>
                                            <tr className="border-b dark:border-neutral-500">
                                                <td
                                                    className="whitespace-nowrap border-r px-6 py-2 font-medium dark:border-neutral-500">
                                                    2
                                                </td>
                                                <td
                                                    className="whitespace-nowrap border-r px-6 py-2 dark:border-neutral-500">
                                                    Jacob
                                                </td>
                                                <td
                                                    className="whitespace-nowrap border-r px-6 py-2 dark:border-neutral-500">
                                                    Thornton
                                                </td>
                                                <td className="whitespace-nowrap px-6 py-2">@fat</td>
                                            </tr>
                                            <tr className="border-b dark:border-neutral-500">
                                                <td
                                                    className="whitespace-nowrap border-r px-6 py-2 font-medium dark:border-neutral-500">
                                                    3
                                                </td>
                                                <td
                                                    className="whitespace-nowrap border-r px-6 py-2 dark:border-neutral-500">
                                                    Larry the Bird
                                                </td>
                                                <td className="whitespace-nowrap px-6 py-2 border-r">@twitter</td>
                                                <td className="whitespace-nowrap px-6 py-2">@twitter</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
    )
}