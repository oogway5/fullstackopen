import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  email: String,
});

const Users = mongoose.model("users", userSchema);

export default Users;