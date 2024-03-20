"use client";

import {motion} from "framer-motion";
import Link from "next/link";

export default function Header() {
  return (
    <header style={headerStyle}>
      <motion.div
        style={leftContainerStyle}
        transition={{type: "spring", damping: 18, mass: 0.75}}
        initial={{opacity: 0, x: -1000}}
        animate={{opacity: 1, x: 0}}
      >
        <h1 style={bookTitleStyle}>BookApp</h1>
        <motion.input
          type="text"
          placeholder="Tell me what you like to read and we will get that..."
          style={searchInputStyle}
          initial={{opacity: 0, x: -100}}
          animate={{opacity: 1, x: 0}}
        />
      </motion.div>

      <motion.div
        style={rightContainerStyle}
        transition={{type: "spring", damping: 18, mass: 0.75}}
        initial={{opacity: 0, x: 1000}}
        animate={{opacity: 1, x: 0}}
      >
        <Link href="/profile" style={avatarLinkStyle}>
          <motion.img
            style={avatarStyle}
            src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRaoTYflCWl4yEyoW865Khp5Nd0ZRI1UWT_UIm_A6JTyfO0f9_c"
            alt="avatar"
            initial={{opacity: 0, x: 100}}
            animate={{opacity: 1, x: 0}}
          />
        </Link>
      </motion.div>
    </header>
  );
}

const headerStyle = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "1rem 1rem 1rem 0",
  color: "#fff",
};
const leftContainerStyle = {
  display: "flex",
  alignItems: "center",
};

const bookTitleStyle = {
  marginRight: "2rem",
  color: "#000",
};

const searchInputStyle = {
  padding: "0.7rem 1rem",
  marginLeft: "3.6rem",
  borderRadius: "70px",
  backgroundColor: "rgb(248,234,221)",
  border: "2px solid #000",
  minWidth: "320px",
};

const rightContainerStyle = {
  display: "flex",
  alignItems: "center",
  border: "10px",
  borderRadius: "70px",
};

const avatarLinkStyle = {
  marginRight: "1rem",
};

const avatarStyle = {
  width: "40px",
  height: "40px",
  borderRadius: "50%",
};
