import express from 'express';
const router = express.Router();


// GET all tree data
router.get("/", (req, res)=> {
 res.json({message: "Get all trees"})
}); 

//GET a single tree data
router.get('/:id', (req, res) => {
  res.json({ mssg: 'Get a single tree' })
});

//POST a new tree data set
router.post('/', (req, res) => {
  res.json({ mssg: 'Post a new data tree ' })
});

//Delete a tree
router.delete('/:id', (req, res) => {
  res.json({ mssg: 'Delete a tree ' })
});

//UPDATE a tree
router.patch('/:id', (req, res) => {
  res.json({ mssg: 'Get a single workout' })
});

// router.use('/tree', treeRouter);
// router.get('/', () => { })

// app.get('/:id', async (req, res) => {
//     let collection = await db.collection("grades")
//     let query = { _id: new ObjectId(req.params.id) }

//     // db.grades.find({ _id: req.params.id })

//     let result = await collection.findOne(query)

//     res.send(result).status(200)
// })

export default router;