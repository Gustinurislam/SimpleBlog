import { SocialIcon } from 'react-social-icons';

const ShareBtns = () => {
  return (
    <nav className="mt-8 flex space-x-2 cursor-pointer">
      <SocialIcon network="facebook" className="active-icons" />
      <SocialIcon network="twitter" className="active-icons" />
      <SocialIcon network="linkedin" className="active-icons" />
      <SocialIcon network="whatsapp" className="active-icons" />
      <SocialIcon network="pinterest" className="active-icons" />
    </nav>
  );
};
export default ShareBtns;
