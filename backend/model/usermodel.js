import mongoose from "mongoose";
const userSchema = mongoose.Schema({
  fullName: { type: String, required: true },
  email: {
    type: String,
    required: true,
    unique: true,
    match: [/.+@.+\..+/],
    validate: {
      validator: function (email) {
        // Ensure email is not null or empty
        return email && email.trim() !== "";
      },
    },
  },
  password: { type: String, required: true },
});
const User = mongoose.model("User", userSchema);
export default User;
