import { faker } from "@faker-js/faker";
import { Post } from "../models/Post";

export const PostSeeder = async () => {
  const posts = [];

  for (let i = 0; i < 20; i++) {
    posts.push({
      content: faker.lorem.paragraph(2), // contenido random
      userId: faker.number.int({ min: 1, max: 5 }), // suponiendo que ya hay 5 usuarios
    });
  }

  await Post.bulkCreate(posts);
  console.log("✅ Se crearon 20 posts random!");
};
