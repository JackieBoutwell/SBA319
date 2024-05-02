import express from "express";
import 'dotenv/config';
// import db from "./db/conn.js"
import mongoose from "mongoose";

import Plant from "./models/plant.js"
import plants from "./models/plants.js"

//express app
const app = express();

await mongoose.connect(process.env.ATLAS_URI);

//middleware
app.use((req, res, next) => {
  console.log(req.path, req.method)
  next()
})

//middleware
app.use(express.json());

//seed route
// app.get("/plants/seed", seed)
app.get('/plants/seed', async (req, res) => {
    await Plant.deleteMany({})
    await Plant.create(plants)
    res.json('added data to database')
})

app.get('/plants/', async (req, res) => {
  let plantData = await Plant.find({})
   res.json(plantData)
})

//routes
app.get('/', (req, res) => {
    res.json({msg: "Welcome to the app"})
})

// Start the Express server
//listen for request
app.listen(process.env.PORT, () => {
  console.log('listening on port',process.env.PORT);
});

