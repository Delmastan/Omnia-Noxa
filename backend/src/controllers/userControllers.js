const tables = require("../tables");

// The B of BREAD - Browse (Read All) operation
const browse = async (req, res, next) => {
  try {
    const users = await tables.user.readAll();
    res.status(200).json(users);
  } catch (err) {
    console.error(err);
    next(err);
  }
};

// The R of BREAD - Read operation
const read = async (req, res, next) => {
  try {
    const user = await tables.user.read(req.params.id);
    if (user == null) {
      res.sendStatus(404);
    } else {
      res.status(200).json(user);
    }
  } catch (err) {
    console.error(err);
    next(err);
  }
};

// The E of BREAD - Edit (Update) operation
const edit = async (req, res, next) => {
  try {
    const result = await tables.user.update(req.params.id, req.body);
    if (result.affectedRows === 0) {
      res.sendStatus(404);
    } else {
      res.sendStatus(204);
    }
  } catch (err) {
    console.error(err);
    next(err);
  }
};

// The A of BREAD - Add (Create) operation
const add = async (req, res, next) => {
  const user = req.body;
  try {
    const insertId = await tables.user.create(user);
    res.status(201).json({ insertId });
  } catch (err) {
    console.error(err);
    next(err);
  }
};

// The D of BREAD - Destroy (Delete) operation
const destroy = async (req, res, next) => {
  try {
    const response = await tables.user.delete(req.params.id);
    if (response.affectedRows === 0) {
      res.sendStatus(404);
    } else {
      res.sendStatus(204);
    }
  } catch (err) {
    console.error(err);
    next(err);
  }
};

const readAllWithoutPassword = async (req, res, next) => {
  try {
    const users = await tables.user.readAllWithoutPassword();
    res.status(200).json(users);
  } catch (err) {
    console.error(err);
    next(err);
  }
};

const readWithoutPassword = async (req, res, next) => {
  try {
    const user = await tables.user.readWithoutPassword(req.params.id);
    if (user == null) {
      res.sendStatus(404);
    } else {
      res.status(200).json(user);
    }
  } catch (err) {
    console.error(err);
    next(err);
  }
};

module.exports = {
  browse,
  read,
  edit,
  add,
  destroy,
  readAllWithoutPassword,
  readWithoutPassword,
};
