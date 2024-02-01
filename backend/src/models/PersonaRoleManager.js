const AbstractManager = require("./AbstractManager");

class PersonaRoleManager extends AbstractManager {
  constructor() {
    super({ table: "persona_role" });
  }

  // --------- CRUD ---------

  // ------------------ Méthode POST ------------------
  async create(personaRole) {
    // Execute the SQL INSERT query to add a new persona role to the "persona_role" table
    const { persona_id: personaId, role_id: roleId } = personaRole;
    const [result] = await this.database.query(
      `INSERT INTO ${this.table} (persona_id, role_id) VALUES (?, ?)`,
      [personaId, roleId]
    );
    return result.insertId;
  }

  // ------------------ Méthode PUT ------------------
  async update(id, personaRole) {
    const { persona_id: personaId, role_id: roleId } = personaRole;
    const [rows] = await this.database.query(
      `UPDATE ${this.table} SET persona_id = ?, role_id = ? WHERE id = ?`,
      [personaId, roleId, id]
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

  async deleteWhereRoleId(roleId) {
    const [rows] = await this.database.query(
      `DELETE FROM ${this.table} WHERE role_id = ?`,
      [roleId]
    );
    return rows;
  }
}

module.exports = PersonaRoleManager;
