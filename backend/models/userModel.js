import mongoose from "mongoose";

// Create schema- the user characteristics and requirements
const userSchema = mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
    },

    email: {
      type: String,
      required: true,
      unique: true,
    },

    password: {
      type: String,
      required: true,
    },

    isAdmin: {
      type: Boolean,
      required: true,
      default: false,
    },
  },
  { timestamps: true } // Tracks time of delete, update, or creation of a user.
);
// Create a model for 'User' based on the above schema
const User = mongoose.model("User", userSchema);

export default User; // Export User model
