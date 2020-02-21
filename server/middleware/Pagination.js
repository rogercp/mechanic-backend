

 function Pagination(model){
    return async(req,res,next)=>{

    const page = parseInt(req.query.page)
    const limit = parseInt(req.query.limit)
    const startIndex = (page - 1) *limit
    const endIndex = page *limit
    const results = {}

    
      results.next = {
        page:page +1,
        limit:limit
    }
    
    
    if(startIndex>0){
      results.previous = {
        page:page - 1,
        limit:limit,
      }
    }
    
try {
    results.resultPosts = await model.find().limit(limit).skip(startIndex).exec()
    res.paginatedResults = results
    next()
}catch{

res.status(500).json({message:"error"})
}
   
  
    }


}
module.exports = Pagination