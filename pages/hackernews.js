import Head from 'next/head';

import InProgress from '../components/InProgress';

const navLinks = ['new', 'past', 'comments', 'ask', 'show', 'jobs', 'submit'];

const posts = [
  {
    title: 'Log4jmemes.com: for those of us that need a laugh',
    domain: 'log4jmemes.com',
    points: 351,
    submittedBy: 'MalacodaV',
    timestamp: '2 hours ago',
    commentCount: 62,
  },
];

export default function HackerNews() {
  return (
    <div>
      <Head>
        <title>Mike Bowman | Hacker News</title>
      </Head>
      {/* <InProgress /> */}
      <header className="bg-orange-500 py-1 flex justify-between items-center">
        <div className="flex items-center">
          <img
            className="inline-block border border-white h-5 w-5 ml-1 mr-2"
            src="https://news.ycombinator.com/y18.gif"
            alt="HackerNews Logo"
          />
          <div className="inline-block leading-snug">
            <p className="font-extrabold">Hacker News</p>
            <p className="text-xs">
              {navLinks
                .map((link) => (
                  <a href="#" key={link}>
                    {link}
                  </a>
                ))
                .reduce(
                  (acc, item) =>
                    acc === null
                      ? [item]
                      : [acc, <span className="mx-1"> | </span>, item],
                  null
                )}
            </p>
          </div>
        </div>
        <p className="text-xs mr-2">login</p>
      </header>
      <main className="bg-orange-100 bg-opacity-40">
        {posts.map((post) => (
          <div>{post.title}</div>
        ))}
      </main>
    </div>
  );
}
