const tables = require("../tables");

// The B of BREAD - Browse (Read All) operation
const browse = async (req, res, next) => {
  try {
    const personaSkills = await tables.persona_skill.readAll();
    res.status(200).json(personaSkills);
  } catch (err) {
    console.error(err);
    next(err);
  }
};

// The R of BREAD - Read operation
const read = async (req, res, next) => {
  try {
    const personaSkill = await tables.persona_skill.read(req.params.id);
    if (personaSkill == null) {
      res.sendStatus(404);
    } else {
      res.status(200).json(personaSkill);
    }
  } catch (err) {
    console.error(err);
    next(err);
  }
};

// The E of BREAD - Edit (Update) operation
const edit = async (req, res, next) => {
  try {
    const result = await tables.persona_skill.update(req.params.id, req.body);
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
  const personaSkill = req.body;
  try {
    const insertId = await tables.persona_skill.create(personaSkill);
    res.status(201).json({ insertId });
  } catch (err) {
    console.error(err);
    next(err);
  }
};

// The D of BREAD - Destroy (Delete) operation
const destroy = async (req, res, next) => {
  try {
    const response = await tables.persona_skill.delete(req.params.id);
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
    const response = await tables.persona_skill.deleteWherePersonaId(
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

const deleteWhereSkillId = async (req, res, next) => {
  try {
    const response = await tables.persona_skill.deleteWhereSkillId(
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

module.exports = {
  browse,
  read,
  edit,
  add,
  destroy,
  deleteWherePersonaId,
  deleteWhereSkillId,
};
