import Head from 'next/head';

export default function HackerNews() {
  return (
    <div>
      <Head>
        <title>Mike Bowman | Hacker News</title>
      </Head>
      <header className="bg-orange-500 py-2 flex justify-between items-center">
        <div className="flex items-center">
          <img
            className="inline-block border border-white h-5 w-5 ml-1 mr-2"
            src="https://news.ycombinator.com/y18.gif"
            alt="HackerNews Logo"
          />
          <div className="inline-block">
            <p className="font-extrabold">Hacker News</p>
            <p className="text-sm">
              new | past | comments | ask | show | jobs | submit
            </p>
          </div>
        </div>
        <p className="text-sm mr-2">login</p>
      </header>
    </div>
  );
}
