// add auth,adminAuth -> admin only can create, update and delete the datas
// put -> update all products 
// patch -> update indivigual product (almost all crud operation we can go for patch)

const productRoute = require('express').Router()
const ProductController = require('../controller/productController')
const adminAuth = require('../middleware/adminAuth')
const auth = require('../middleware/auth')

productRoute.get(`/all`, ProductController.getAll)
productRoute.get(`/single/:id`, ProductController.getSingle)

productRoute.post(`/create`, auth, adminAuth, ProductController.create)

productRoute.patch(`/update/:id`, auth, adminAuth, ProductController.update)

productRoute.delete(`/delete/:id`, auth, adminAuth, ProductController.delete)

module.exports = productRoute