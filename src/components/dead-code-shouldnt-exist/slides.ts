// Speaker notes extracted from the React Alicante Keynote deck.
export const slides = [
  {
    alt: "Dead Code Shouldn't Exist",
    notes: "",
  },
  {
    alt: "About Dominik Dorfmeister",
    notes:
      "My name is Dominik, I’m a Software Engineer from Vienna. You can find me as TkDodo online almost everywhere; I write a blog at tkdodo.eu, mostly about React and TypeScript, and for the last 5 years, I have been maintaining the open source library TanStack Query. Question:\n\nI'm not here to talk about RQ, because... beginning of last year, I joined the Design Engineering Team at Sentry, where we are not working directly on a specific part of the product. Instead, our goal is ...",
  },
  {
    alt: "Make ship happen",
    notes:
      "to make ship happen: We want to enable other teams to ship efficiently.\n\nBasically, I see myself mostly as a DX engineer, and our team aims to make two things possible:",
  },
  {
    alt: "Ship the right things consistently",
    notes:
      'we want to:\nmake it easy for product teams to ship the right things efficiently and consistently, and at the same time,\nGUIDE THEM towards not shipping the "wrong" or inconsistent things - basically get them into the PIT OF SUCCESS per default.\n\nTo get there, a big part of our team\'s job is building a design-system:',
  },
  {
    alt: "A design system for product teams",
    notes:
      "a library of consistent components with good APIs, documentation, type-safety and accessibility built-in. Components need to be easily discoverable so that product developers (and/or AI agents) can compose them and ship fast while breaking nothing.\n\nFor the second point...",
  },
  {
    alt: "Constraints for developers and AI",
    notes:
      "...we are actively working on CONSTRAINTS: typescript, linting, but also project structure, documentation and teaching and SKILLS play a big role.\n\nIn a nutshell, we try to get the overall codebase (that has grown organically a lot over the last 10 or so years) in a good shape and give people and AI the tools to ship fast.\nThat means we have to touch a lot of parts of the codebase, regularly.  Like, for example,",
  },
  {
    alt: "Enabling noImplicitAny at Sentry",
    notes:
      "my very first PR at sentry touched 900+ files because I enabled the noImplicitAny compiler setting. Like, really, how can you work without that?\n\nAnd while I did this and other improvements, I was sometimes wondering if I should maybe QA the things I was touching, so I was trying to find out where they are used, and sometimes, it turned out: THEY WEREN’T.\n\nWhen I introduced...",
  },
  {
    alt: "An unused React Query hook",
    notes:
      "...a lint rule for react-query, I got a bunch of violations, so I set out to fix them all. One occurrence was this custom hook. I battled with it for a while to fix the lint violation, but then I saw: that hook IS UNUSED.\n\nThat’s when I thought to myself: NO MORE. This is slowing me down, I'm wasting time here. We gotta clean house. Because...",
  },
  {
    alt: "The cost of unused code",
    notes:
      "...Unused code has a real cost. It means developers will spend time reading, trying to understand and maybe even refactor code that shouldn’t be there in the first place.\n\nThis becomes ...",
  },
  {
    alt: "Unused code in the age of AI",
    notes:
      "... even more important in the age of AI, where generating extra code is easy but maintaining it later is hard, and every unused line still consumes tokens and bloats the context window.\n\nLibrary upgrades ...",
  },
  {
    alt: "The cost of library upgrades",
    notes:
      "Library upgrades or changing lint rules becomes more painful the more usages we have to adapt.\n\nEslint and TypeScript don't care if code is used or not - if it exists, it needs to be error-free.\n\nIt might even...",
  },
  {
    alt: "Unused code and bundle size",
    notes:
      "...increase your bundle size if it's not properly tree-shaken out, e.g. if you have modules that have side-effects.\n\nAll in all, it's a PAIN; it will increase COGNITIVE LOAD, and it will slow us down.. That's why we should CARE about not having unused code.\n\nSo how ....",
  },
  {
    alt: "How did we end up here?",
    notes:
      "... did we end up here?\n\nI like to believe that engineers are responsible beings that clean up after themselves. In truth, we have to be constantly reminded about the most basic forms of cleanup.\n\nI think we are, rightfully so, ...",
  },
  {
    alt: "Error-driven development with TypeScript",
    notes:
      "...driven by errors.\nTypeScript, gives us CONFIDENCE. One of the biggest advantages of TypeScript is that it takes dependencies that used to be in your head and makes them explicit in code. Oh, If I change something here, I should not forget to change something over there as well. In plain JS without types, that was horribly hard on bigger codebases. With TypeScript, that becomes explicit.\n\nThat’s huge for our PRODUCTIVITY and CONFIDENCE, but we’ve come so far as to rely on this a lot. And it’s not...",
  },
  {
    alt: "Linting, testing and CI guard rails",
    notes:
      "....just TypeScript. It’s linting and testing and all the static analysis we do in CI pipelines and guard rails we have in place.\n\nIf the thing ain’t red, that means I’m still operating in bounds of what is “allowed” or considered “good practice”, so I'm usually not looking any further than that.\n\nSo that’s how, plain and simple, dead code sticks around. If no one tells us to remove it, we won’t.",
  },
  {
    alt: "Does TypeScript catch unused code?",
    notes:
      'Okay, you might be thinking: Hey, there’s my good friend TS6133  - "is declared but never used”. I always see this when I forget to remove an import, so we should be good?\n\nWell, yes and no. Let’s assume...',
  },
  {
    alt: "A local formatBytes function",
    notes:
      '...we have this simple / contrived example code - A React Component and a local util function that is used within this component. Now, if we remove the FileSize component, and formatBytes was only used inside this component, TypeScript will tells with TS6133 that formatBytes is unused. That’s great, we can and should remove it.\n\n"noUnusedLocals": true,\n\nBut what happens if we change a tiny thing:',
  },
  {
    alt: "An exported formatBytes function",
    notes:
      "adding `export` in front of formatBytes. Then, TypeScript won’t report any errors, because TypeScript simply doesn’t do\n\ncross-module usage analysis.\n\nIf a symbol is exported, TypeScript assumes it might be used in another file and won’t ever report on it.\nAnd that’s a problem. Maybe not in this simple scenario, but in practice, what happens a lot is that we extract that function to a utils.ts file:",
  },
  {
    alt: "Moving formatBytes to a utility file",
    notes:
      "And now, we might delete file-size/index.tsx, but not the util file - especially if it isn’t co-located - util files tend to become global over time.\n\nSo that’s the thing. That’s the easiest, and most common way, to produce “dead code”. AI does it all the time.\n\nNow good IDEs can help with that, for example, IntelliJ creates an index of everything, and can then...",
  },
  {
    alt: "Unused exports in the editor",
    notes:
      "...mark unused exports visually. However, it’s still up to developers to spot these things and act accordingly.\n\nI thought: this can’t be it, like, surely, someone else must’ve had the same problem already and built a tool for this. And it turns out, there are quite a lot of tools that try to help with this. Tools like ts-prune or unimported ...",
  },
  {
    alt: "ts-prune and unimported recommend Knip",
    notes:
      "... have existed for some time, and what they all have in common is that they are now either archived or unmaintained and recommend using knip by Lars Kappert instead.\n\nSo what is knip?",
  },
  {
    alt: "Knip: unused files, exports and dependencies",
    notes:
      "knip is a comprehensive tool to statically analyze your code for unused files, exports and dependencies, and then reports them to you so that you can delete them.\n\nIt’s quite fast - it takes around 15seconds in the large sentry codebase, it tries to be zero config (though it very likely will need some configuration in serious codebases, sentry: 80LOC). It has a lot of plugins, support for monorepos and auto-fixing, too.\n\nThat’s a great sales-pitch, but how does it work?",
  },
  {
    alt: "Project files",
    notes:
      "at its core, knip needs two things to work:\n\nit has to know which files are part of your project. How complicated this is usually depends on your structure, but it can be as easy as ... all the TS files in your src dir.\n\nand ...",
  },
  {
    alt: "Project entry points",
    notes:
      "it has to know where your entry points are\n\nEntry points to your application vary drastically between which bundler or framework you are using. For example, in nextJs, every page.tsx and layout.tsx inside the app directory is an entry point. If you just use vite, it’s likely just main.tsx...\n\nOnce it knows that...",
  },
  {
    alt: "The graph of used symbols",
    notes:
      "... it will traverse the project starting from entry points to build a graph of used symbols. It will then report on things that are in the project, but not in that graph. So in this simple example, it would report on the two 🔴.\n\nThat’s pretty much it, and it works remarkably well. So the big question is: where do those two things - entries and project - come from, and how can aim to be zero config?\n\nIn short, it tries to be smart and auto-detect what you're using with its...",
  },
  {
    alt: "Knip plugins: Vitest",
    notes:
      "...plugins. To do that, it will look at your package.json to see what you’re depending on, and it will configure itself accordingly.\n\nOh, you’re using vitest ? Let me look at your vitest config to see which files are your tests.",
  },
  {
    alt: "Knip plugins: Astro",
    notes:
      "Do I spy an astro project? I’ll try to infer the entry points from that then!\n\nFor each of those technologies, it has a separate plugin, as each one can produce different configuration. Right now, it has over 150 (183) plugins and counting!\n\nWhat the plugins mostly do is they automatically add things to the project and entry settings so that you don’t have to. For example, if you use vitest...",
  },
  {
    alt: "Vitest plugin configuration and entries",
    notes:
      "...these entries will be added, because that’s how vitest picks them up, and knip will also read the config file to find referenced dependencies and parse it to produce entries if necessary.\n\nOkay, enough talk ...",
  },
  {
    alt: "Demo time",
    notes: "",
  },
  {
    alt: "Can we find more unused code?",
    notes:
      "So, removing all that totally unused code is super nice, but what if we could do better?\n\nSometimes, developers do this thing called...",
  },
  {
    alt: "Tests for unused production code",
    notes:
      "...writing tests (AI loves it)\n\nSo what happens if we have code that is unused in production, but has a test? Technically, it has a usage, but it can still be deleted because we don't need it anymore.\n\nIn those case, we ...",
  },
  {
    alt: "The cost of testing dead code",
    notes:
      "...not only have to maintain dead code, we also waste time in CI to test it. And imagine if those tests are flaky, too - that's double the pain!\n\nSo, the question is: Can knip detect those as well? And the answer is: yes, it can - with production mode!",
  },
  {
    alt: "Knip production mode",
    notes:
      "Knip has a “production mode” to focus only on the code that we actually ship. That means knip must know what is a “production entry” and which files in the project are marked for “production” use.\n\nThe syntax is a bit weird - we need to add an ! to the end of a glob pattern to mark something as “for production”.",
  },
  {
    alt: "Production project files and entry points",
    notes:
      "So taking our example from before, every ts(x) file in src would be our production code, with src/main.tsx being the production entry point, and then additional “build” code would not have the exclamation mark at the end, so those files are invisible for production mode.\n\nThis works okay if your code-base is nicely structure, in sentry, our project looks more like this:",
  },
  {
    alt: "Sentry production mode configuration",
    notes:
      "that’s mainly because there is no structure yet on where to put test helpers or fixtures, so we have to explicitly exclude them (leading !) from production mode (trailing !).\n\nStill, even though it needs some configuration, production mode is a great way to find leftovers, because not even my editor will show them as unused.\n\nJust one example...",
  },
  {
    alt: "An unused function with tests",
    notes:
      "...here we found a getIncidentDiscoverUrl that had tests, but no other usage, so that was an easy cleanup. Over 2/3rds of dead code we found was because of production mode, so I think it's totally worth it!\n\nNow, this all sounds great, and we were able to remove a lot of dead code with knip, but...",
  },
  {
    alt: "Problems and limitations",
    notes:
      "...since this is a real-life story, we have to acknowledge that not everything was perfect.\nThere were some problems and limitations we ran into, and I want to share those with you as well.\n\nProbably the biggest one is that it ...",
  },
  {
    alt: "How Knip influences our work",
    notes:
      'influences how we work.\nSentry has hundreds of people contributing to the codebase regularly, so any change in “how we work” is potentially disruptive.\n\nOne thing we tend to do is add code without an explicit usage because we "need it in a future PR". Of course, it’s not possible for knip to differentiate this with real dead code.\n\nOne PR I made got closed...',
  },
  {
    alt: "Deleting code intended for future use",
    notes:
      '...because it was deleting code that was added 6 months ago but wasn\'t used, so I thought it was a leftover - turns out it just got "de-prioritized" in the product and there were still plans to use it.\n\nNow with knip running in CI, coding this way just won’t work well. Yes, you can OPT OUT by ignoring these files in the knip config or...',
  },
  {
    alt: "The @public annotation",
    notes:
      "adding a JSDOC comment - knip will leave those alone. But I think it's probably better to just write USED code. PRs should be isolated units of work, and we can always hide things behind a feature flag. Eventually, that comment will prevent this function from being cleaned-up correctly when it really becomes unused.\n\nI've also seen the tendency....",
  },
  {
    alt: "Unnecessary exports",
    notes:
      "... to just write export in front of everything, even though it's only used in the current file. Maybe this is because we think we have to write \"export const\", or maybe it's from copy-paste or maybe AI always adds the export keyword, idk.\n\nOf course, knip will flag these things in CI, and you will have to remove the export statement from those things again, ...",
  },
  {
    alt: "A slower feedback loop",
    notes:
      "...which creates a much SLOWER FEEDBACK LOOP, which can be annoying. To address this, we have created an opt-in pre-push hook for devs that don’t want to wait on CI to finish.\n\nBut the good news is that knip also ...",
  },
  {
    alt: "The Knip language server",
    notes:
      "...also has a language server now, which powers their MCP server and editor integrations for VSCode and IntelliJ.\n\nThis means we can now get red squiggles for unused exports right in our Editors, which can really help with that otherwise slow feedback loop.\n\nAnother thing we've seen that can be tricky is if something is exported only for tests. To understand what I mean by that, let's go back to our initial, made-up example:",
  },
  {
    alt: "Exporting formatBytes for tests",
    notes:
      "Now we might want to write a test for our formatBytes util, so we export it, which allows us to import it in the test file. But in production mode, test files are excluded per design, so this export for formatBytes is then showing up as unused in production mode.\n\nI think the best thing we can do here is to … ",
  },
  {
    alt: "Testing implementation details",
    notes:
      '... not test implementation details, like the formatBytes function, but focus on the "public interface" - what others will import in the codebase - in this case the FileSize component.\n\nNow, 50% of you will probably disagree with this, and it can also be annoying in existing codebases that do this a lot, so we can also tell knip to...',
  },
  {
    alt: "The @internal annotation",
    notes:
      '...shut up by adding the @internal jsdoc. This will mark the export as not meant for public consumption, but only for internal usage such as tests. It will still be reported in "regular" mode when it becomes completely unused, but it will not be reported in production mode.\n\nWhat we do at sentry though is to...',
  },
  {
    alt: "The ignoreExportsUsedInFile option",
    notes:
      "...is to run the production mode with the ignoreExportsUsedInFile setting. With this option enabled, knip will not report an export if it has a local usage, like formatBytes, as it's being used in the FileSize component.\n\nThis is great for production mode as we mainly want to find things that are completely unused apart from tests. So, I think knip has really thought of everything!\n\nOkay, so apart from influencing how we work, I’ve also run into some interesting technical limitations that are worth sharing. The first one is about:",
  },
  {
    alt: "Dynamic imports",
    notes:
      "Dynamic imports, which generally work well in knip, but there are cases where it might not pick up on things. For example, we’ve had this situation inside one of our main entry points, where we...",
  },
  {
    alt: "A dynamic import promise",
    notes:
      "...trigger a dynamic import promise early, but await it later, conditionally:\nKnip didn't keep track of where the init variable is being used, so here the fix was simply to add 'sentry/bootstrap/initializeMain' to our list of known entry points. BUT it's no longer necessary, as knip keeps getting better and better!\n\nI also managed to delete some code I shouldn't have and restored it after I found out about that, because of some highly dynamic things we do with...",
  },
  {
    alt: "Webpack require.context",
    notes:
      "... require.context is a webpack specific feature that allows you to dynamically search a directory and import multiple files filtered by a regex. Webpack will then do some magic at build time to require each file individually. In our case, we were loading all forms:",
  },
  {
    alt: "Loading form configuration with require.context",
    notes:
      "So, some of those form files showed up as unused, which is why I deleted them. There  was no type error or anything because this is is hugely dynamic.\n\nOkay, the fix here was again to add that whole folder as entry, but it’s worth mentioning that I’m not a fan at all of code like that. If I, as a developer, want to “find usages” of a certain file, this pattern makes it impossible for me to do that. If it's hard to statically analyze, it's also hard for humans to understand",
  },
  {
    alt: "Cleanup statistics",
    notes:
      "All in all, I made over 50 PRs over the course of a couple of weeks.\n28k - almost 3% of the whole codebase!\n\nBut the BIGGEST WIN is having knip run in CI preventing new dead code from being added. I sometimes find PRs that had a CI failure and a follow-up commit saying “make knip happy” deleting unused code, and that’s just great!\n\nSo, if you want …",
  },
  {
    alt: "Try npx knip",
    notes:
      "So, if you want to try out knip, it's as easy as running npx knip in your code-base. See how far you can get without any config - it will likely show you some good stuff, and if there are false positives - add some configuration\n\nand declutter YOUR codebase too ...",
  },
  {
    alt: "One Knip at a time",
    notes: "... one knip at a time. Thank you",
  },
] as const;
