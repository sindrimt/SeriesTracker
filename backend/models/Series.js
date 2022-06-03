import mongoose from "mongoose";

const series = mongoose.Schema({
  connectedTo: {
    type: String,
    required: true,
  },

  series: {
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
  },
});

// Transforms the Schema into a model
const Series = mongoose.model("Series", series);

export default Series;
