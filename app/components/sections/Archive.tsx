import { motion } from "framer-motion";
import ArchiveCard from "../ui/ArchiveCard";
import { archives } from "../../utils/data";
import { useState } from "react";

const Archive = () => {
  let d = 0.1;
  const [Show, setShow] = useState(false);
  return (
    <div className="max-w-contentContainer mx-auto px-2 sm:px-4 sml:px-12 py-16">
      <div className="w-full flex flex-col items-center">
        <h2 className="font-sans text-center font-semibold text-3xl">
          Other Noteworthy Projects
        </h2>
        <p className="text-sm font-sans text-textGreen">view the archive</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mt-10 lgl:px-10">
        {archives.slice(0, 3).map((a) => (
          <motion.div
            key={a.id}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: (d += 0.1) }}
          >
            <ArchiveCard
              name={a.name}
              description={a.description}
              link={a.link}
              github={a.github}
              tech={a.tech}
            />
          </motion.div>
        ))}
        {Show &&
          archives.slice(3, 8).map((a) => (
            <motion.div
              key={a.id}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: (d += 0.1) }}
            >
              <ArchiveCard
                name={a.name}
                description={a.description}
                link={a.link}
                github={a.github}
                tech={a.tech}
              />
            </motion.div>
          ))}
      </div>
      <div className="mt-12 flex items-center justify-center">
        <button
          onClick={() => setShow(!Show)}
          className="w-36 h-12 rounded-md text-textGreen text-sm border border-textGreen hover:bg-hoverColor duration-300"
        >
          {Show ? "Show Less" : "Show More"}
        </button>
      </div>
    </div>
  );
};

export default Archive;
