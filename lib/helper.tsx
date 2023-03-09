//endpoint: http://localhost:3000/api/posts


import useSWR, { mutate } from 'swr'

const baseURL = "https://dummyjson.com/"
const response = (...args) => fetch(...args).then(res => res.json())

export function getAll(endpoint:any) {
    console.log('endpoint', endpoint);
    
	const { data, error } = useSWR(`${baseURL}${endpoint}`, response)

	return{
		data: data,
		isLoading: !error && !data,
		isError: error
	}
}


export function getOne(endpoint:any, params:any) {
	const { data, error } = useSWR(`${baseURL}${endpoint}/${params}`, response)

	return{
		data: data,
		isLoading: !error && !data,
		isError: error
	}
}

export function edit(endpoint:any, params:any) {
	const { data, error } = useSWR(`${baseURL}${endpoint}/${params}`, response)

	const handleUpdate = async () => {
		const res = await fetch(`${baseURL}${endpoint}/${params}`, {
		  method: 'PUT',
		  body: JSON.stringify(data),
		})
		const updated = await res.json()
	
		mutate(`${baseURL}${endpoint}/${params}`, updated, false)
	  }


	return{
		data: data,
		isLoading: !error && !data,
		isError: error
	}
}

// export function deleteStaff(endpoint:any, params:any) {
// 	const { data, error } = useSWR(`${baseURL}${endpoint}/${params}`, response)

// 	return{
// 		data: data,
// 		isLoading: !error && !data,
// 		isError: error
// 	}
// }

