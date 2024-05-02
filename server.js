import express from "express";
import 'dotenv/config'

const PORT = 3010;
const app = express();

app.get('/', (req, res) => {
    res.json({msg: "Welcome to the app"})
})

// Start the Express server
app.listen(process.env.PORT, () => {
  console.log('listening on port',process.env.PORT);
});

