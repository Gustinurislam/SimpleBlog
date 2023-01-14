import Header from 'components/admin/crud/Header';
import { NextPage } from 'next';
import Head from 'next/head';
import { FaEdit, FaSort, FaTrash } from 'react-icons/fa';

const AdminPost: NextPage = () => {
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
    </>
  );
};

export default AdminPost;
