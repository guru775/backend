const cloudinary = require("../cloudinary/cloudinary");

const express = require("express");

const route = express();

const fileupload = require("express-fileupload");

const postSchema = require("../schema/schema");

route.use(express.json({ limit: "5mb" }));

route.use(fileupload({ useTempFiles: true }));

const body = require("body-parser");

route.use(express.urlencoded());

route.use(body.urlencoded({ extended: true }));

route.use(body.json());

route.get("/getPost", async (req, res) => {
  const data = await postSchema.find();

  res.status(200).json(data);
});

route.get("/getDetails", async(req, res) => {
   res.status(200).send("hello world!");
})

route.post("/createPost", async (req, res) => {
  try {
    const img = req.files.PostImage.tempFilePath;

    const { name, location, description } = req.body;

    const imgage = await cloudinary.uploader.upload(img, {
      public_id: `${Date.now()}`,
      resource_type: "auto",
      folder: "images",
    });

    const data = await postSchema.create({
      name: name,
      location: location,
      description: description,
      PostImage: imgage.secure_url,
    });

    data.save();
    res.status(200).json({
      message: "Post Saved",
    });
  } catch (e) {
    return res.json({
      status: e.message,
    });
  }
});

module.exports = route;
