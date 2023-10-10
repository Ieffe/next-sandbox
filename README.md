Sandboxing in NextJS with Tailwind for styling

## List of learned Implementation in this sandbox repository 
- Components implementation
    - Props in Components that is reusable
    - Using `use client` for client components that using react's Hook
    - Using `notFound()` for 404 response
    - Using `getStaticParams()` for Dynamic Routes and `generateMetadata` for getting dynamic Metadata
    - Using `useEffect` for catching state every render for Custom build delete confirmation modal in `/posts`
- Axios implementation in GET, POST, PUT, DELETE methods (Still using json placeholder, thus the data doesn't update for real, but it's still confirmed by checking done by `console.log`)
- Dynamic Routing for Single Data details and Editing Page
- Validation with useEffect, and form Validation with `react-hook-forms` and good ol' `useEffect()`
- Middleware implementation in `src/middleware.js` and Basic Login (provided in console.log) and setting the token in client component, but still figuring out how to handle to access that aforementioned token by getting it

## Next Topic: ##
- Catch all Routes `[...filename]`
- Authentication (on Progress)
- Redux
- Pagination

**Current API Endpoint**: https://jsonplaceholder.typicode.com 

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
