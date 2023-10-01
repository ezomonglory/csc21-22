import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

const NavLink = ({ children, href, active = false }) => {
    console.log( children)
  const child = React.Children.only(children);
  const router = useRouter();

  return (
    <Link href={href}>
      {React.cloneElement(child, {
        "aria-current": router.pathname === href || active ? "page" : null
      })}
    </Link>
  );
};

export default NavLink;