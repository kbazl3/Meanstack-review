const Food = require('../models/Food');

module.exports = {

    addFood: (req, res) => {
        new Food(req.body).save((err, data) => {
            console.log(req.body);
            if (err) {
                res.status(500).send(err);
            } else {
                res.send(data);
            }
        });
    },

    getFood: (req, res) => {
        Food.find().then((response) => {
            res.send(response);
        })
    },

    addReview: (req, res) => {
        Food.findById(req.query.id, (err, foodItem) => {
            if (err) {
                res.status(500).send(err);
            } else {
                foodItem.reviews.push(req.body);
                foodItem.save((err, data) => {
                    if (err) {
                        res.status(500).send(err)
                    } else {
                        res.send(data);
                    }
                });
            }
        })
    },

    getOneReview: (req, res) => {
        Food.findById(req.query.foodId, (err, foodItem) => {
            if (err) {
                res.status(500).send(err);
            } else {
                res.send(foodItem.reviews.id(req.query.reviewId));
            }
        })
    },

    deleteFood: (req, res) => {
        console.log(req.query.foodId);
        Food.findByIdAndRemove(req.query.foodId, (err, foodItem) => {
            if (err) {
                res.status(500).send(err);
            } else {
                res.send(foodItem)
            }
        })
    }
}
//db.things.remove({_id: ObjectId("4f6f244f6f35438788aa138f")});
