"use client";
import About from "./components/sections/About";
import Archive from "./components/sections/Archive";
import BackToTop from "./components/ui/BackToTop";
import Banner from "./components/sections/Banner";
import Contact from "./components/sections/Contact";
import Experience from "./components/sections/Experience";
import Footer from "./components/sections/Footer";
import LeftSide from "./components/sections/LeftSide";
import Navbar from "./components/sections/Navbar";
import Projects from "./components/sections/Projects";
import RightSide from "./components/sections/RightSide";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="w-full h-screen bg-bodyColor text-textLight overflow-x-hidden overflow-y-scroll scrollbar scrollbar-track-textDark/20 scrollbar-thumb-textDark/60">
      <Navbar />
      <BackToTop />
      <div className="w-full h-[88vh] xl:flex items-center gap-20 justify-between">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.0 }}
          className="hidden xl:inline-flex w-28 h-full fixed left-0 bottom-3"
        >
          <LeftSide />
        </motion.div>
        <div className="mx-auto w-full p-4 h-[88vh]">
          <Banner />
          <About />
          <Experience />
          <Projects />
          <Archive />
          <Contact />
          <Footer />
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.0 }}
          className="hidden xl:inline-flex w-28 h-full fixed right-0 bottom-3"
        >
          <RightSide />
        </motion.div>
      </div>
    </main>
  );
}
