import pathToTitle from 'helpers/pathToTitle';
import upperCaseFirstLetter from 'helpers/upperCaseFirstLetter';
import { useRouter } from 'next/router';
import React from 'react';
import { FaChevronDown, FaFolderOpen, FaUserAlt } from 'react-icons/fa';

const Header = () => {
  const { asPath } = useRouter();
  const title = pathToTitle(asPath);

  return (
    <header className="bg-blue-500 text-white flex fixed top-0 inset-x-0 z-50">
      <h2 className="w-[300px] bg-blue-400 p-4 box-equal gap-x-4 font-bold">
        <FaFolderOpen color="white" />
        Blognya Gusti CMS
      </h2>

      <nav className="p-4 flex-1 box-between">
        <h1>{title}</h1>

        <button className="box-equal space-x-2">
          <FaUserAlt />
          <p>Gusti</p>
          <FaChevronDown />
        </button>
      </nav>
    </header>
  );
};

export default Header;
