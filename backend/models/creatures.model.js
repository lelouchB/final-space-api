const mongoose = require("mongoose")

const creatureSchema = new mongoose.Schema(
    {
        id: Number,
        name: String, 
        status: String,
        alias: Array,
        origin: String,
        abilities: Array,
        img_url: String
    },
    {
        collection: "creatures"
    },
    { timestamps: true }
)

creatureSchema.statics.structure = (res) => {
    const sortSchema = ({
        id,
        name,
        status,
        alias,
        origin,
        abilities,
        img_url
    }) => ({
        id,
        name,
        status,
        species,
        gender,
        hair,
        alias,
        origin,
        abilities,
        img_url
    })

    return Array.isArray(res) ? res.map(sortSchema) : sortSchema(res)
}

const Creature = mongoose.model("creatures", creatureSchema)

module.exports = Creature