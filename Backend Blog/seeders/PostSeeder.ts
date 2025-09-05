import { faker } from "@faker-js/faker";
import { Post } from "../models/Post";

export const PostSeeder = async () => {
  await Post.destroy({ where: {} });
  await Post.sequelize?.query("ALTER TABLE posts AUTO_INCREMENT = 1;");

  const posts = [];

  for (let i = 0; i < 20; i++) {
    posts.push({
      content: faker.lorem.paragraph(2), // contenido random
      userId: faker.number.int({ min: 1, max: 20 }), // suponiendo que ya hay 20 usuarios
    });
  }

  await Post.bulkCreate(posts);
  console.log(
    "✅ Se borraron todos los posts anteriores y se crearon 20 posts random!"
  );
};
