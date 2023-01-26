const {userModel, updateUserModel, loginValidation, productValidation, updateProductModel} = require('../utilities/validation')

module.exports = {
    userValidation: (req, res, next) => {
        const { error } = userModel.validate(req.body)
        if (error) {
            return res.status(400).send({ status: false, message: error.message })
        } else next()
    },
    updateUserValidation: (req, res, next) => {
        const { error } = updateUserModel.validate(req.body)
        if (error) {
            return res.status(400).send({ status: false, message: error.message })
        } else next()
    },
    loginValidation: (req, res, next) => {
        const { error } = loginValidation.validate(req.body)
        if (error) {
            return res.status(400).send({ status: false, message: error.message })
        } else next()
    },
    productValidation: (req, res, next) => {
        const { error } = productValidation.validate(req.body)
        if (error) {
            return res.status(400).send({ status: false, message: error.message })
        } else next()
    },
    updateProductModel: (req, res, next) => {
        const { error } = updateProductModel.validate(req.body)
        if (error) {
            return res.status(400).send({ status: false, message: error.message })
        } else next()
    },
}