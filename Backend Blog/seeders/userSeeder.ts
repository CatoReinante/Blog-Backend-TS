import { faker } from "@faker-js/faker";
import { User } from "../models/User";
import bcrypt from "bcryptjs";

export const UserSeeder = async () => {
  const users = [];

  for (let i = 0; i < 20; i++) {
    const plainPassword = faker.internet.password({ length: 8 });
    const hashedPassword = await bcrypt.hash(plainPassword, 10);

    users.push({
      username: faker.internet.userName(),
      email: faker.internet.email(),
      password: hashedPassword, // ✅ guardás hash en vez de texto plano
    });
  }

  await User.bulkCreate(users);
  console.log("✅ Se crearon 20 usuarios random con passwords encriptadas!");
};
