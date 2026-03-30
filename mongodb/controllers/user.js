import Users from "../models/user.js";

export async function getUsers(req, res, next) {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = 10;

    const users = await Users.find()
      .skip((page - 1) * limit)
      .limit(limit);

    res.json(users);
  } catch (err) {
    next(err);
  }
}

export async function createUser(req, res, next) {
  try {
    const user = await Users.create(req.body);
    res.json(user);
  } catch (err) {
    next(err);
  }
}

export async function getUserById(req, res, next) {
  try {
    const user = await Users.findById(req.params.id);
    res.json(user);
  } catch (err) {
    next(err);
  }
}

export async function updateUser(req, res, next) {
  try {
    const user = await Users.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.json(user);
  } catch (err) {
    next(err);
  }
}

export async function deleteUser(req, res, next) {
  try {
    const user = await Users.findByIdAndDelete(req.params.id);
    res.json(user);
  } catch (err) {
    next(err);
  }
}