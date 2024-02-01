const userData = [
  {
    username: "Admin",
    hashed_password:
      "$argon2id$v=19$m=65536,t=5,p=1$gchAbeLDP59sJZs35SWYqg$sAsiLe6qaxjX2wAzvHusVMb/fmkCY0huxibzvOyj0UM",
    is_admin: 1,
    email: "admin@admin.com",
  },
  {
    username: "UserLambda",
    hashed_password:
      "$argon2id$v=19$m=65536,t=5,p=1$gchAbeLDP59sJZs35SWYqg$sAsiLe6qaxjX2wAzvHusVMb/fmkCY0huxibzvOyj0UM",
    is_admin: 0,
    email: "lambda@lambda.com",
  },
];

const archetypeData = [
  {
    name: "Mercenaire",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eget",
    image: "https://picsum.photos/200/300",
  },
  {
    name: "Occuliste",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eget",
    image: "https://picsum.photos/200/300",
  },
];

const classData = [
  {
    name: "Gladiateur",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eget",
    image: "https://picsum.photos/200/300",
    archetype_id: 1,
  },
  {
    name: "Maraudeur",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eget",
    image: "https://picsum.photos/200/300",
    archetype_id: 1,
  },
  {
    name: "Infernal",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eget",
    image: "https://picsum.photos/200/300",
    archetype_id: 2,
  },
  {
    name: "Vaudou",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eget",
    image: "https://picsum.photos/200/300",
    archetype_id: 2,
  },
];

const skillData = [
  {
    name: "Ambidextrie",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eget",
    cost: "/",
    test: "/",
    action: "Passif",
    role_id: 1,
  },
  {
    name: "En garde",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eget",
    cost: "1",
    test: "/",
    action: "Mouvement",
    role_id: 1,
  },
  {
    name: "Coup précis",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eget",
    cost: "2",
    test: "Maraudeur - 4",
    action: "Simple",
    role_id: 2,
  },
];

const characterData = [
  {
    name: "Spada",
    age: 24,
    level: 1,
    power: 8,
    strength: 0,
    resistance: 0,
    dexterity: 10,
    agility: 4,
    discretion: 0,
    spirit: 2,
    mental: 0,
    sense: 4,
    social: 10,
    aura: 0,
    relationship: 0,
    combat: 10,
    attack: 4,
    defense: 2,
    archetype_level: 10,
    role1_level: 1,
    role2_level: 1,
    background:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eget",
    user_id: 1,
    archetype_id: 1,
  },
];

const characterClassData = [
  {
    persona_id: 1,
    role_id: 1,
  },
  {
    persona_id: 1,
    role_id: 2,
  },
];

const characterSkillData = [
  {
    persona_id: 1,
    skill_id: 1,
  },
  {
    persona_id: 1,
    skill_id: 2,
  },
  {
    persona_id: 1,
    skill_id: 3,
  },
];

module.exports = {
  userData,
  archetypeData,
  classData,
  skillData,
  characterData,
  characterClassData,
  characterSkillData,
};
