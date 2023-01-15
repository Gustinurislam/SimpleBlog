import axios from 'axios';
import Header from 'components/admin/crud/Header';
import TblRowSkeleton from 'components/admin/post/TblRowSkeleton';
import { NextPage } from 'next';
import Head from 'next/head';
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
      <Head>
        <title>Admin | Post | Blognya Gusti</title>
        <meta name="description" content="Halaman utama post" />
      </Head>

      <Header addBtnUrl={'/admin/post/add'} />

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
        <div className="grid grid-cols-3 border-b text-sm py-4 font-semibold">
          <p>Post 1</p>
          <p>Desc 1</p>

          <div className="flex space-x-2">
            <button className="btn-post box-equal gap-x-1">
              <FaEdit /> Edit
            </button>
            <button className="btn-post box-equal gap-x-1">
              <FaTrash />
              Delete
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default AdminPost;
