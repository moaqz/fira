## 💡 About this Project:

Fira is a polling application that is currently under construction. If you find any bugs, feel free to create an issue.

## 📦 Built with:

- [**Vitest**](https://vitest.dev/) - A blazing fast unit test framework.
- [**Nextjs**](https://nextjs.org/) - The React Framework for Production.
- [**Typescript**](https://www.typescriptlang.org/) - A superset of JavaScript.
- [**Tailwind CSS**](https://tailwindcss.com/) - A utility-first CSS framework for rapidly building custom designs.
- [**Iconoir**](https://iconoir.com/) - An open source icons library
- [**NextAuth.js**](https://next-auth.js.org) - Authentication for Next.js
- [**Prisma**](https://prisma.io) - Next-generation Node.js and TypeScript ORM
- [**Planetscale**](https://planetscale.com/) - The world’s most advanced serverless MySQL platform

## 🔧 Getting Started

1. Clone the repository:

```bash
git clone git@github.com:techwithmat/fira.git
```

2. Install dependencies:

```bash
pnpm install
```

3. Create a **.env** file with the following content:

```bash
# Planetscale DB URL:
DATABASE_URL:

# Github OAuth secrets:
GITHUB_ID:
GITHUB_CLIENT_SECRET:

# Next Auth config:
SECRET:
NEXTAUTH_URL:
```

4. Once you got those things in place just run the following command:

```bash
# Push your DB to Planetscale:
pnpx prisma db push
# Run the project:
pnpm run dev
```

## 🔑 License

- [MIT](https://github.com/techwithmat/fira/blob/main/LICENSE)
