const express = require("express");
const app = express();
const mongoose = require('mongoose')
const multer = require("multer")
const {v4: uuidv4 } = require('uuid')
const path = require("path")
const itemModel = require("../models/produkte")

const storage = multer.diskStorage({
destination: function (req, file, cb) {
cb(null, 'images');
},
filename: function (req, file, cb) {
cb(null, uuidv4() + '-' + Date.now() + path.extname(file.originalname))
}
})
const fileFilter = (req, file, cb) => {
const allowedFileTypes = ['image/jpeg', 'image/jpg', 'image/png'];
if (allowedFileTypes.includes(file.mimetype)) {
cb(null, true)
} else {
cb(null, false)
}}
let upload = multer({ storage, fileFilter })
app.post("/create", upload.single('photo'), async (req, res) => {
try {

const newItem = new itemModel({
...req.body,
photo: req.file.filename });
await newItem.save();
console.log(newItem)
res.status(200).send(newItem);
} catch (err) {
console.error("Error creating item:", err);
res.status(500).send("Not created" + err);
}
});
app.get("/readAll", async (req, res) => {
try {


const items = await itemModel.find({});
console.log(items)
res.status(200).send(items);
} catch (err) {
console.log("Date not shown" + err)
res.status(500).send("Date not shown" + err);
}
});
app.get("/readOne/:id", async (req, res) => {
try {
const itemId = req.params.id;
const item = await itemModel.findById({ _id: itemId });
res.status(200).send(item);
} catch (err) {
console.log("Info not shown " + err);
res.status(500).send("Info not shown " + err);
}
});

app.patch("/update/:id", upload.single('photo'), async (req, res) => {
try {

const itemId = req.params.id;
const itemInfo = {...req.body};
if (req.file) {
itemInfo.photo = req.file.filename;
}
const itemUpdated = await itemModel.findByIdAndUpdate(
{_id: itemId},
{$set: itemInfo},
{new: true}
);
console.log("Data update" + itemUpdated);
res.status(200).send(itemUpdated);
} catch (err) {
console.log("Item not updated " + err);
res.status(500).send("Item not updated " + err);
}
});

app.delete("/delete/:id", async (req, res) => {
try {
const itemId = req.params.id;
await itemModel.deleteOne({_id: itemId });
console.log("Item Deleted");
res.status(200).send("Item Deleted");
} catch (err) {
console.log("Item not deleted " + err);
res.status(500).send("Item not deleted " + err); }
});

module.exports=app