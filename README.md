This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:
--this is where we write about npm install and local.env and all that good stuff--


--below we will write what a developer should type in to compile and run the project in one step.--
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.




## Learn More About Next

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!


--I'd like to deploy on vercel, but delete this bit after deployment becuase it doesn't need to be included with my submission.--
## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## Tailwind
This app has been dynamically styled with Tailwind. 
If you've used Tailwind before, you understand the benefits, and you're prepped for what you're about to see!
If you've never used Tailwind...well buckle up. This codebase is going to seem unnecessarily verbose.
Tailwind, while wordy, ultimately cuts down on the time it takes to develop your front end because it requires
you to style your application as you go, using their abbrieviated key terms all inside the "className" property.
After running npm install, you should be able to hover over any given term inside a component's "className" property
and see a modal above your cursor which will tell you exactly how the Tailwind syntax translates to vanilla CSS.
If you don't know Tailwind, this modal will be a saving grace in understanding how the application renders as it does.
Tailwind also provides excellent documentation. If you look at their website and type what you wish to accomplish into
their searchbar, you'll see an incredibly comprehensive and understandable explanation of how to translate the
stylistic decision of your choosing into Tailwind syntax. Quickly, at that.
And one final note about Tailwind - Tailwind comes out of the box with limited options. However you can leverage 
tailwind.config.js to add specific css shorthand into Tailwind. I did so on a few occasions and if you read the file 
it should prove self explanitory.
