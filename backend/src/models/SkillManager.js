const AbstractManager = require("./AbstractManager");

class SkillManager extends AbstractManager {
  constructor() {
    super({ table: "skill" });
  }

  // --------- CRUD ---------

  // ------------------ Méthode POST ------------------
  async create(skill) {
    // Execute the SQL INSERT query to add a new skill to the "skill" table
    const { name, description, cost, test, action, role_id: roleId } = skill;
    const [result] = await this.database.query(
      `INSERT INTO ${this.table} (name, description, cost, test, action, role_id) VALUES (?, ?, ?, ?, ?, ?)`,
      [name, description, cost, test, action, roleId]
    );
    return result.insertId;
  }

  // ------------------ Méthode PUT ------------------
  async update(id, skill) {
    const { name, description, cost, test, action, role_id: roleId } = skill;
    const [rows] = await this.database.query(
      `UPDATE ${this.table} SET name = ?, description = ?, cost = ?, test = ?, action = ?, role_id = ? WHERE id = ?`,
      [name, description, cost, test, action, roleId, id]
    );
    return rows;
  }
}

module.exports = SkillManager;
