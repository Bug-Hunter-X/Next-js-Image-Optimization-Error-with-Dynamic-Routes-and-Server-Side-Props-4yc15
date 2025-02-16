# Next.js Image Optimization Bug

This repository demonstrates a common but subtle bug in Next.js related to image optimization when using dynamic routes and server-side props (getStaticProps or getServerSideProps).  The problem occurs when image paths are incorrectly specified, leading to broken image displays or 404 errors.

## Bug Description
When fetching images within `getStaticProps` or `getServerSideProps` for dynamically generated pages, relative image paths may not work correctly.  This is because the server-side context differs from the client-side context, where paths are relative to the public directory.

## Solution
The solution involves using absolute image paths (starting with `/`) or leveraging Next.js's built-in Image component for proper optimization and path handling.

## How to reproduce the bug
1. Clone this repository.
2. Run `npm install`.
3. Run `npm run dev`.
4. Navigate to a dynamic route (e.g., `/product/[id]`).
5. Observe the broken image display (bug.js). 
6. Switch to the corrected version using Next.js Image component (bugSolution.js)
7. Observe that the image is now displayed correctly.

## License
MIT