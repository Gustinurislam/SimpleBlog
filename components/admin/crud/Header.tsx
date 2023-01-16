import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import { FaPlus, FaSearch } from 'react-icons/fa';

const Header = () => {
  const { asPath } = useRouter();
  const addBtnUrl = asPath + '/add';

  return (
    <div className="box-between">
      {/* add btn  */}
      <Link href={addBtnUrl}>
        <button className="btn-post box-equal gap-x-1">
          <FaPlus /> Add New
        </button>
      </Link>
      {/* seacrh bar  */}
      <div className="box-equal gap-x-2">
        <input
          type="text"
          placeholder="Search"
          className="p-[7px] border rounded-md bg-transparent border-blue-500"
        />
        <button className="btn-post box-equal gap-x-1">
          <FaSearch />
          Search
        </button>
      </div>
    </div>
  );
};

export default Header;
