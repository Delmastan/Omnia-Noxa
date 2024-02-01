const AbstractManager = require("./AbstractManager");

class PersonaSkillManager extends AbstractManager {
  constructor() {
    super({ table: "persona_skill" });
  }

  // --------- CRUD ---------

  // ------------------ Méthode POST ------------------
  async create(personaSkill) {
    // Execute the SQL INSERT query to add a new persona skill to the "persona_skill" table
    const { persona_id: personaId, skill_id: skillId } = personaSkill;
    const [result] = await this.database.query(
      `INSERT INTO ${this.table} (persona_id, skill_id) VALUES (?, ?)`,
      [personaId, skillId]
    );
    return result.insertId;
  }

  // ------------------ Méthode PUT ------------------
  async update(id, personaSkill) {
    const { persona_id: personaId, skill_id: skillId } = personaSkill;
    const [rows] = await this.database.query(
      `UPDATE ${this.table} SET persona_id = ?, skill_id = ? WHERE id = ?`,
      [personaId, skillId, id]
    );
    return rows;
  }

  async deleteWherePersonaId(personaId) {
    const [rows] = await this.database.query(
      `DELETE FROM ${this.table} WHERE persona_id = ?`,
      [personaId]
    );
    return rows;
  }

  async deleteWhereSkillId(skillId) {
    const [rows] = await this.database.query(
      `DELETE FROM ${this.table} WHERE skill_id = ?`,
      [skillId]
    );
    return rows;
  }
}

module.exports = PersonaSkillManager;
