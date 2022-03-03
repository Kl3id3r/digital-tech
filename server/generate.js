// Libreria Faker
const { faker } = require("@faker-js/faker");

// Base de datos local para usuarios y publicaciones
let database = {
  users: [],
  posts: [],
};

// Usuario inicial
const author = {
  id: 1,
  name: "Johnn",
  surname: "J0hnn",
  username: "jhon@doe.com",
  avatar: faker.image.avatar(),
};

// Registrar "author"
database.users.push(author);

// Crear los primero 5 posts del usuario "author"
for (let id = 0; id < 6; id++) {
  database.posts.push({
    id,
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
