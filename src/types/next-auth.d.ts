import { type DefaultSession } from "next-auth";
import { JWT } from "next-auth/jwt";

declare module "next-auth" {
  interface Session {
    user: User & {
      id: string;
    };
  }
}

declare module "next-auth" {
  interface Session {
    user: User & {
      id: string;
    };
  }
}
