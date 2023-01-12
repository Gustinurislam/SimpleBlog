import limitChar from 'helpers/limitChar';
import Link from 'next/link';

type BreadcrumbPropType = {
  title: string
}

const Breadcrumb = ({title}: BreadcrumbPropType) => {
  return (
    <div>
      {/* breadcrumb */}
      <nav className="box-equal gap-x-2 text-sm text-gray-500">
        <Link href="/">
          <p className="hover:text-blue-500">Home</p>
        </Link>

        <span>&rsaquo;</span>

        <Link href="/post">
          <p className="hover:text-blue-500">Post</p>
        </Link>

        <span>&rsaquo;</span>

        <p>{limitChar(title, 20)}</p>
      </nav>
    </div>
  );
};

export default Breadcrumb;
