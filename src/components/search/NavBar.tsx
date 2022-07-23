import * as React from "react";
import cx from "classnames";
import { useAnswersState } from "@yext/answers-headless-react";

const DEV_MODE = import.meta.env.DEV;

export type NavBarLink = {
  name: string;
  href: string;
  //TODO: Remove this once dev links match prod links
  devHref?: string;
  verticalKey?: string;
};

export interface NavBarProps {
  links: NavBarLink[];
}

const NavBar = ({ links }: NavBarProps) => {
  const activeVertical = useAnswersState((state) => state.vertical.verticalKey);
  return (
    <nav className="flex w-full items-center mb-12 text-white text-2xl border-b-2">
      {links.map(({ name, href, devHref, verticalKey }) => (
        <div className="pr-4  " key={name}>
          <div
            className={cx("border-transparent pb-2", {
              "border-b-2 hover:border-white": verticalKey !== activeVertical,
              "border-fm-pink border-b-2 text-fm-pink":
                verticalKey === activeVertical,
            })}
          >
            <a
              className={cx("mb-4")}
              href={DEV_MODE && devHref ? devHref : href}
            >
              {name}
            </a>
          </div>
        </div>
      ))}
    </nav>
  );
};

export default NavBar;
