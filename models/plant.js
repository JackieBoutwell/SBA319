import mongoose from "mongoose";

const plantSchema = new mongoose.Schema({
    common_name: { type: String, required: true },
    plant_family: { type: String, required: true},
    scientific_name: { type: String,required: true },
    sunlight_requirements: { type: String, required: true },
    water_requirements: { type: String, required: true },
    region: { type: String, required: true },
    grow_zone: { type: String, required: true },
    hardiness: { type: String, required: true },
}, { timestamp: true })

export default mongoose.model('plant', plantSchema)



// export default flowerPlants;


// import mongoose from "mongoose";

// const plantSchema = new mongoose.Schema({
//       common_name: { type: String },
//       family_name: { type: String },
//       scientific_name: { type: String }
// })

// export default mongoose.model('plant', plantSchema)
