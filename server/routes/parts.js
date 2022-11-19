let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

let Parts = require('../models/parts');

router.get('/',(req,res,next)=>{
    Parts.find((err, parts)=>{
        if(err)
        {
            return console.error(err);
        }
        else
        {
            res.render('partlist',{title:"Parts",PartList: parts});
        }
    });
});

router.get('/add',(req,res,next)=> {
    res.render('parts/add',{title:"Add a Part"})
});

router.post('/add',(req,res,next)=>{
    let newPart = Parts ({
        "type":req.body.type,
        "name":req.body.name,
        "link":req.body.link,
        "price":req.body.price
    });
    Parts.create(newPart,(err,Parts) => {
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            res.redirect('/partslist');
        }
    })
});

router.get('/edit/:id',(req,res,next)=>{
    let id = req.params.id;
    Parts.findById(id,(err,partToEdit) => {
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            res.render('parts/edit',{title:"Edit Part", parts:partToEdit});
        }
    })
});

router.post('/edit/:id',(req,res,next)=>{
    let id = req.params.id;
    let updatePart = Parts ({
        "_id":id,
        "type":req.body.type,
        "name":req.body.name,
        "link":req.body.link,
        "price":req.body.price
    });
    Parts.updateOne({_id:id},updatePart,(err) => {
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            res.redirect('/partslist');
        }    
    });
});



router.get('/delete/:id',(req,res,next)=>{
    let id = req.params.id;
    Parts.deleteOne({_id:id},(err)=>{
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            res.redirect('/partslist');
        }
    });
});


module.exports = router;