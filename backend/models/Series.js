import mongoose from "mongoose";

const series = mongoose.Schema({
  username: {
    type: String,
    required: true,
  },

  title: {
    type: String,
    required: true,
  },

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
