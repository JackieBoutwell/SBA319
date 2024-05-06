import express from "express";
import 'dotenv/config';

// import db from "./db/conn.js"
import mongoose from "mongoose";

//import schema from mongoose
// import Plant from "./models/plant.js"

// import Routes
import plantRoutes from './routes/allPlants.js'

// // import Seed function
// import { seedData } from './models/seedFunction.js';
//express app
const app = express();

//Connecting to db
await mongoose.connect(process.env.ATLAS_URI)
  .then(() => {
  
// Start the Express server
//listen for request
app.listen(process.env.PORT, () => {
  console.log('connect to db & listening on port', process.env.PORT);
})
})
  .catch ((error) => {
    console.log(error)
  })

//middleware
app.use((req, res, next) => {
  console.log(req.path, req.method)
  next()
})

//middleware
app.use(express.json());
// app.use('/api/allPlants', allPlantRoutes)
app.use('/api/plants', plantRoutes)


//BLOCKER NEED TO ADD SEED FUNCTION IN MODELS FOLDER

//BLOCKER MOVED THIS TO MY CONTROLLER FOLER.

// seed route
// app.get("/plants/seed", seed)


// app.get('/plants/seed', async (req, res) => {
//   // await Plant.deleteMany({})
//   //   await Plant.create(plants)
//   await seedData()
//     res.json('added data to database')
// })

// app.get('/', async (req, res) => {
//   let seedData = await Plant.find({})
//   res.json(seedData)
// res.json({message: "WELCOME"})
// })


//seed route
// app.get("/plants/seed", seed)
// app.get('/trees/seed', async (req, res) => {
//     await Plant.deleteMany({})
//     await Plant.create(treeRoutes)
//     res.json('added data to database')
// })

// app.get('/trees/', async (req, res) => {
//   let plantData = await Plant.find({})
//    res.json(plantData)
// })


