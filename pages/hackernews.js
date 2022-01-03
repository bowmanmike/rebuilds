import Head from 'next/head';

// import InProgress from '../components/InProgress';

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
  {
    title: 'AWS appears to be down again',
    domain: null,
    points: 1289,
    submittedBy: 'thadjo',
    timestamp: '2 hours ago',
    commentCount: 29,
  },
  {
    title: `No, we didn't accidentally create a warp bubble`,
    domain: 'bigthink.com',
    points: 48,
    submittedBy: 'russfink',
    timestamp: '2 hours ago',
    commentCount: 51,
  },
  {
    title:
      'Zed: lightning-fast, collaborative code editor written in Rust (Atom Team)',
    domain: 'zed.dev',
    points: 95,
    submittedBy: 'mattrighetti',
    timestamp: '1 hour ago',
    commentCount: 11,
  },
  {
    title:
      'Mayo Clinic research finds immune system respons to mRNA treatment for cancer',
    domain: 'mayoclinic.org',
    points: 62,
    submittedBy: 'geox',
    timestamp: '1 hour ago',
    commentCount: 11,
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
                      : [
                          acc,
                          <span className="mx-1" key={`separator-${item}`}>
                            {' '}
                            |{' '}
                          </span>,
                          item,
                        ],
                  null
                )}
            </p>
          </div>
        </div>
        <p className="text-xs mr-2">login</p>
      </header>
      {/* TODO: Fix BG colour */}
      <main className="bg-yellow-50 bg-opacity-70 py-2 px-2">
        {posts.map((post, i) => (
          <div className="grid grid-flow-col" key={post.title}>
            <div className="text-zinc-500 flex">
              <span>{i + 1}. </span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div>
              <p className="text-md">
                <a href="#" className="hover:underline">
                  {post.title}
                </a>
                <span className="text-xs text-gray-400 ml-1">
                  {post.domain && (
                    <a href="#" className="hover:underline">
                      {post.domain}
                    </a>
                  )}
                </span>
              </p>
              <p>
                {post.points} by{' '}
                <a href="#" className="hover:underline">
                  {post.submittedBy}
                </a>{' '}
                <a href="#">{post.timestamp}</a> |{' '}
                <a href="#" className="hover:underline">
                  hide
                </a>{' '}
                |{' '}
                <a href="#" className="hover:underline">
                  {post.commentCount} comments
                </a>
              </p>
            </div>
          </div>
        ))}
      </main>
    </div>
  );
}
