import { faker } from "@faker-js/faker";
import { User } from "../models/User";
import bcrypt from "bcryptjs";

export const UserSeeder = async () => {
  // Borra todos los usuarios existentes y reinicia el autoincremento
  await User.destroy({ where: {} });
  // Reinicia el autoincremento de la tabla users
  // @ts-ignore
  await User.sequelize?.query("ALTER TABLE users AUTO_INCREMENT = 1;");

  const users = [];

  // Usuario fijo
  const fixedPassword = await bcrypt.hash("1234", 10);
  users.push({
    username: "user",
    email: "user@email.com",
    password: fixedPassword,
  });

  // Usuarios random
  for (let i = 0; i < 19; i++) {
    const plainPassword = faker.internet.password({ length: 8 });
    const hashedPassword = await bcrypt.hash(plainPassword, 10);

    users.push({
      username: faker.internet.userName(),
      email: faker.internet.email(),
      password: hashedPassword,
    });
  }

  await User.bulkCreate(users);
  console.log(
    "✅ Se borraron todos los usuarios anteriores y se creó el usuario fijo y 19 usuarios random con passwords encriptadas!"
  );
};
