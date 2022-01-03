import 'tailwindcss/tailwind.css';
import PropTypes from 'prop-types';

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;

// MyApp.propTypes = {
//   Component: PropTypes.object,
//   pageProps: PropTypes.object,
// };
