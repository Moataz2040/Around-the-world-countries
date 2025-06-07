import Logo from "./Logo";
import ThemeSwithcer from "./ThemeSwithcer";
const Header = () => {
  return (
    <header className="mb-6 bg-white shadow dark:bg-gray-800 md:mb-12">
      <div className="container mx-auto px-5 md:mx-0">
        <div className="flex h-20 items-center justify-between">
          <Logo />
          <ThemeSwithcer />
        </div>
      </div>
    </header>
  );
};
export default Header;
