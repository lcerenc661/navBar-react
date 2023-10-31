import { useState, useRef } from "react";
import { FaBars } from "react-icons/fa";
import { links, social } from "./data";
import logo from "./logo.svg";

const Navbar = () => {
  const [showLinks, setShowLinks] = useState(false);
  const linksContainerRef = useRef(null);
  const linksRef = useRef(null);

  const toggleLinks = () => {
    setShowLinks(!showLinks);
    console.log(linksContainerRef.current.getBoundingClientRect().height);
  };
  const linkStyles = {
    height: showLinks
      ? `${linksRef.current.getBoundingClientRect().height}px`
      : "0px",
  };
  return (
    <nav>
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} alt="logo" className="logo" />
          <button className="nav-toggle" onClick={toggleLinks}>
            <FaBars />
          </button>
        </div>

        <div
          className="links-container"
          ref={linksContainerRef}
          style={linkStyles}>
          <ul className="links" ref={linksRef}>
            {links.map((link) => {
              return (
                <li key={link.id}>
                  <a href={link.url}> {link.text} </a>{" "}
                </li>
              );
            })}
          </ul>
        </div>
        {/* Social Links */}
        <ul className="social-icons">
          {social.map((icon) => (
            <li key={icon.id}>
              <a href={icon.url}> {icon.icon} </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};
export default Navbar;
