import bcrypt from "bcryptjs";

const users = [
  {
    name: "Oak",
    email: "oak@pokemart.com",
    password: bcrypt.hashSync("1234", 10),
    isAdmin: true,
  },
  {
    name: "Ash",
    email: "ash@pokemart.com",
    password: bcrypt.hashSync("1234", 10),
  },
  {
    name: "Gary",
    email: "gary@pokemart.com",
    password: bcrypt.hashSync("1234", 10),
  },
];

export default users;
