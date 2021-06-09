const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const houses = require("./routes/houses");

const app = express();

app.use(cors());

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Welcome to the house listing API");
});

app.use("/api/houses", houses);

require("dotenv").config();

const PORT = process.env.PORT || 3000;

mongoose
  .connect(
    `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@react-native-home-listi.fsj5s.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`,
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then((result) => {
    app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
  })
  .catch((err) => console.log(err));

// const homes = [
//     {
//         id: 1,
//         type: "Apartment",
//         description: "Well furnished apartment"
//     },
//     {
//         id: 2,
//         type: "Flat",
//         description: "Well furnished flat at flatville"
//     }
// ]

// app.get("/", (req, res) => {
//     res.send("Welcome to express");
// });

// app.get("/api/listing", (req, res) => {
//     res.send(homes)
//     // res.send([{ id: 1, roomType: "Duplex" }, { id: 2, roomType: "Flat" } ])
// })

// app.get("/api/listing/:id", (req, res) => {
//    const home = homes.find(home => home.id === parseInt(req.params.id));
//    if (!home) {
//         res.status(404).send("The home with the given id cant be found");
//    }
//    res.send(home)
// //    res.send(req.params.id);
// });

// app.post("/api/listing", (req,res) => {

//     if (!req.body.type || !req.body.description) {
//         return res.status(400).send("Title and description is required")
//     }

//     const home = {
//         id: homes.length + 1,
//         type: req.body.type,
//         description: req.body.description
//     }

//     homes.push(home);
//     res.send(home);
// });

// app.put("/api/listing/:id", (req, res) => {
//     const home = homes.find(home => home.id === parseInt(req.params.id));
//     if (!home) {
//         return res.status(404).send("The home with the given id cant be found");
//     }

//     home.type = req.body.type;
//     home.description = req.body.description;

//     res.send(home);
// });

// app.delete("/api/listing/:id", (req,res) => {
//     const home = homes.find(home => home.id === parseInt(req.params.id));
//     if (!home) {
//         return res.status(404).send("The home with the given id cant be found");
//     }

//     const index = homes.indexOf(home);
//     homes.splice(index, 1);
//     res.send(home);
// })

// {
//     "type": "Bungalow",
//     "description": "A small porch building"
// }
