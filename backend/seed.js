const {
  userData,
  archetypeData,
  classData,
  skillData,
  characterData,
  characterClassData,
  characterSkillData,
} = require("./seedItem");
// Load environment variables from .env file
require("dotenv").config();

// Import database client
const database = require("./database/client");

const seed = async () => {
  try {
    // Declare an array to store the query promises
    // See why here: https://eslint.org/docs/latest/rules/no-await-in-loop

    /* ************************************************************************* */

    // Generating Seed Data

    const userQueryPromises = userData.map((user) => {
      return database.query(
        `INSERT INTO user (username, email, hashed_password, is_admin) VALUES (?, ?, ?, ?)`,
        [user.username, user.email, user.hashed_password, user.is_admin]
      );
    });

    await Promise.all(userQueryPromises);

    /* ************************************************************************* */

    const archetypeQueryPromises = archetypeData.map((archetype) => {
      return database.query(
        `INSERT INTO archetype (name, description, image) VALUES (?, ?, ?)`,
        [archetype.name, archetype.description, archetype.image]
      );
    });

    await Promise.all(archetypeQueryPromises);

    /* ************************************************************************* */

    const classeQueryPromises = classData.map((classe) => {
      return database.query(
        `INSERT INTO role (name, description, image, archetype_id) VALUES (?, ?, ?, ?)`,
        [classe.name, classe.description, classe.image, classe.archetype_id]
      );
    });

    await Promise.all(classeQueryPromises);

    /* ************************************************************************* */

    const skillQueryPromises = skillData.map((skill) => {
      return database.query(
        `INSERT INTO skill (name, description, cost, test, action, role_id) VALUES (?, ?, ?, ?, ?, ?)`,
        [
          skill.name,
          skill.description,
          skill.cost,
          skill.test,
          skill.action,
          skill.role_id,
        ]
      );
    });

    await Promise.all(skillQueryPromises);

    /* ************************************************************************* */

    const characterQueryPromises = characterData.map((character) => {
      return database.query(
        `INSERT INTO persona (name, age, level, power, strength, resistance, dexterity, agility, discretion, spirit, mental, sense, social, aura, relationship, combat, attack, defense, archetype_level, role1_level, role2_level, background, user_id, archetype_id) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
        [
          character.name,
          character.age,
          character.level,
          character.power,
          character.strength,
          character.resistance,
          character.dexterity,
          character.agility,
          character.discretion,
          character.spirit,
          character.mental,
          character.sense,
          character.social,
          character.aura,
          character.relationship,
          character.combat,
          character.attack,
          character.defense,
          character.archetype_level,
          character.role1_level,
          character.role2_level,
          character.background,
          character.user_id,
          character.archetype_id,
        ]
      );
    });
    await Promise.all(characterQueryPromises);

    /* ************************************************************************* */

    const characterClassQueryPromises = characterClassData.map(
      (characterClass) => {
        return database.query(
          `INSERT INTO persona_role (persona_id, role_id) VALUES (?, ?)`,
          [characterClass.persona_id, characterClass.role_id]
        );
      }
    );

    await Promise.all(characterClassQueryPromises);

    /* ************************************************************************* */

    const characterSkillQueryPromises = characterSkillData.map(
      (characterSkill) => {
        return database.query(
          `INSERT INTO persona_skill (persona_id, skill_id) VALUES (?, ?)`,
          [characterSkill.persona_id, characterSkill.skill_id]
        );
      }
    );

    await Promise.all(characterSkillQueryPromises);

    // Wait for all the insertion queries to complete
    // await Promise.all(queries);

    // Close the database connection
    database.end();

    console.info(`${database.databaseName} filled from ${__filename} 🌱`);
  } catch (err) {
    console.error("Error filling the database:", err.message);
  }
};

// Run the seed function
seed();
