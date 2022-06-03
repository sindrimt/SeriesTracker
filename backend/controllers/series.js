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
    const urlId = req.params.id;
    const serie = await Series.findById(urlId);

    res.status(200).json(serie);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const createSerie = async (req, res) => {
  const serie = req.body;
  const newSerie = new Series(serie);
  try {
    await newSerie.save();

    res.status(201).json(newSerie);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};
