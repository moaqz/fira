import { PrismaClient } from "@prisma/client";

declare global {
  // eslint-disable-next-line no-unused-vars, no-var
  // biome-ignore lint/style/noVar: <explanation>
  var prisma: PrismaClient;
}

// biome-ignore lint/suspicious/noRedeclare: <explanation>
let prisma: PrismaClient;

if (process.env.NODE_ENV === "production") {
  prisma = new PrismaClient();
} else {
  if (!global.prisma) {
    global.prisma = new PrismaClient();
  }
  prisma = global.prisma;
}

export default prisma;
