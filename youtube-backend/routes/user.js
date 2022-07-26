import express from "express";
import {verifyToken} from "../verifyToken.js";
import {
  updateUser,
  deleteUser,
  getUser,
  subscribe,
  unSubscribe,
  like,
  dislike,
} from "../controllers/user.js";
const router = express.Router();

// update user profile
router.route("/:id").put(verifyToken,updateUser);

// delete user profile

router.route("/:id").delete(deleteUser);

// get user profile
router.route("/find/:id").get(getUser);

// subscribe to user
router.route("/sub/:id").put(subscribe);

// unsubscribe from user
router.route("/unsub/:id").put(unSubscribe);

//like a video
router.route("/like/videoId").put(like);
//dislike a video
router.route("/dislike/videoId").put(dislike);
export default router;
