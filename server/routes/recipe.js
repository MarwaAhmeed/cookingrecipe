
const express = require("express");
const controlRecipe = require("../controllers/recipe");
const router = express.Router();
const auth = require("../middelware/index,js")


router.get("/", (req, res, next) => {
    controlRecipe.findAll({}).then((data) => {
        res.json(data);
    }).catch((err) => {
        res.status(404).end()
    })
})

router.get("/recipeType/:recipeType", (req, res, next) => {
    console.log(req.params.recipeType,"mmmmmmmmmmmmmmmmmmmm")
    controlRecipe.findByRecipeType(req.params.recipeType).then((data) => {
        console.log(data,"dataaaaa")
        res.json(data);
    }).catch((err) => {
        res.status(404).end()
    })
    console.log("frommmmmmmmmmmmmm typeeeeeeeeeee")
})

router.get("/:id", (req, res, next) => {
    const { id } = req.params;
    controlRecipe.findOne(id)
        .then((recipe) => {
            res.json(recipe);
        })
        .catch(() => {
            res.status(404).json({ "err": "in valid id" })
        })
})

router.post("/", auth, (req, res, next) => {
    console.log(req.body);
    controlRecipe.create(req.body).then((user) => {
        res.json(user);
    }).catch((err) => {
        res.status(422).send(err.message)
    })
})


router.patch("/:id", auth, (req, res, next) => {
    const id = req.params;
    controlRecipe.editOne(id, req.body).then((recipe) => {
        res.json(recipe);
    }).catch((err) => {
        res.status(422).send(err.message);
    })
})

router.delete("/:id", auth, (req, res, next) => {
    const id = req.params
    controlRecipe.delOne(id).then(() => {
        res.status(200).end()
    }).catch((err) => {
        res.status(422).end()
    })
})
module.exports = router;