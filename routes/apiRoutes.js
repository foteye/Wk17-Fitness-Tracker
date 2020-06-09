const db = require('../models');

module.exports = function (app) {

    app.get("/api/workouts/range", async function (req, res) {
        try {
            const exercise = await db.Exercise.find({})
            res.status(200).json(exercise);
        } catch (err) {
            res.status(400).json(err);
        }
    });

    app.get("/api/workouts", async function (req, res) {
        try {
            const exercise = await db.Exercise.find({})
            res.status(200).json(exercise);
        } catch (err) {
            res.status(400).json(err);
        }
    })

    app.post("/api/workouts", async function (req, res) {
        try {
            const workout = req.body
            const exercise = await db.Exercise.create(workout)
            res.status(200).json(exercise);
        } catch (err) {
            res.status(400).json(err);
        }
    });

    app.put("/api/workouts/:id", async function (req, res) {
        const id = req.params.id;
        const {
            type,
            name,
            distance,
            weight,
            sets,
            reps,
            duration
        } = req.body;
        try {
            const exercise = await db.Exercise.updateOne({
                _id: id
            }, {
                $push: {
                    exercises: [{
                        type,
                        name,
                        weight,
                        sets,
                        reps,
                        distance,
                        duration
                    }]
                }
            })
            res.status(200).json(exercise);
        } catch (err) {
            res.status(400).json(err)
        }
    });
};