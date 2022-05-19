# Blog

> An example blog that powered by RedwoodJS + TailwindCSS = ❤️

## Prerequisites

- Redwood requires [Node.js](https://nodejs.org/en/) (>=14.19.x <=16.x) and [Yarn](https://yarnpkg.com/) (>=1.15)
- **Recommended**, Install [asdf-vm](https://asdf-vm.com) for well managed Node.js and Yarn perfectly

Start by installing dependencies:

```
yarn install
```

Setup development database:

```
yarn rw prisma migrate dev
yarn rw prisma db seed
```

Start development server:

```
yarn rw dev
```

Your browser should automatically open to http://localhost:8910 where you'll see the HomePage

## Troubleshooting

If `prisma` warning

**prisma@npm:x.x.x must be built because it never has been before or the last one failed**

Remove `prisma` cache by `rm -rf ~/.cache/prisma`

See more: [https://github.com/redwoodjs/redwood/issues/404](https://github.com/redwoodjs/redwood/issues/404#issuecomment-611884551)

## Quick Links

- Core framework [RedwoodJS](https://redwoodjs.com) 🌲
- A 💯 pts CSS framework in 2022 [tailwindcss](https://tailwindcss.com/)
- Awesome SVG ✨️ thanks to [unDraw](https://undraw.co/)
- UI helpers
  - [headless UI](https://headlessui.dev/) and [heroicons](https://heroicons.com/) by the makers of Tailwind
    CSS
  - [Fontawesome 6](https://fontawesome.com/)

## TODO

- [ ] Prerender static page: https://redwoodjs.com/docs/prerender
- [ ] ENV things: https://redwoodjs.com/docs/environment-variables
