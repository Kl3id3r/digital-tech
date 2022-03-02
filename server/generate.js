// Libreria Faker
const { faker } = require("@faker-js/faker");

// Base de datos local para usuarios y publicaciones
let database = {
  users: [],
  posts: [],
};

// Usuario inicial
const author = {
  _id: "1",
  name: "Johnn",
  surname: "J0hnn",
  username: "jhon@doe.com",
  avatar: faker.image.avatar(),
};

// Registrar "author"
database.users.push(author);

// Crear los primero 5 posts del usuario "author"
for (let i = 0; i < 6; i++) {
  database.posts.push({
    _id: i.toString(),
    author,
    create_at: new Date(),
    message: "string",
    status: "published",
    location: "string",
    image: faker.image.imageUrl(),
    likes: [author],
  });
}

console.log(JSON.stringify(database));
