import Link from 'next/link';
import { PostType } from 'pages';
import constants from 'helpers/constants';

const categories = constants.categories;

type BlueBoxPropType = {
  posts: PostType[];
};

const BlueBox = ({ posts }: BlueBoxPropType) => {
  return (
    <nav className="bg-blue-500 text-white p-8 grid grid-cols-3 gap-x-4 ">
      <div>
        <p className="font-semibold mb-4 uppercase">Popular Post</p>

        {posts.map((post) => (
          <Link key={'bluebox-post' + post.id} href={'.post/' + post.id}>
            <p className="pb-2 border-b border-blue-600 mb-2 hover:text-gray-200 block text-sm">
              {post.title}
            </p>
          </Link>
        ))}
      </div>

      <div>
        <p className="font-semibold mb-4 uppercase">Category</p>

        {categories.map((cat) => (
          <a
            key={'bluebox-cat-' + cat}
            href="#"
            className="pb-2 border-b border-blue-600 mb-2 hover:text-gray-200 block text-sm"
          >
            {cat}
          </a>
        ))}
      </div>
    </nav>
  );
};

export default BlueBox;
