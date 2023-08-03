const mongooes = require("mongoose");
const URL = process.env.MONGO_URL;
exports.mongooesConnect = () => {
  try {
    mongooes.connect(URL);
    console.log("MongoDb is Connected!");
  } catch (error) {
    console.log(error, "unable To connect with mongo!");
  }
};
