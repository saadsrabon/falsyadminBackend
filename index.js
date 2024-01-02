const express = require('express')
const app = express()
require('dotenv').config()
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
app.use(express.json());


const cors = require('cors')
const port =process.env.PORT || 5000
app.use(cors())
const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
const uri=`mongodb+srv://${process.env.USER_NAME}:${process.env.PASSWORD}@cluster0.btoo0iq.mongodb.net/?retryWrites=true&w=majority`;

const client = new MongoClient(uri);            

// const userSchema = new mongoose.Schema({
//   email: String,
//   password: String,
// });

// const User = mongoose.model('User', userSchema);

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
  const userCollection = db.collection("users");

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

    // add Comment on complaints
    app.post("/add-comment", async (req, res) => {
      const {id,comment} = req.body;
      try {
        const result = await collection.updateOne(
          { _id:new ObjectId(id) },
          {
            $push: {
              comments: comment,
            },
          }
        );
        res.send(result);
      } catch (err) {
        console.log(err.message);
      }
    });

    // upvote complaints
    app.post("/upvote", async (req, res) => {
      const {id} = req.body;
      try {
        const result = await collection.updateOne(
          { _id:new ObjectId(id) },
          {
            $inc: {
              vote: 1,
            },
          }
        );
        res.send(result);
      } catch (err) {
        console.log(err.message);
      }
    });
    // downvote complaints
    app.post("/downupvote", async (req, res) => {
      const {id} = req.body;
      try {
        const result = await collection.updateOne(
          { _id:new ObjectId(id) },
          {
            $inc: {
              vote: -1,
            },
          }
        );
        res.send(result);
      } catch (err) {
        console.log(err.message);
      }
    });
    app.post("/downdownvote", async (req, res) => {
      const {id} = req.body;
      try {
        const result = await collection.updateOne(
          { _id:new ObjectId(id) },
          {
            $inc: {
              downvote: 1,
            },
          }
        );
        res.send(result);
      } catch (err) {
        console.log(err.message);
      }
    });
    app.post("/updownvote", async (req, res) => {
      const {id} = req.body;
      try {
        const result = await collection.updateOne(
          { _id:new ObjectId(id) },
          {
            $inc: {
              downvote: 1,
            },
          }
        );
        res.send(result);
      } catch (err) {
        console.log(err.message);
      }
    });

  // Create User
  app.post('/signup', async (req, res) => {
    try {
      const hashedPassword = await bcrypt.hash(req.body.password, 10);
      const newUser = userCollection.insertOne({
        email: req.body.email,
        password: hashedPassword,
      })
      res.status(201).send(newUser);
    } catch (error) {
      res.status(500).send('Error creating user');
    }
  });
  

  app.post('/login', async (req, res) => {
    const user = await userCollection.findOne({ email: req.body.email });
    if(user && await bcrypt.compare(req.body.password, user.password)) {
      res.status(200).send(user);
    } else {
      res.status(401).send('Invalid credentials');
    }
  });
  
  // log out user
  



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})