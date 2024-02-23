const express = require("express");
const app = express();
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

// async function main() {
//   try {
//     // ... you will write your Prisma Client queries here
//     // Your Prisma operations here
//     console.log("working...");
//   } catch (e) {
//     console.error(e);
//   } finally {
//     await prisma.$disconnect();
//   }
// }

// main().catch((e) => {
//   console.error(e);
//   process.exit(1);
// });

app.get("/", async (req, res, next) => {
  // const docs = await prisma.post.count({});
  // console.log(docs);
  // create
  // const user =  prisma.user.fields.email.name;
  const user = await prisma.user.create({
    data: {
      name: "Hamza",
      email: "hamza@gmail.com",
      password: "Hamza123",
      verification: "complete",
      id: 1,
      posts: [],
    },
  });
  console.log(user);
  res.status(200).json({ msg: "Hello World!" });
});
const server = app.listen(6002, () => {
  console.log("server running on port 6002");
});
