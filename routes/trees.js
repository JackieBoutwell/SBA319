// import express from 'express';
// import trees from "../models/treesModel.js";

// const router = express.Router();

// // GET all tree data
// router.get("/", (req, res)=> {
//  res.json({message: "Get all trees"})
// }); 

// //GET a single tree data
// router.get('/:id', (req, res) => {
//   res.json({ mssg: 'Get a single tree' })
// });

// //POST a new tree data set

// router.post('/', async (req, res) => {
//     const { common_name, plant_family, scientific_name } = req.body

//     try {
//         const treeData = await trees.create({ common_name, plant_family, scientific_name })
//         res.status(200).json(treeData)
//     } catch (error) {
//         res.status(400).json({error: error.message})
//     }
// });

// //Delete a tree
// router.delete('/:id', (req, res) => {
//   res.json({ mssg: 'Delete a tree ' })
// });

// //UPDATE a tree
// router.patch('/:id', (req, res) => {
//   res.json({ mssg: 'update tree' })
// });

// export default router;