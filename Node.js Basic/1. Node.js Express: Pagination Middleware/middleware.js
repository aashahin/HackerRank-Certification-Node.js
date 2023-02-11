module.exports = (req, res, next) => {
  const page=Number(req.query.page)||1
  const limit=Number(req.query.limit)||3
  const skip=(page - 1) * limit
  const searchTerm=req.query.q||''
  const search=new RegExp( searchTerm, 'gi' )||''
  let context
  context={page,limit,skip,search,searchTerm}
  req.context=context;
  next();
};