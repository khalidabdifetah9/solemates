import React from "react";
import Link from "next/link";

const Links = [
  { key: "home", label: "Back To Home", href: "/" },
  { key: "shoes", label: "Explor Our Shoes", href: "/shoes" },
];

const NotFound = () => {
  return (
    <div className="mx-auto max-w-300">
      <h1 className="font-racing text-[10vw] text-center">404</h1>
      <p className="font-poppins text-xl">
        {"this page lost it's shoes and couldn't run to you"}
      </p>
      <div className="font-poppins">
        {Links.map(({ label, href, key }) => (
          <Link key={key} href={href}>
            {label}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default NotFound;
