import prisma from "../src/config/db";
import { Prisma } from "./generated/client";

function generateSeededEmail(seed: number) {
  const random = createSeededRandom(seed);
  const usernameLength = Math.floor(random() * 10) + 5; // Random length between 5 and 14
  const usernameChars = "abcdefghijklmnopqrstuvwxyz0123456789";
  let username = "";
  for (let i = 0; i < usernameLength; i++) {
    username += usernameChars.charAt(
      Math.floor(random() * usernameChars.length)
    );
  }

  const domainOptions = [
    "gmail.com",
    "yahoo.com",
    "example.com",
    "outlook.com",
  ];
  const domain = domainOptions[Math.floor(random() * domainOptions.length)];

  return [`${username}@${domain}`, username];
}

function generateSeededPost(seed: number) {
  const random = createSeededRandom(seed);
  const titleLength = Math.floor(random() * 25) + 8; // title
  const contentLength = Math.floor(random() * 40) + 10; // content
  const chars =
    "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  let title = "";
  for (let i = 0; i < titleLength; i++) {
    title += chars.charAt(Math.floor(random() * chars.length));
  }
  let content = "";
  for (let i = 0; i < contentLength; i++) {
    content += chars.charAt(Math.floor(random() * chars.length));
  }

  return [title, content];
}

function createSeededRandom(seed: number) {
  let x = Math.sin(seed++) * 10000;
  return function () {
    x = Math.sin(seed++) * 10000;
    return x - Math.floor(x);
  };
}

async function main() {
  const roles = await prisma.role.createMany({
    data: [
      {
        name: "USER",
      },
      {
        name: "AUTHOR",
      },
      {
        name: "ADMIN",
      },
    ],
  });

  const data: Prisma.UserCreateManyInput[] = [];

  for (let i = 0; i < 200; i++) {
    const [email, name] = generateSeededEmail(i);
    data.push({
      email,
      name,
      password: "123",
      roleId: Math.floor(Math.random() * 2) + 1,
    });
  }

  const users = await prisma.user.createMany({
    data,
  });

  const datapost: Prisma.PostCreateManyInput[] = [];
  for (let i = 0; i < 400; i++) {
    const [title, content] = generateSeededPost(i);
    datapost.push({
      title,
      content,
      published: true,
      authorId: Math.floor(Math.random() * 200) + 1,
    });
  }

  const posts = await prisma.post.createMany({
    data: datapost,
  });

  console.log({ roles, users, posts });
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
