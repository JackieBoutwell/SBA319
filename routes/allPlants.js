import express from 'express';
import plant from "../models/plant.js";

import { getAllPlants, getOnePlant, createPlant, deletePlant, updatePlant } from "../controller/plants.js"

const router = express.Router();

// GET all plant
router.get('/', getAllPlants)

// GET a single plant
router.get('/:id', getOnePlant)

// POST a new plant
router.post('/', createPlant)

// DELETE a plant
router.delete('/:id', deletePlant)

// UPDATE a plant
router.patch('/:id', updatePlant)

export default router;