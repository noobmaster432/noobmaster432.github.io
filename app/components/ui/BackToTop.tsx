import Link from "next/link";
import { FaArrowUp } from "react-icons/fa6";

const BackToTop = () => {
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    const href = e.currentTarget.href;
    const targetId = href.replace(/.*\#/, "");
    const elem = document.getElementById(targetId);
    elem?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <Link
      href="#home"
      onClick={handleScroll}
      className="hidden z-50 group fixed right-20 bottom-4 lg:flex justify-center items-center w-12 h-12 rounded-full cursor-pointer bg-hoverColor hover:bg-iconHover hover:-translate-y-1 transition-transform duration-300"
    >
      <FaArrowUp className="text-textLight group-hover:text-slate-50" />
    </Link>
  );
};

export default BackToTop;
