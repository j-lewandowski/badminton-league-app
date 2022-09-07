import userModel from "../models/userModel.js";
import generateToken from "../utils/generateToken.js";

const User = userModel;

// @Desc  Login user
// @Route /api/users
// @Access Public
export const loginUser = async (req, res) => {
  const { email, password } = req.body;

  const userExist = await User.exists({ email });

  if (userExist) {
    const user = await User.findOne({ email });
    const passwordsMatch = await user.matchPasswords(password);

    if (passwordsMatch) {
      res.status(202).json({
        id: user._id,
        firstName: user.firstName,
        lastName: user.lastName,
        token: await generateToken(user._id),
      });
    }
  } else {
    res.status(404).json({ message: "User not found!" });
  }
};
