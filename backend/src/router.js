const express = require("express");

const router = express.Router();

/* ************************************************************************* */
// Define Your API Routes Here
/* ************************************************************************* */

// Import itemControllers module for handling item-related operations
const userControllers = require("./controllers/userControllers");
const personaControllers = require("./controllers/personaControllers");
const roleControllers = require("./controllers/roleControllers");
const skillControllers = require("./controllers/skillControllers");
const archetypeControllers = require("./controllers/archetypeControllers");
const personaRoleControllers = require("./controllers/personaRoleControllers");
const personaSkillControllers = require("./controllers/personaSkillControllers");

// Route to get a list of items
router.get("/users", userControllers.readAllWithoutPassword);
router.get("/users/:id", userControllers.readWithoutPassword);
router.put("/users/:id", userControllers.edit);
router.post("/users", userControllers.add);
router.delete("/users/:id", userControllers.destroy);

router.get("/personas", personaControllers.browse);
router.get("/personas/:id", personaControllers.read);
router.put("/personas/:id", personaControllers.edit);
router.post("/personas", personaControllers.add);
router.delete("/personas/:id", personaControllers.destroy);

router.get("/roles", roleControllers.browse);
router.get("/roles/:id", roleControllers.read);
router.put("/roles/:id", roleControllers.edit);
router.post("/roles", roleControllers.add);
router.delete("/roles/:id", roleControllers.destroy);

router.get("/skills", skillControllers.browse);
router.get("/skills/:id", skillControllers.read);
router.put("/skills/:id", skillControllers.edit);
router.post("/skills", skillControllers.add);
router.delete("/skills/:id", skillControllers.destroy);

router.get("/archetypes", archetypeControllers.browse);
router.get("/archetypes/:id", archetypeControllers.read);
router.put("/archetypes/:id", archetypeControllers.edit);
router.post("/archetypes", archetypeControllers.add);
router.delete("/archetypes/:id", archetypeControllers.destroy);

router.get("/persona-roles", personaRoleControllers.browse);
router.get("/persona-roles/:id", personaRoleControllers.read);
router.put("/persona-roles/:id", personaRoleControllers.edit);
router.post("/persona-roles", personaRoleControllers.add);
router.delete(
  "/persona-roles/personas/:id",
  personaRoleControllers.deleteWherePersonaId
);
router.delete(
  "/persona-roles/roles/:id",
  personaRoleControllers.deleteWhereRoleId
);

router.get("/persona-skills", personaSkillControllers.browse);
router.get("/persona-skills/:id", personaSkillControllers.read);
router.put("/persona-skills/:id", personaSkillControllers.edit);
router.post("/persona-skills", personaSkillControllers.add);
router.delete("/persona-skills/:id", personaSkillControllers.destroy);

/* ************************************************************************* */

module.exports = router;
