import * as React from "react";
import cx from "classnames";
import SearchExperience from "./search/SearchExperience";
import { SearchBar } from "@yext/answers-react-components";

interface PageLayoutProps {
  fullWidth?: boolean;
  noPadding?: boolean;
  children?: React.ReactNode;
  verticalKey?: string;
}

const PageLayout = ({
  children,
  fullWidth,
  noPadding,
  verticalKey,
}: PageLayoutProps) => {
  return (
    <SearchExperience verticalKey={verticalKey}>
      <div className="flex min-h-screen flex-col relative">
        <div
          className={cx("w-full mx-auto flex-grow ", {
            "max-w-7xl": !fullWidth,
            "px-6 2xl:px-28": !noPadding,
          })}
        >
          {children}
        </div>
      </div>
    </SearchExperience>
  );
};

export default PageLayout;
