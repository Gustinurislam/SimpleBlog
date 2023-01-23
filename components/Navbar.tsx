import Link from 'next/link';
import { useRouter } from 'next/router';

export const categories = ['Text', 'Image', 'Video'];

const Navbar = () => {
  const { pathname } = useRouter();
  const active = 'p-4 bg-blue-500 text-white';
  const notActive = 'p-4 hover:bg-blue-500 hover:text-white';
  return (
    <nav className="box-between bg-gray-300">
      <div className="flex text-gray-500">
        <Link href="/">
          <h2 className={pathname === '/' ? active : notActive}>Home</h2>
        </Link>

        {categories.map((cat) => (
          <a
            key={'nav-bar' + cat}
            href="/"
            className="p-4 hover:bg-blue-500 hover:text-white"
          >
            {cat}
          </a>
        ))}
      </div>

      <form className="pr-2" onSubmit={(e) => e.preventDefault()}>
        <input type="text" placeholder="Search here" className="bg-white p-2" />

        <button className="bg-blue-500 text-white p-2 active:scale-105 transition transform duration-75 ease-in-out">
          Search
        </button>
      </form>
    </nav>
  );
};

export default Navbar;
