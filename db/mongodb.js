import mongoose from "mongoose";

const connectDB = async () => {
  await mongoose;
  mongoose
    .set("strictQuery", true)
    .connect(
      "mongodb+srv://Ritesh123:Ritesh123@cluster0.qtimigr.mongodb.net/",
      {
        useNewUrlParser: "true",
        useUnifiedTopology: "true",
      }
    )
    .then(() => {
      console.log("connected to db");
    })
    .catch((error) => console.log(error));
};

export default connectDB;
