//endpoint: http://localhost:3000/api/posts
const baseURL = "http://localhost:3000/api/posts/post"

export default async function getPost(){
    const res = await fetch(`${baseURL}`)
    const posts = await res.json()

    return posts
}
