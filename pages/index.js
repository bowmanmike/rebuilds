import Head from 'next/head';
import Link from 'next/link';
import PropTypes from 'prop-types';

const PageCard = ({ pageData }) => (
  <Link href={pageData.href}>
    <a className="border border-gray-500 p-4 text-center">{pageData.name}</a>
  </Link>
);

export default function Home() {
  const pages = [
    { name: 'Hacker News', href: '/hackernews' },
    { name: 'Fake', href: '/first' },
  ];

  return (
    <div>
      <Head>
        <title>Mike Bowman | Rebuilds</title>
      </Head>
      <main className="bg-blue-200 m-4 p-2 flex gap-4 flex-col">
        <header>
          <h1 className="text-2xl">Rebuilds</h1>
        </header>
        {pages.map((page) => (
          <PageCard key={page.href} pageData={page} />
        ))}
      </main>
    </div>
  );
}

PageCard.propTypes = {
  pageData: PropTypes.shape({
    name: PropTypes.string,
    href: PropTypes.string,
  }),
};
