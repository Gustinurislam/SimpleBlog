import Comments from 'components/post/slug/Comments';
import RelatedPost from 'components/post/slug/RelatedPost';
import ShareBtns from 'components/post/slug/ShareBtns';
import type { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import Head from 'next/head';
import axios from 'axios';
import { PostType } from 'pages';
import Breadcrumb from 'components/post/slug/Breadcrumb';

export type CommentType = {
  id: number;
  name: string;
  email: string;
  body: string;
};

type DetailPostPropType = {
  post: PostType;
  comments: CommentType[];
};

const DetailPost: NextPage<DetailPostPropType> = ({ post, comments }) => {
  return (
    <>
      <Head>
        <title>{post.title + ' | Blognya Gusti '}</title>
        <meta name="description" content={post.body} />
      </Head>

      <Breadcrumb title={post.title} />

      {/* tittle */}
      <h1 className="text-2xl font-bold my-4">{post.title}</h1>

      {/* date */}
      <div className="flex text-sm border-b border-gray-300 pb-2 mb-6">
        <p className="text-blue-500 hover:text-red-500 hover:underline mr-2">
          Gusti
        </p>
        <span className="text-gray-400">| Des 31 2022</span>
      </div>

      {/* content */}
      <article dangerouslySetInnerHTML={{ __html: post.body }} />

      {/* share icons */}
      <ShareBtns />

      {/* related post  */}
      <RelatedPost />

      {/* comments */}
      <Comments comments={comments} />
    </>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  try {
    const res = await axios.get('/posts');
    const paths = res.data.slice(0, 10).map((post: PostType) => {
      return { params: { id: `${post.id}` } };
    });

    return {
      paths,
      fallback: 'blocking',
    };
  } catch {
    return {
      paths: [],
      fallback: 'blocking',
    };
  }
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  try {
    const [post, comments] = await Promise.all([
      axios.get('/posts/' + params?.id),
      axios.get(`/posts/${params?.id}/comments`),
    ]);

    return {
      props: {
        post: post.data,
        comments: comments.data,
      },
      revalidate: 10,
    };
  } catch {
    return { notFound: true };
  }
};

export default DetailPost;
