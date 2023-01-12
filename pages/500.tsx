import Head from 'next/head';

export default function Custom404() {
  return (
    <>
      <Head>
        <title>Error | Blognya Gusti</title>
        <meta name="description" content="Error Page" />
      </Head>
      <h1>500 - Server-side error occurred</h1>
    </>
  );
}
