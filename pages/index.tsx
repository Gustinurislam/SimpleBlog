import Post from 'components/index/Post';
import type { GetServerSideProps, NextPage } from 'next';
import Head from 'next/head';
import axios from 'axios';
import Link from 'next/link';

export type PostType = {
  id: number;
  title: string;
  body: string;
};

type HomePropType = {
  posts: PostType[];
  nextPage: number;
};

const Home: NextPage<HomePropType> = ({ posts, nextPage }) => {
  return (
    <>
      <Head>
        <title>Home | Blognya Gusti</title>
        <meta name="description" content="Isinya tentang Gusti" />
      </Head>

      {posts.map((post) => (
        <Post key={'post-in-index' + post.id} post={post} />
      ))}

      {/* pagination */}
      <div className="box-between text-sm">
        <Link href="#">
          <p className="text-blue-500 hover:underline hover:text-red-500">
            Home
          </p>
        </Link>

        <Link href={{ pathname: '/', query: { page: nextPage } }}>
          <p className="text-blue-500 hover:underline hover:text-red-500">
            Older Posts
          </p>
        </Link>
      </div>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  try {
    const { page } = query;
    const res = await axios.get('/posts', {
      params: {
        page,
      },
    });

    return {
      props: {
        posts: res.data.slice(0, 10),
        nextPage: page ? parseInt(page as string) + 1 : 2,
      },
    };
  } catch {
    return {
      redirect: {
        permanent: false,
        destination: '/404',
      },
      props: {},
    };
  }
};

export default Home;
