const Joi=require('joi');



module.exports=(course)=>{
    const schema=Joi.object({ name: Joi.string() .min(3)})
   return schema.validate(course)
}