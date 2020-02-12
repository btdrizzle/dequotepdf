const router = require("express").Router();
var db = require("../models");

router.get("/parts", (req,res) => {
    db.Part.findAll({}).then(data => {
        res.status(200).json(data);
    })
})


module.exports = router;