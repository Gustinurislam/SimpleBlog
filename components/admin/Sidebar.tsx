import Link from 'next/link';
import { useRouter } from 'next/router';
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
  const { route } = useRouter();
  const defaultClass =
    'flex items-center hover:text-blue-400 hover:bg-white pl-4 py-2 gap-x-2';

  const renderLinkClass = (url: string) => {
    if (url === route) {
      return 'box-equal bg-white pl-4 py-2 gap-x-2';
    } else {
      return defaultClass;
    }
  };

  return (
    <nav className="w-[300px] bg-blue-100 text-blue-500">
      {links.map(({ href, text, icon }) => (
        <Link key={href} href={href}>
          <h3 className={renderLinkClass(href)}>
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
