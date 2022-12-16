var cloudinary = require("cloudinary").v2;

cloudinary.config({
  cloud_name: "dimyszijs", //process.env.CLOUD_NAME,
  api_key: "459428982395593", //process.env.API_KEY,
  api_secret: "dSEe-DKqLF3xEE1NcO5q9AJD5Pw", //process.env.API_SCRE
});

module.exports = cloudinary;
