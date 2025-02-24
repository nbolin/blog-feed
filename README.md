# Blog Feed

This is a **Next.js** project that fetches and displays blog content from Varian's API, supporting multiple languages.

## Features

- **Next.js 15** with App Router
- **Dynamic blog feed** from Varian's REST API
- **Language toggle** (English & Finnish) with local storage persistence
- **Optimized images** using `next/image`
- **Tailwind CSS** for styling
- **Lato Google Font** integration

## Getting Started

First, clone the repository:

```bash
git clone https://github.com/nbolin/blog-feed.git
cd blog-feed
```

Then, install dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
```

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the blog feed.

## API Integration

The app fetches blog posts from Varian's API:

- **English Feed:** `https://www.varian.com/rest-api/varian-blog-data?_format=json&limit=10`
- **Finnish Feed:** `https://www.varian.com/fi/rest-api/varian-blog-data?_format=json&limit=10`

## Deployment

To deploy, build the project:

```bash
npm run build
```

Then, use a hosting platform like **Vercel**:

```bash
vercel
```

## Learn More

For more details, check out:

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com/)
- [Vercel Deployment](https://vercel.com/docs)

---

Let me know if you need any updates! 🚀
