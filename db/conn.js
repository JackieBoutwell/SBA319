import { MongoClient } from "mongodb";

const client = new MongoClient(process.env.ATLAS_URI);

let conn;
try {
    conn = await client.connect();
    console.log("mongo connected")
} catch (e) {
  console.error(e);
}

let db = conn.db("plants");

export default db;
