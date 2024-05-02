import mongoose from "mongoose";

const plantSchema = new mongoose.Schema({
      common_name: { type: String },
      family: { type: String },
      scientific_name: { type: String }
})

export default mongoose.model('plant', plantSchema)