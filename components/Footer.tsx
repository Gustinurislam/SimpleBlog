const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-300 text-center py-8">
      Copyright &copy; {currentYear} Blog Gusti. All right reserved.
    </footer>
  );
};

export default Footer;
