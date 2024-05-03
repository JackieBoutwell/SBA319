import Plant from './plant.js';

// import Garden from './gardenModel.js';
// import Herb from './herbModel.js';

import flowerPlantsSeed from '../db/flowerPlants.js';
import gardenPlantsSeed from '../db/gardenPlants.js';
import herbPlantsSeed from '../db/herbPlants.js';

async function seedData(){
    try {
        await Plant.deleteMany({});
        // await Garden.deleteMany({});
        // await Herb.deleteMany({});

        await Plant.insertMany([...flowerPlantsSeed, ...gardenPlantsSeed, ...herbPlantsSeed, ])

        // await Garden.insertMany(gardenPlantsSeed)
        // await Herb.insertMany(herbPlantsSeed)
        console.log("Seeded database correctly")
    }catch(e){
        console.log("Error seeding data: ", e)
    }
}

export {seedData}