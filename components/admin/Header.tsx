import React from 'react';
import { FaFolderOpen } from 'react-icons/fa';

const Header = () => {
  return (
    <header className="bg-blue-500 text-white flex">
      <h2 className="w-[300px] bg-blue-400 p-4 box-equal gap-x-4 font-bold">
        <FaFolderOpen color="white" />
        Blognya Gusti CMS
      </h2>

      <nav className="p-4 flex-1 box-between">
        <h1>Home</h1>

        <p>Icon User</p>
      </nav>
    </header>
  );
};

export default Header;
