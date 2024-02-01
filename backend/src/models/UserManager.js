const AbstractManager = require("./AbstractManager");

class UserManager extends AbstractManager {
  constructor() {
    super({ table: "user" });
  }

  // --------- CRUD ---------

  // ------------------ Méthode POST ------------------
  async create(user) {
    // Execute the SQL INSERT query to add a new user to the "user" table
    const {
      username,
      hashed_password: hashedPassword,
      is_admin: isAdmin,
      email,
    } = user;
    const [result] = await this.database.query(
      `INSERT INTO ${this.table} (username, email, hashed_password, is_admin) VALUES (?, ?, ?, ?)`,
      [username, email, hashedPassword, isAdmin]
    );
    return result.insertId;
  }

  // ------------------ Méthode PUT ------------------
  async update(id, user) {
    const {
      username,
      hashed_password: hashedPassword,
      is_admin: isAdmin,
      email,
    } = user;
    const [rows] = await this.database.query(
      `UPDATE ${this.table} SET username = ?, email = ?, hashed_password = ?, is_admin = ? WHERE id = ?`,
      [username, email, hashedPassword, isAdmin, id]
    );
    return rows;
  }

  async readByEmail(email) {
    const [rows] = await this.database.query(
      `select * from ${this.table} where email = ?`,
      [email]
    );

    return rows[0];
  }

  async readAllWithoutPassword() {
    const [rows] = await this.database.query(
      `SELECT id, username, email, is_admin FROM ${this.table}`
    );
    return rows;
  }

  async readWithoutPassword(id) {
    const [rows] = await this.database.query(
      `SELECT id, username, email, is_admin FROM ${this.table} WHERE ${this.table}.id = ?`,
      [id]
    );
    return rows[0];
  }
}

module.exports = UserManager;
