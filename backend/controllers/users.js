import UserData from "../models/UserData.js";

export const getUser = async (req, res) => {
  try {
    const user = await UserData.find();

    res.status(200).json(user);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const getUserById = async (req, res) => {
  try {
    const urlId = req.params.id;
    const user = await UserData.findById(urlId);

    res.status(200).json(user);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const patchUserById = async (req, res) => {
  try {
    const urlId = req.params.id;
    const user = await UserData.findByIdAndUpdate(urlId);

    res.status(200).json(user);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const createUser = async (req, res) => {
  //console.log(req?.body);
  const newUser = new UserData({
    _id: req.body._id,
    username: req.body.username,
    series: req.body.series,
    email: req.body.email,
    photoUrl: req?.file?.path,
    googlePhotoUrl: req?.body?.googlePhotoUrl,
  });

  try {
    await newUser.save();

    res.status(201).json(newUser);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};
