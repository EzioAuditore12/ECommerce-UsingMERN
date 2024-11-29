import React from "react";
import "./header.css"; // Import custom styles for clip-path

function Header() {
  const navLinks = [
    { text: "Best Sellers", href: "#" },
    { text: "Gift Ideas", href: "#" },
    { text: "New Releases", href: "#" },
    { text: "Today's Deals", href: "#" },
    { text: "Customer Service", href: "#" },
  ];

  return (
    <div className="w-[60%] bg-black text-white py-4 clip-banner hidden sm:block">
      <div className="flex justify-center">
        {navLinks.map((link, index) => (
          <a
            key={index}
            href={link.href}
            className="hover:text-gray-300 text-xs px-6"
          >
            {link.text}
          </a>
        ))}
      </div>
    </div>
  );
}

export default Header;