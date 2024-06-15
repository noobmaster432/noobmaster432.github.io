import Link from "next/link";
import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa6";

const BackToTop = () => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
  }, []);

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
    <>
      {visible && (
        <Link
          href="#home"
          onClick={handleScroll}
          className="z-50 group fixed right-20 bottom-4 flex justify-center items-center w-12 h-12 border-2 border-blue-600 rounded-full cursor-pointer hover:bg-hoverColor hover:text-white"
        >
          <FaArrowUp className="text-blue-600 group-hover:text-white" />
        </Link>
      )}
    </>
  );
};

export default BackToTop;
