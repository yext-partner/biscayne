import * as React from "react";
import NavBar, { NavBarLink } from "./Navbar";
import SearchBar from "./SearchBar";

interface SearchLayout {
  children?: React.ReactNode;
  navBarLinks?: NavBarLink[];
  searchBarPlaceholder?: string;
}

const SearchLayout = ({
  children,
  navBarLinks,
  searchBarPlaceholder,
}: SearchLayout) => {
  return (
    <>
      <div className="flex justify-between w-full  items-center mb-12">
        <div className="text-white text-7xl flex justify-between w-full">
          <span className="align-text-top">Search Results</span>
        </div>
        <SearchBar
          customCssClasses={{ container: "items-center mb-0 " }}
          onSearch={({ query }) => {
            document.title = `Search | ${query}`;
          }}
          placeholder={searchBarPlaceholder}
        />
      </div>
      {navBarLinks && <NavBar links={navBarLinks} />}
      <div className="w-full ">{children}</div>
    </>
  );
};

export default SearchLayout;
