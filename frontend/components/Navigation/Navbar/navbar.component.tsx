import React, { ReactNode } from "react";
import { FiMenu } from "react-icons/fi";
import NavItem from "../NavItem/nav-item.component";

interface IProps {
  children: ReactNode;
  // navbarStart: ReactNode[];
  // navbarCenter?: ReactNode[];
  // navbarEnd: ReactNode[];
  // onDrawerClick?(): void;
}

export default React.memo(function Navbar({ children }: IProps) {
  return (
    <div className="p-8">
      <div className="navbar mb-2 shadow-lg bg-neutral text-neutral-content rounded-box">
        <div className="px-2 mx-2 navbar-start">
          {/*{onDrawerClick && (*/}
          <div className="btn btn-square btn-ghost">
            <FiMenu />
          </div>
          {/*)}*/}
          <NavItem isLogoText={true}>SMTP-sender</NavItem>
        </div>
        {/*{navbarCenter && (*/}
        <div className="px-2 mx-2 navbar-center lg:flex">
          <NavItem>HOME</NavItem>
        </div>
        {/*)}*/}
        <div className="navbar-end">
          <NavItem>OPTIONS</NavItem>
        </div>
      </div>
      {children}
    </div>
  );
});
