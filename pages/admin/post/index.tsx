import axios from 'axios';
import Header from 'components/admin/crud/Header';
import TblRowSkeleton from 'components/admin/post/TblRowSkeleton';
import limitChar from 'helpers/limitChar';
import { NextPage } from 'next';
import Link from 'next/link';
import { PostType } from 'pages';
import { FaEdit, FaSort, FaTrash } from 'react-icons/fa';
import useSWR from 'swr';

const fetcher = async () => {
  const res = await axios.get('/posts');
  return res.data.slice(0, 5);
};

const AdminPost: NextPage = () => {
  const { data, error } = useSWR('/posts', fetcher);

  return (
    <>
      <Header/>

      {/* tbl */}
      <div className="grid grid-cols-3 border-y py-4 text-sm mt-8 font-bold text-blue-500">
        <button className="box-equal gap-x-2">
          Title <FaSort />
        </button>
        <button className="box-equal gap-x-2">
          Content <FaSort />
        </button>
        <p>Actions</p>
      </div>

      {error ? (
        <nav className="w-[350px] min-w-[350px] max-w-[350px] p-4">
          <p className="text-red-500">An error occurred</p>
        </nav>
      ) : !data ? (
        <TblRowSkeleton />
      ) : (
        // tbl row
        data.map((post: PostType) => (
          <div
            key={post.id}
            className="grid grid-cols-3 border-b text-sm py-4 font-semibold items-center"
          >
            <p>{limitChar(post.title, 40)}</p>
            <p>{limitChar(post.body, 100)}</p>

            <div className="box-equal gap-x-2">
              <Link href={'/admin/post/edit' + post.id}>
                <button className="btn-post box-equal gap-x-1">
                  <FaEdit /> Edit
                </button>
              </Link>

              <Link href={'/admin/post/delete'}>
                <button className="btn-post box-equal gap-x-1">
                  <FaTrash />
                  Delete
                </button>
              </Link>
            </div>
          </div>
        ))
      )}
    </>
  );
};

export default AdminPost;
