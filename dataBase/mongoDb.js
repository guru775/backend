const mongoose = require("mongoose");

mongoose.set("strictQuery", false);

const db = () => {
  return mongoose
    .connect(
      "mongodb+srv://guruprakash:guru1999@social.zxambn1.mongodb.net/?retryWrites=true&w=majority"
    )
    .then(() => {
      console.log("CONNECTED");
    })
    .catch((e) => {
      console.log(e.message);
    });
};
module.exports = db;
