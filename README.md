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
- Authentication and Middleware
    - Middleware implementation in `src/middleware.js` 
    - Basic Login function with `setCookies` cookies-next plugin and using `getCookies` and `NextResponse()` in middleware for token checking
    - Logout by deleting cookie (not logged out automatically for now)
    - Authenticated Fetching by using Bearer Token acquired from the token cookies in `/protected/dashboard`
- Flash Message using query in `route.push()` (and then the route is cleared with `route.replace()`) in `/posts` route after deleting or adding new data
- Scoped CSS by using `.module.css` file and applying tailwind class with `@apply`
- Redux Toolkit implementation for state management (only applied in route `/redux`), for now not implementing redux for general data fetching (since most of fetching like applying dynamic routes require server-side rendering), and redux-toolkit applied in client components only
- Pagination provided by https://dummyjson.com/ with no plugin
    - Query-based paginated page in `/paginated2` route 
- Search by value demo in `/search` route by using query params. I made this in separate demo beacuse the current dummy backend endpoint doesn't support backend search query. Sorry for the performance issue :c

## Next Topic: 
- Catch all Routes `[...filename]`
- Typescript
- Paralel Route `@folder`, and route groups `(folder)` 

**Current API Endpoint**: https://jsonplaceholder.typicode.com & https://dummyjson.com/

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
