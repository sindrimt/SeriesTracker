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

    episodesWatched: Number,

    episodeCount: Number,

    rating: Number,

    description: String,

    photoUrl: String,

    watchTime: String,

    age: String,

    websiteUrl: String,

    episodeLength: String,

    background: String,

    demographics: [
        {
            mal_id: Number,
            name: String,
            type: String,
            url: String,
        },
    ],

    duration: String,

    genres: [
        {
            mal_id: Number,
            name: String,
            type: String,
            url: String,
        },
    ],

    mal_id: Number,

    popularity: Number,

    producers: [
        {
            mal_id: Number,
            name: String,
            type: String,
            url: String,
        },
    ],

    rank: Number,

    ratingPg: String,

    score: Number,

    scored_by: Number,

    season: String,

    source: String,

    status: String,

    studios: [
        {
            mal_id: Number,
            name: String,
            type: String,
            url: String,
        },
    ],

    synopsis: String,

    themes: [
        {
            mal_id: Number,
            name: String,
            type: String,
            url: String,
        },
    ],

    titles: [
        {
            title: String,
            type: String,
        },
    ],

    type: String,

    year: Number,

    malURL: String,
});

// Transforms the Schema into a model
const Series = mongoose.model("Series", series);

export default Series;
