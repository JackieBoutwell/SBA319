import mongoose from "mongoose";

const treesSchema = new mongoose.Schema({
    common_name: { type: String, required: true },
    plant_family: { type: String, required: true},
    scientific_name: { type: String,required: true },
    sunlight_requirements: { type: String, required: true },
    water_requirements: { type: String, required: true },
    region: { type: String, required: true },
    grow_zone: { type: Number, required: true },
    hardiness: { type: String, required: true },
}, { timestamp: true })


        
export default mongoose.model('trees', treesSchema)