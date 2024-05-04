import express from 'express';
import plant from "../models/plant.js";

const router = express.Router();

// GET all plant data
router.get("/", async (req, res) => {
    let plantData = await plant.find({})
    res.json(plantData);
    //res.json({message: "Get all plant"})
}); 

//GET a single plant data
router.get('/:id', async (req, res) => {
    let plantData = await plant.find({ "_id": req.params.id })
  res.json(plantData)
});

//POST a new plant data set

router.post('/', async (req, res) => {
    const { common_name, plant_family, scientific_name, hardiness, sunlight_requirements, water_requirements, region, grow_zone } = req.body

    try {
        const plantData = await plant.create({ common_name, plant_family, scientific_name, hardiness, sunlight_requirements, water_requirements, region, grow_zone })
        res.status(200).json(plantData)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
});

//DELETE a plant
router.delete('/:id', async (req, res) => {
  try {
    let plantData = await plant.deleteOne({ "_id": req.params.id })
    res.send(plantData);
    // res.json({ mssg: 'Delete a plant ' })
  } catch (error) {
    res.send("Error in Deleting the plant data").status(400);
  }
});

//UPDATE a plant
router.put('/:id', async (req, res) => {
      try {
        let plantData = await plant.updateMany({ $set: { "common_name": req.body.common_name } })
      res.send(plantData)
      } catch (error) {
        res.send(error.message).status(400);
    }
});

export default router;