//endpoint: http://localhost:3000/api/posts


import useSWR from 'swr'

const baseURL = "https://dummyjson.com/"
const response = (...args) => fetch(...args).then(res => res.json())

export function getPost(endpoint:any) {
    
	const { data, error } = useSWR(`${baseURL}${endpoint}`, response)

	return{
		data: data,
		isLoading: !error && !data,
		isError: error
	}
}


export function getOnePost(endpoint:any, params:any) {
	const { data, error } = useSWR(`${baseURL}${endpoint}/${params}`, response)

	return{
		data: data,
		isLoading: !error && !data,
		isError: error
	}
}
