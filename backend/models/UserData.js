import mongoose from "mongoose";

const user = mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  email: String,
});

// Transforms the Schema into a model
const UserData = mongoose.model("Users", user);

export default UserData;
