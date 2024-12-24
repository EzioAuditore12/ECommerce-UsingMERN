import React from "react";

function Header() {
  const navLinks = [
    { text: "Best Sellers", href: "#" },
    { text: "Gift Ideas", href: "#" },
    { text: "New Releases", href: "#" },
    { text: "Today's Deals", href: "#" },
    { text: "Customer Service", href: "#" },
  ];

  return (
    <div className="bg-black text-white py-4 hidden md:block absolute top-0 w-[760px]"
         style={{ 
           clipPath: "polygon(0 0, 100% 0, 95% 100%, 5% 100%)",
           background: "linear-gradient(90deg, #1a1a1a 0%, #333333 100%)"
         }}>
      <div className="flex justify-center">
        {navLinks.map((link, index) => (
          <a
            key={index}
            href={link.href}
            className="hover:text-gray-300 text-xs px-6 text-center lg:text-sm"
          >
            {link.text}
          </a>
        ))}
      </div>
    </div>
  );
}

export default Header;
