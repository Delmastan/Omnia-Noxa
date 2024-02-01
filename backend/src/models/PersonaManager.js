const AbstractManager = require("./AbstractManager");

class PersonaManager extends AbstractManager {
  constructor() {
    super({ table: "persona" });
  }

  // --------- CRUD ---------

  // ------------------ Méthode POST ------------------
  async create(persona) {
    // Execute the SQL INSERT query to add a new persona to the "persona" table
    const {
      name,
      age,
      level,
      power,
      strength,
      resistance,
      dexterity,
      agility,
      discretion,
      spirit,
      mental,
      sense,
      social,
      aura,
      relationship,
      combat,
      attack,
      defense,
      archetype_level: archetypeLevel,
      role1_level: role1Level,
      role2_level: role2Level,
      background,
      user_id: userId,
      archetype_id: archetypeId,
    } = persona;
    const [result] = await this.database.query(
      `INSERT INTO ${this.table} (name, age, level, power, strength, resistance, dexterity, agility, discretion, spirit, mental, sense, social, aura, relationship, combat, attack, defense, archetype_level, role1_level, role2_level, background, user_id, archetype_id) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      [
        name,
        age,
        level,
        power,
        strength,
        resistance,
        dexterity,
        agility,
        discretion,
        spirit,
        mental,
        sense,
        social,
        aura,
        relationship,
        combat,
        attack,
        defense,
        archetypeLevel,
        role1Level,
        role2Level,
        background,
        userId,
        archetypeId,
      ]
    );
    return result.insertId;
  }

  // ------------------ Méthode PUT ------------------
  async update(id, persona) {
    const {
      name,
      age,
      level,
      power,
      strength,
      resistance,
      dexterity,
      agility,
      discretion,
      spirit,
      mental,
      sense,
      social,
      aura,
      relationship,
      combat,
      attack,
      defense,
      archetype_level: archetypeLevel,
      role1_level: role1Level,
      role2_level: role2Level,
      background,
      user_id: userId,
      archetype_id: archetypeId,
    } = persona;
    const [rows] = await this.database.query(
      `UPDATE ${this.table} SET name = ?, age = ?, level = ?, power = ?, strength = ?, resistance = ?, dexterity = ?, agility = ?, discretion = ?, spirit = ?, mental = ?, sense = ?, social = ?, aura = ?, relationship = ?, combat = ?, attack = ?, defense = ?, archetype_level = ?, role1_level = ?, role2_level = ?, background = ?, user_id = ?, archetype_id = ? WHERE id = ?`,
      [
        name,
        age,
        level,
        power,
        strength,
        resistance,
        dexterity,
        agility,
        discretion,
        spirit,
        mental,
        sense,
        social,
        aura,
        relationship,
        combat,
        attack,
        defense,
        archetypeLevel,
        role1Level,
        role2Level,
        background,
        userId,
        archetypeId,
        id,
      ]
    );
    return rows;
  }
}

module.exports = PersonaManager;
