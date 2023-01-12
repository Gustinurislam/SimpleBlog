import { SocialIcon } from 'react-social-icons';

const Header = () => {
  return (
    <header>
      <div className="flex justify-between items-center ">
        {/* link */}
        <div className="flex pl-3 text-base font-semibold text-gray-500 cursor-pointer">
          <select className="inline sm:hidden outline-none cursor-pointer">
            <option>Navigation</option>
            <option>About</option>
            <option>Kontak</option>
            <option>Disclaimer</option>
            <option>Sitemap</option>
          </select>
          <div className="hidden sm:inline-flex space-x-3">
            <p>About</p>
            <p>Kontak</p>
            <p>Disclaimer</p>
            <p>Sitemap</p>
          </div>
        </div>

        {/* icon */}
        <div className="flex cursor-pointer">
          <SocialIcon
            url="https://youtube.com"
            bgColor="transparent"
            fgColor="gray"
          />
          <SocialIcon
            url="https://linkedin.com"
            bgColor="transparent"
            fgColor="gray"
          />
          <SocialIcon
            url="https://twitter.com"
            bgColor="transparent"
            fgColor="gray"
          />
          <SocialIcon
            url="https://facebook.com"
            bgColor="transparent"
            fgColor="gray"
          />
        </div>
      </div>

      {/* banner */}
      <div className="bg-blue-500 p-4 text-white box-between">
        <div>
          <p className="text-2xl font-bold">Blog Gusti</p>
          <p>Isinya tentang Gusti</p>
        </div>

        {/* img / adds */}
        <div className="w-[400px] h-[60px] bg-gray-300 box-center">
          <p className='text-2xl'>468 x 60 pixel</p>
        </div>
      </div>
    </header>
  );
};

export default Header;
