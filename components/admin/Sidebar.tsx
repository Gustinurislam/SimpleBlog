import Link from 'next/link';
import { FaHome, FaNewspaper, FaTags } from 'react-icons/fa';

const links = [
  {
    href: '/',
    text: 'Back to Home',
    icon: <FaHome className="text-blue-500" />,
  },
  {
    href: '/admin/post',
    text: 'Post',
    icon: <FaNewspaper className="text-blue-500" />,
  },
  {
    href: '/admin/category',
    text: 'Category',
    icon: <FaTags className="text-blue-500" />,
  },
];

const Sidebar = () => {
  return (
    <nav className="w-[300px] bg-blue-100 text-blue-500">
      {links.map(({ href, text, icon }) => (
        <Link key={href} href={href}>
          <h3 className="flex items-center hover:text-blue-400 hover:bg-white pl-4 py-2 gap-x-2">
            {icon}
            {text}
            <span className="text-lg">&rsaquo;</span>
          </h3>
        </Link>
      ))}
    </nav>
  );
};

export default Sidebar;
