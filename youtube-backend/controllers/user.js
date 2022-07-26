import User from "../models/User.js";

export const updateUser = async (req, res) => {
  try {
    if (req.params.id === req.user.id) {
      const updatedUser = await User.findByIdAndUpdate(
        req.params.id,
        {
          $set: req.body,
        },
        { new: true }
      );
      res.status(200).json({ updatedUser });
    }
   
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

export const deleteUser = async (req, res) => {
  try {
  } catch (error) {}
};

export const getUser = async (req, res) => {
  try {
  } catch (error) {}
};

export const subscribe = async (req, res) => {
  try {
  } catch (error) {}
};

export const unSubscribe = async (req, res) => {
  try {
  } catch (error) {}
};

export const like = async (req, res) => {
  try {
  } catch (error) {}
};

export const dislike = async (req, res) => {
  try {
  } catch (error) {}
};
