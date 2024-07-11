import { motion } from "framer-motion";
import { TiArrowForward } from "react-icons/ti";

interface companyProps {
  name: string;
  company: string;
  duration: string;
  points: string[];
}

const Company = ({ name, company, duration, points }: companyProps) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.1 }}
      className="w-full"
    >
      <h3 className="flex gap-1 font-medium text-base sml:text-xl font-sans">
        {name + " "}
        <span className="text-textGreen tracking-wide">@{company}</span>
      </h3>
      <p className="text-xs sml:text-sm mt-1 font-medium text-textDark">
        {duration}
      </p>

      <ul className="mt-5 flex flex-col gap-3">
        {points.map((point, index) => (
          <li
            key={index}
            className="text-sm sm:text-base flex gap-2 text-textDark"
          >
            <span className="text-textGreen mt-1">
              <TiArrowForward />
            </span>
            {point}
          </li>
        ))}
      </ul>
    </motion.div>
  );
};

export default Company;
