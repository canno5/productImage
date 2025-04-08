const express = require("express");
const router = express.Router();
router.get("/", (req,res)=>{
    res.render("index");
});

router.get("/men", (req,res)=>{
    res.render("men");
});
router.get("/women", (req,res)=>{
    res.render("women");
});
router.get("/sports", (req,res)=>{
    res.render("sport");
});
router.get("/toys", (req,res)=>{
    res.render("toys");
})
router.get("/electronic", (req,res)=>{
    res.render("electronic");
});

router.get("/shoes", (req,res)=>{
    res.render("menshoes");
});
router.get("/headphone", (req,res)=>{
    res.render("headphone");
});

router.get("/homelifestyle", (req,res)=>{
    res.render("womenshoes");
});
router.get("/icon", (req,res)=>{
    res.render("icon");
});
router.get("/catagory", (req,res)=>{
    res.render("catagory");
});


module.exports = router;