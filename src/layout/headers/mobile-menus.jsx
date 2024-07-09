import Link from "next/link";
import React from "react";
// internal
import menu_data from "./menu-data";

const MobileMenus = () => {
  return (
    <>
      <nav className="mean-nav">
        <ul>
          {menu_data.map((menu, i) => (
            <React.Fragment key={i}>
              <li>
                <Link href={menu.link}>{menu.title}</Link>
              </li>
            </React.Fragment>
          ))}
        </ul>
      </nav>
    </>
  );
};

export default MobileMenus;
