const AbstractManager = require("./AbstractManager");

class ArchetypeManager extends AbstractManager {
  constructor() {
    super({ table: "archetype" });
  }

  // --------- CRUD ---------

  // ------------------ Méthode POST ------------------
  async create(archetype) {
    // Execute the SQL INSERT query to add a new archetype to the "archetype" table
    const { name, description, image } = archetype;
    const [result] = await this.database.query(
      `INSERT INTO ${this.table} (name, description, image) VALUES (?, ?, ?)`,
      [name, description, image]
    );
    return result.insertId;
  }

  // ------------------ Méthode PUT ------------------
  async update(id, archetype) {
    const { name, description, image } = archetype;
    const [rows] = await this.database.query(
      `UPDATE ${this.table} SET name = ?, description = ?, image = ? WHERE id = ?`,
      [name, description, image, id]
    );
    return rows;
  }
}

module.exports = ArchetypeManager;
