import limitChar from 'helpers/limitChar';
import Link from 'next/link';
import { PostType } from 'pages/index';

type PostPropType = {
  post: PostType;
};

const Post = ({ post }: PostPropType) => {
  return (
    <div className="box-equal gap-x-4 mb-8">
      {/* img  */}
      <div className="box-equal">
        <div className="bg-gray-300 box-center w-[200px] h-[130px] min-w-[200px] min-h-[120px] max-w-[200px] max-h-[130px]">
          img
        </div>
      </div>

      {/* text  */}
      <div>
        <small className="flex gap-x-2 text-gray-700">
          <a href="#" className="text-red-500 hover:underline">
            video
          </a>
          <span>| Dec 30, 2022</span>
        </small>

        {/* tittle {link} */}
        <Link href={'/post/' + post.id}>
          <p className="text-xl block font-semibold my-2 hover:text-blue-500">
            {limitChar(post.title, 40)}
          </p>
        </Link>

        <p className="text-gray-500 text-sm">{limitChar(post.body, 100)}</p>
      </div>
    </div>
  );
};

export default Post;
