import 'styles/globals.css';
import type { AppProps } from 'next/app';
import axios from 'axios';
import Default from 'layouts/Default';
import { useRouter } from 'next/router';
import Admin from 'layouts/Admin';
import store from 'store';
import { Provider } from 'react-redux';

axios.defaults.baseURL = process.env.apiBaseUrl;

function MyApp({ Component, pageProps }: AppProps) {
  const { route } = useRouter();

  if (route.includes('/admin')) {
    return (
      <Provider store={store}>
        <Admin>
          <Component {...pageProps} />
        </Admin>
      </Provider>
    );
  }

  return (
    <Default>
      <Component {...pageProps} />
    </Default>
  );
}

export default MyApp;
