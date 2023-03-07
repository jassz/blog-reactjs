import data from '../data'

// api/postId
export default function handler(req:any, res:any){

    const {postId} = req.query
    const {Posts} = data
        // return res.status(404).json({error: postId})

    
    if(postId) {
        const post = Posts.find(value => value.id == postId)
        return res.status(200).json(post)
    }

    return res.status(404).json({error:"Post not found"})
}
