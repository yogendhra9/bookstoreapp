import User from "../model/usermodel.js";
import bcryptjs from "bcryptjs";
export const signup = async (req, res) => {
  try {
    const { fullName, email, password } = req.body;
    if (!email || email.trim() === "") {
      return res.status(400).json({ message: "Email is required" });
    }
    const user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({ message: "User already exists" });
    }
    const hashPassword = await bcryptjs.hash(password, 10);
    const createdUser = new User({
      fullName: fullName,
      email: email,
      password: hashPassword,
    });
    await createdUser.save();
    res
      .status(201)
      .json({
        message: "New user created successfully",
        user: { createdUser },
      });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    const isMatch = await bcryptjs.compare(password, user.password);
    if (!user || !isMatch) {
      return res.status(400).json({ message: "Invalid user name or password" });
    } else {
      res.status(200).json({
        message: "User logged in successfully",
        user: {
          _id: user._id,
          email: user.email,
        },
      });
    }
  } catch (error) {
    console.log("error:" + error.message);
    res.status(500).json({ message: "Internal server error" });
  }
};
