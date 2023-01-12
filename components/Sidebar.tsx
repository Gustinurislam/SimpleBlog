import Link from 'next/link';
import { PostType } from 'pages';
import constants from 'helpers/constants';

const categories = constants.categories

type SidebarPropType = {
  posts: PostType[];
};

const Sidebar = ({ posts }: SidebarPropType) => {
  return (
    <nav className="w-[350px] min-w-[350px] max-w-[350px] p-4">
      {/* title  */}
      <div className="box-equal gap-x-2 mb-4">
        <div className="w-[20px] h-[20px] bg-red-500" />
        <span className="font-semibold uppercase">Featured post</span>
      </div>

      {/* featured post  */}
      <a
        href="#"
        className="text-lg font-semibold hover:text-red-500 hover:underline"
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </a>

      <div className="bg-gray-300 text-gray-500 text-lg box-center h-[130px] mt-4 mb-8">
        img
      </div>

      {/* title  */}
      <div className="box-equal gap-x-2 mb-4">
        <div className="w-[20px] h-[20px] bg-red-500" />
        <span className="font-semibold uppercase">Popular post</span>
      </div>
      {/* post  */}
      {posts.map((post) => (
        <Link key={'sidebar-post' + post.id} href={'.post/' + post.id}>
          <p className="pb-2 border-b border-gray-200 mb-2 hover:text-red-500 hover:underline block">
            {post.title}
          </p>
        </Link>
      ))}

      {/* title  */}
      <div className="box-equal gap-x-2 mt-8 mb-4">
        <div className="w-[20px] h-[20px] bg-red-500" />
        <span className="font-semibold uppercase">Categories</span>
      </div>

      {categories.map((cat) => (
        <a
          key={'sidebar-cat-' + cat}
          href="#"
          className="inline-block text-sm mr-2 bg-gray-200 hover:underline p-1 text-gray-700"
        >
          {cat}
        </a>
      ))}
    </nav>
  );
};

export default Sidebar;
