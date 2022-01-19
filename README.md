## Learn More About Next

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.


## Getting Started

First and foremost, run 
```bash
npm install
```
to install all packages and dependencies.

Next, add a .env.local file into the root directory.
This is where you're going to add your API key to gain access to Pexels.
On line 1 of .env.local paste ```NEXT_PUBLIC_PEXELS_API_KEY=``` followed by your API key. You should not wrap the API key in quotations.

After this the setup is finished you should be able to type
```bash
npm run dev
```
to compile and run the application on localhost:3000.

Should you wish to deploy the application
```bash
npm run build
```
will run 'next build' and 'next start' in succession.
Should you need to 'start' the project after it's already built you have access to
```bash
npm run start
```

And that's it!

Open [http://localhost:3000](http://localhost:3000) with your browser to see PICT in action.


## Tailwind
This app has been dynamically styled with Tailwind. 
If you've used Tailwind before, you understand the benefits and you're prepped for what you're about to see! No need to read this essay.
Otherwise, continue.
Tailwind, while wordy, ultimately cuts down on the time it takes to develop your front end. The learning curve is pretty flat too. It's very beginner friendly.
All Tailwind syntax goes inside of a component's 'className' property.
After you ran npm install, you should be able to hover over any given term inside "className" property and see a modal above your cursor telling you exactly how the Tailwind syntax translates to vanilla CSS.
This will help you get on your feet and understand this codebase faster.
[Tailwind also provides excellent documentation.](https://tailwindcss.com/docs/installation) 
Type any css property or concept into their searchbar and you'll see an incredibly comprehensive and understandable explanation of how to translate that prop/cocept into Tailwind syntax. Quickly, at that.
For one final note about Tailwind - Tailwind comes out of the box with limited options. However, you can leverage tailwind.config.js to add specific css shorthand into Tailwind. I did so on a few occasions and if you read the file it should prove self explanitory.


## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
