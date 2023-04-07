<div align="center">
  <a href="https://fira.vercel.app">
    <img src="public/banner.png">
  </a>
</div>

## [📦] Built with:

- [**Nextjs**](https://nextjs.org/) - The React Framework for Production.
- [**Typescript**](https://www.typescriptlang.org/) - A superset of JavaScript.
- [**Tailwind CSS**](https://tailwindcss.com/) - A utility-first CSS framework for rapidly building custom designs.
- [**NextAuth.js**](https://next-auth.js.org) - Authentication for Next.js
- [**Prisma**](https://prisma.io) - Next-generation Node.js and TypeScript ORM

## [🎉] Features

- [x] Authentication with GitHub.
- [x] Users can create new poll.
- [x] Users can vote on poll options.
- [x] Users can view their polls.
- [ ] Users can delete their polls.
- [ ] Users can edit their polls.

## [🔧] Getting Started

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
# Postgres Database URL:
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
# Push your Database schema to your databse:
pnpx prisma db push
# Run the project:
pnpm run dev
```

## [🔑] License

- [MIT](https://github.com/techwithmat/fira/blob/main/LICENSE)
