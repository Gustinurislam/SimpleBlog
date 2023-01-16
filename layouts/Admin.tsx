import Header from 'components/admin/Header';
import Sidebar from 'components/admin/Sidebar';
import Snackbar from 'components/admin/Snackbar';
import pathToTitle from 'helpers/pathToTitle';
import Head from 'next/head';
import { useRouter } from 'next/router';

type AdminPropType = {
  children: React.ReactNode;
};

function Admin({ children }: AdminPropType) {
  const { asPath } = useRouter();
  const title = pathToTitle(asPath);

  return (
    <div>
      <Head>
        <title>{title + ' | Blognya Gusti'}</title>

        <meta name="description" content="Admin dashboard CMS" />
      </Head>

      <Header />

      <main className="flex min-h-screen mt-[56px]">
        <Sidebar />

        <section className="flex-1 p-6">
          {children}
          <Snackbar />
        </section>
      </main>
    </div>
  );
}

export default Admin;
