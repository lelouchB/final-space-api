const Creature = require("./../models/creatures.model")
const options = require("./../helpers/options")

const getAllCreatures = async (req, res) => {
    await Creature.find({}, options(req, res), (err, creatures) => {
        if (err) {
            return res.status(500).send({
                successs: false,
                message: "Something went wrong"
            })
        }

        res.set("Cache-Control", "public, max-age=315576")
        return res.json(Creature.structure(creatures))    
    })
}

const getCreature = async (req, res) => {
    const id = req.params.id
    await Creature.findOne({id: id}, (err, creature) => {
        if (err) {
            return res.status(500).send({
                success: false,
                message: "Something went wrong"
            })
        }

        res.set("Cache-Control", "public, max-age=315576")
        return res.json(Creature.structure(creature)) 
    })
}

module.exports = {
    getAllCreatures,
    getCreature
}