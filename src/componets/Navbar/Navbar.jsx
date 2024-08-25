import React from "react";
import { IoMdMenu } from "react-icons/io";
import {motion} from "framer-motion"
const NavbarMenu = [
  {
    id: 1,
    title: "Home",
    path: "/",
  },
  {
    id: 2,
    title: "Services",
    link: "#",
  },

  {
    id: 3,
    title: "About Us",
    link: "#",
  },
  {
    id: 4,
    title: "Our Team",
    link: "#",
  },
  {
    id: 5,
    title: "Contact Us",
    link: "#",
  },
];

const Navbar = () => {
  return (
    <nav className="relative z-20">
      <motion.div
      initial={{ opacity:0, y: -100}}
      animate={{ opacity:1, y:0}} 
      className="container py-5 flex justify-between items-center">
        {/* Logo Section */}
        <div>
          <h1 className="font-bold text-2xl cursor-pointer">The Tech Stacks</h1>
        </div>
        {/* Menu Section */}

        <div className="hidden lg:block font-bold">
          <ul className="flex items-center gap-3">
            {NavbarMenu.map((menu) => (
              <li key={menu.id}>
                <a
                  href={menu.path}
                  className="inline-block py-2 px-3 hover:text-secondary relative group cursor-pointer"
                >
                  <div className="  w-2 h-2 bg-secondary absolute mt-2 rounded-t left-1/2 -translate-x-1/2 top-1/2 bottom-0 group-hover:block hidden"></div>
                  {menu.title}
                </a>
              </li>
            ))}

          <button className="primary-btn">Sign Up</button>

          </ul>
        </div>
        {/* Mobile Hamburger menu Section */}

       <div className="lg:hidden ">
          <IoMdMenu className="text-4xl  cursor-pointer"/>
       </div>

      </motion.div>
    </nav>
  );
};

export default Navbar;
