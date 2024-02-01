const tables = require("../tables");

// The B of BREAD - Browse (Read All) operation
const browse = async (req, res, next) => {
  try {
    const personaRoles = await tables.persona_role.readAll();
    res.status(200).json(personaRoles);
  } catch (err) {
    console.error(err);
    next(err);
  }
};

// The R of BREAD - Read operation
const read = async (req, res, next) => {
  try {
    const personaRole = await tables.persona_role.read(req.params.id);
    if (personaRole == null) {
      res.sendStatus(404);
    } else {
      res.status(200).json(personaRole);
    }
  } catch (err) {
    console.error(err);
    next(err);
  }
};

// The E of BREAD - Edit (Update) operation
const edit = async (req, res, next) => {
  try {
    const result = await tables.persona_role.update(req.params.id, req.body);
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
  const personaRole = req.body;
  try {
    const insertId = await tables.persona_role.create(personaRole);
    res.status(201).json({ insertId });
  } catch (err) {
    console.error(err);
    next(err);
  }
};

// The D of BREAD - Destroy (Delete) operation
const destroy = async (req, res, next) => {
  try {
    const response = await tables.persona_role.delete(req.params.id);
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

const deleteWherePersonaId = async (req, res, next) => {
  try {
    const response = await tables.persona_role.deleteWherePersonaId(
      req.params.id
    );
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

const deleteWhereRoleId = async (req, res, next) => {
  try {
    const response = await tables.persona_role.deleteWhereRoleId(req.params.id);
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

module.exports = {
  browse,
  read,
  edit,
  add,
  destroy,
  deleteWherePersonaId,
  deleteWhereRoleId,
};
