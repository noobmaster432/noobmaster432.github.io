interface SectionTitleProps {
    title: string;
    number: string;
};

const SectionTitle = ({title, number} : SectionTitleProps) => {
  return (
    <h2 className="font-sans text-lg sm:text-2xl font-semibold flex items-center">
      <span className="sm:text-base text-sm md:text-lg text-textGreen mr-2">
        {number}.
      </span>{" "}
      {title}
      <span className="hidden md:inline-flex md:w-60 lgl:w-72 h-[.5px] bg-gray-700 ml-6"></span>
    </h2>
  );
};

export default SectionTitle;
