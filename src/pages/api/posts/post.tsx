import data from '../data'

export default function handler(req:any, res:any){
    const {Posts} = data
    // return res.status(404).json({error:data})
    

    if(Posts) return res.status(200).json(Posts)
    return res.status(404).json({error:"Data not found"})
}
