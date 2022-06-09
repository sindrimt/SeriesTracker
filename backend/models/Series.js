import mongoose from "mongoose";

const series = mongoose.Schema({
  userId: {
    type: String,
    required: true,
  },

  title: {
    type: String,
    required: true,
  },

  username: String,

  description: String,

  rating: Number,

  photoUrl: String,

  episodesWatched: Number,

  episodeCount: Number,

  watchTime: String,

  age: String,

  websiteUrl: String,
});

// Transforms the Schema into a model
const Series = mongoose.model("Series", series);

export default Series;
