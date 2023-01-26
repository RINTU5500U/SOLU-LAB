const joi = require('joi')
joi.objectId = require('joi-objectid')(joi)

const passwordResponse = {'string.pattern.base': ` "Password should be minimum 8 and maximum 15 character.It contains atleast--> 1 Uppercase letter, 1 Lowercase letter, 1 Number, 1 Special character"`}
const stringErrors = (check) => {
    let messages = {"string.base": `${check} should be a type of 'String'.`,"string.empty": `${check} cannot be an empty field.`,"any.required": `${check} is a required field.`}
    return messages
}
const numberErrors = (check) => {
    let messages = {"number.base": `${check} should be a type of 'Number'.`,"number.empty": `${check} cannot be an empty field.`,"any.required": `${check} is a required field.`}
    return messages
}        

module.exports = {
    //SCHEMA VALIDATION FOR USERMODEL
    userModel: joi.object({
        title: joi.string().trim().regex(/^(Mr|Mrs|Miss)+$\b/).messages({'string.pattern.base': `Title should be among [Mr,Mrs,Miss]`}).required().messages(stringErrors("Title")),
         name: joi.string().trim().regex(/^[A-Za-z ]+$/).messages({'string.pattern.base': `Plz enter a valid name.`}).required().messages(stringErrors("Username")),
        phone: joi.string().trim().regex(/^[0-9]{10}$/).messages({'string.pattern.base': `Phone number must have 10 digits only.`}).required().messages(stringErrors("Mobile number")),
        email: joi.string().trim().regex(/.+\@.+\..+/).messages({'string.pattern.base': `Plz enter a valid emailId`}).required().messages(stringErrors("emailId")),
     password: joi.string().trim().min(8).messages({'string.min': 'password should be minimum 8 characters'}).max(15).messages({'string.max': 'password should be maximum 15 characters'})
     .regex(/^\S{8,24}$/).messages(passwordResponse).required().messages(stringErrors("Password"))
    }),
    updateUserModel: joi.object({
        title: joi.string().trim().regex(/^(Mr|Mrs|Miss)+$\b/).messages({'string.pattern.base': `Title should be among [Mr,Mrs,Miss]`}).messages(stringErrors("Title")),
         name: joi.string().trim().regex(/^[A-Za-z ]+$/).messages({'string.pattern.base': `Plz enter a valid name.`}).messages(stringErrors("Username")),
        phone: joi.string().trim().regex(/^[0-9]{10}$/).messages({'string.pattern.base': `Phone number must have 10 digits only.`}).messages(stringErrors("Mobile number")),
        email: joi.string().trim().regex(/.+\@.+\..+/).messages({'string.pattern.base': `Plz enter a valid emailId`}).messages(stringErrors("emailId")),
     password: joi.string().trim().min(8).messages({'string.min': 'password should be minimum 8 characters'}).max(15).messages({'string.max': 'password should be maximum 15 characters'})
     .regex(/^\S{8,24}$/).messages(passwordResponse).messages(stringErrors("Password"))
    }),
     //LOGIN VALIDATION
    loginValidation: joi.object({
        email: joi.string().trim().regex(/.+\@.+\..+/).messages({'string.pattern.base': `emailId is in inValid format`}).required().messages(stringErrors("emailId")),
     password: joi.string().trim().min(8).messages({'string.min': 'password should be minimum 8 characters'}).max(15).messages({'string.max': 'password should be maximum 15 characters'})
                  .regex(/^\S{8,24}$/).messages(passwordResponse).required().messages(stringErrors("Password"))
              }),
    //SCHEMA VALIDATION FOR PRODUCTMODEL
    productValidation: joi.object({
        productName: joi.string().trim().regex(/^[A-Za-z ]+$/).messages({'string.pattern.base': `Plz enter a valid product name.`}).required().messages(stringErrors("Product name")),
        qtyPerUnit: joi.number().required().messages(numberErrors("Quantity per unit")),
        unitPrice: joi.number().required().messages(numberErrors("Unit price")),
        unitInStock: joi.number().required().messages(numberErrors("Unit in Stock")),
        discontinued: joi.boolean()
    }),
    updateProductModel: joi.object({
        productName: joi.string().trim().regex(/^[A-Za-z ]+$/).messages({'string.pattern.base': `Plz enter a valid product name.`}).messages(stringErrors("Product name")),
        qtyPerUnit: joi.number().messages(numberErrors("Quantity per unit")),
        unitPrice: joi.number().messages(numberErrors("Unit price")),
        unitInStock: joi.number().messages(numberErrors("Unit in Stock")),
        discontinued: joi.boolean()
    })
}