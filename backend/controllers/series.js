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
        //console.log("userId : " + req.params.userId);
        const userid = req.params.userId;
        const series = await Series.find({ userId: userid });

        res.status(200).json(series);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};

export const getSerieBySerieId = async (req, res) => {
    try {
        //console.log(req.params.serieId);
        const _id = req.params.serieId;
        const series = await Series.find({ _id: _id });

        res.status(200).json(series);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};

export const patchSerieBySerieId = async (req, res) => {
    console.log("PATCH");
    //console.log(req.body.operation);
    console.log(req.body);
    try {
        const filter = { _id: req.params.serieId };
        const operation = req.body.operation;
        let update;

        if (operation === "add") {
            update = { $inc: { episodesWatched: 1 } };
        } else if (operation === "subtract") {
            update = { $inc: { episodesWatched: -1 } };
        }

        const user = await Series.findOneAndUpdate(filter, update, (error, success) => {
            console.log(req.body);
            if (error) {
                console.log(error);
                // res.status(404).json({ message: error.message });
            } else {
                console.log(success);
                //res.status(200).json(success);
            }
        });

        res.status(200).json(user);
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
        episodeLength: req?.body?.episodeLength,
    });
    try {
        await newSerie.save();

        res.status(201).json(newSerie);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
};
