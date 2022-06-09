import Series from "../models/Series.js";

export const getSeries = async (req, res) => {
  try {
    const serie = await Series.find();

    res.status(200).json(serie);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const getSerieById = async (req, res) => {
  try {
    console.log(req.params.userId);
    const userid = req.params.userId;
    const series = await Series.find({ userId: userid });

    res.status(200).json(series);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const createSerie = async (req, res) => {
  const newSerie = new Series({
    userId: req.body.userId,
    title: req.body.title,
    username: req.body.username,
    description: req.body.description,
    rating: req.body.rating,
    photoUrl: req?.file?.path ? req?.file?.path : req.body.image,
    episodesWatched: req?.body?.episodesWatched,
    episodeCount: req?.body?.episodeCount,
    watchTime: req?.body?.watchTime,
    age: req?.body?.age,
    websiteUrl: req?.body?.websiteUrl,
  });
  try {
    await newSerie.save();

    res.status(201).json(newSerie);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};
