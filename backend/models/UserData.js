import mongoose from "mongoose";

const user = mongoose.Schema({
  _id: {
    type: String,
    required: true,
  },

  username: String,

  series: [String],

  email: String,

  photoUrl: String,

  googlePhotoUrl: String,
});

// Transforms the Schema into a model
const UserData = mongoose.model("Users", user);

export default UserData;
