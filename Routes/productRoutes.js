const express = require('express')
const Product = require('../models/Product')

const router = express.Router()



router.post('/add', async function (req, res) {
    try {
        const existProduct = await Product.findOne({ name: req.body.name }) 
        if(existProduct){
            res.status(400).send({"msg" : "product exist"})
        }else {
            const newProduct = new Product({
            ...req.body
        })
        await newProduct.save()
        res.send({msg : "product added"})
        }
    
    } catch (error) {
        console.log(error)
    }
})

router.get('/', async function (req, res) {
    // console.log(req.query.price)
  try {
    // const price = req.query.price || 0
    const allProduct = await Product.find({$and:[{price : {$gte:req.query.price || 0}}, {name : {$regex:req.query.name || ""}}]})
    res.send({allProduct})
  } catch (error) {
    console.log(error)
  }
})

module.exports = router 



