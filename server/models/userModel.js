import mongoose from "mongoose";
import bcrypt from "bcrypt";

const userSchema = mongoose.Schema(
  {
    firstName: {
      type: String,
      require: true,
    },
    lastName: {
      type: String,
      require: true,
    },
    email: {
      type: String,
      require: true,
    },
    password: {
      type: String,
      require: true,
    },
    elo: {
      type: Array,
      default: [1500],
    },
    /* 
    Add photo
    */
    awaitingRequests: {
      type: Array,
      default: [],
    },
    friends: {
      type: Array,
      default: [],
    },
  },
  { timestamps: true }
);
userSchema.method("matchPasswords", function (providedPassword) {
  return bcrypt.compare(providedPassword, this.password);
});

export default mongoose.model("User", userSchema);
