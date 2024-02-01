const AbstractManager = require("./AbstractManager");

class RoleManager extends AbstractManager {
  constructor() {
    super({ table: "role" });
  }

  // --------- CRUD ---------

  // ------------------ Méthode POST ------------------
  async create(role) {
    // Execute the SQL INSERT query to add a new role to the "role" table
    const { name, description, image, archetype_id: archetypeId } = role;
    const [result] = await this.database.query(
      `INSERT INTO ${this.table} (name, description, image, archetype_id) VALUES (?, ?, ?, ?)`,
      [name, description, image, archetypeId]
    );
    return result.insertId;
  }

  // ------------------ Méthode PUT ------------------
  async update(id, role) {
    const { name, description, image, archetype_id: archetypeId } = role;
    const [rows] = await this.database.query(
      `UPDATE ${this.table} SET name = ?, description = ?, image = ?, archetype_id = ? WHERE id = ?`,
      [name, description, image, archetypeId, id]
    );
    return rows;
  }
}

module.exports = RoleManager;
