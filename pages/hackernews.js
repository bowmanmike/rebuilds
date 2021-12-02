import Head from 'next/head';

import InProgress from '../components/InProgress';

export default function HackerNews() {
  return (
    <div>
      <Head>
        <title>Mike Bowman | Hacker News</title>
      </Head>
      <InProgress />
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
              <a href="#">new</a> | <a href="#">past</a> |{' '}
              <a href="#">comments</a> | <a href="#">ask</a> |{' '}
              <a href="#">show</a> | <a href="#">jobs</a> |{' '}
              <a href="#">submit</a>
            </p>
          </div>
        </div>
        <p className="text-xs mr-2">login</p>
      </header>
      <main className="bg-orange-100 bg-opacity-40">
        <div className="py-12">Content!</div>
      </main>
    </div>
  );
}
