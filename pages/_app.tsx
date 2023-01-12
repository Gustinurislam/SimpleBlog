import 'styles/globals.css';
import type { AppProps } from 'next/app';
import axios from 'axios';
import Default from 'layouts/Default';
import { useRouter } from 'next/router';
import Admin from 'layouts/Admin';

axios.defaults.baseURL = process.env.apiBaseUrl;

function MyApp({ Component, pageProps }: AppProps) {
  const { asPath } = useRouter();

  if (asPath.includes('/admin')) {
    return (
      <Admin>
        <Component {...pageProps} />
      </Admin>
    );
  }

  return (
    <Default>
        <Component {...pageProps} />
    </Default>
  );
}

export default MyApp;
