const express = require('express')
const app = express()
require('dotenv').config()
app.use(express.json());


const cors = require('cors')
const port =process.env.port || 5000
app.use(cors())
const { MongoClient, ServerApiVersion } = require("mongodb");
const uri=`mongodb+srv://${process.env.USERNAME}:${process.env.PASSWORD}}@cluster0.btoo0iq.mongodb.net/?retryWrites=true&w=majority`;
const client = new MongoClient(uri);

const run =async()=>{
    try{
      await client.connect()
      app.get('/', (req, res) => {
        res.send('Hello World!')
      })
    }
    catch{
      err=>console.log(err.message)
    }
  }
  run().then().catch(err=>console.log(err))


  const db = client.db("falsyAdmin");
  const collection = db.collection("complaints");

  app.get("/complaints", async (req, res) => {
    try {
     
      const cursor = collection.find({});
      const result = await cursor.toArray();
      res.send(result);
    } catch (err) {
      console.log(err.message);
    }
  });

    app.post("/add-complaints", async (req, res) => {

        try {
            const result = await collection.insertOne(req.body);
            res.send(result);
            } catch (err) {
            console.log(err.message);
            }
    }
    ); 


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})