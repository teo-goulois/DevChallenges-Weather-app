import React, { Dispatch, SetStateAction, useState } from "react";
// Icons
import { SearchIcon } from "../../constants/icons/Icons";

type Props = {
  input: string;
  setInput: Dispatch<SetStateAction<string>>;
};

const SearchInput = ({ input, setInput }: Props) => {
  return (
    <div className="border border-light-gray flex items-center px-4 py-2 w-full mr-2">
      <div className="text-gray-border pr-2">
        <SearchIcon />
      </div>
      <input
        onChange={(e) => setInput(e.target.value)}
        value={input}
        className="bg-blue text-primary placeholder:text-base placeholder:font-medium placeholder:text-gray-border outline-none w-full"
        type="text"
        placeholder="search location"
      />
    </div>
  );
};

export default SearchInput;
