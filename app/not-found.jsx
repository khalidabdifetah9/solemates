import React from "react";
import Link from "next/link";

const Links = [
  { key: "home", label: "Back To Home", href: "/" },
  { key: "shoes", label: "Explor Our Shoes", href: "/shoes" },
];

const NotFound = () => {
  return (
    <div className="mx-auto mt-[20vh] max-w-300 text-center">
      <h1 className="font-racing text-[10vw] ">404</h1>
      <p className="font-poppins text-xl">
        {"this page has lost it's shoes and couldn't run to you"}
      </p>
      <div className="font-poppins space-x-5 mt-10">
        {Links.map(({ label, href, key }) => (
          <Link className="px-12 py-4 rounded-lg bg-[#A9DDF2]" key={key} href={href}>
            {label}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default NotFound;
