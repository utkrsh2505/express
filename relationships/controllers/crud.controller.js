

//create 
const createOne = (model) => async(req,res)=>{
    const item = await model.create(req.body);
    res.status(201).json(item);
};

//read many 
const getAll = (model)=>async(req,res)=>{
    const item = await model.find();
    res.status(200).json(item)
}
//read one

const getOne = (model)=>async(req,res)=>{
    const item = await model.findById(req.params.id);
    res.status(200).json(item)
}

//updateOne 
const updateOne = (model)=>async(req,res)=>{
    const item = await model.findByIdAndUpdate(req.params.id,req.body,{new:true})
    res.status(200).json(updateItem)
}
const deleteOne =(model)=>async(req,res)=>{
    const deleteOne = await model.findByIdAndDelete(req.params.id);
    res.status(200).json(deleteOne)
}

module.exports = (model) =>({
    post : createOne(model),
    getOne : getOne(model),
    getAll : getAll(model),
    updateOne : updateOne(model),
    deleteOne : deleteOne(model)
})