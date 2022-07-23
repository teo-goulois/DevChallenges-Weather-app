import React, { useContext, useEffect, useState } from "react";
import { motion } from "framer-motion";
import axios from "axios";
// Icons
import { CloseIcon } from "../../constants/icons/Icons";
// Context
import { WeatherContext } from "../../context/WeatherContext";
// Components
import SearchInput from "./SearchInput";
import SearchButton from "./SearchButton";
import SearchResultButton from "./SearchResultButton";
// Types
import { WeatherSearchType } from "../../constants/types/Types";

type Props = {};
const test = [1, 2, 3];
const variants = {
  open: { opacity: 1, transform: "translateX(0%)" },
  closed: { opacity: 0, transform: "translateX(-100%)" },
};

const SearchModal = ({}: Props) => {
  const { searchBarIsOpen, setSearchBarIsOpen, setWeatherInfos } =
    useContext(WeatherContext);
  const [searchResults, setSearchResults] = useState<WeatherSearchType[]>([]);
  const [input, setInput] = useState("");

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const res = await axios.post(`api/posts/${input}`);
    setSearchResults(res.data.searchResults);
    setInput("");
  };

  return (
    <motion.div
      animate={searchBarIsOpen ? "open" : "closed"}
      variants={variants}
      transition={{ ease: "easeOut", duration: 0.35 }}
      className="bg-blue fixed h-full z-10 w-full overflow-x-hidden md:w-[40%]"
    >
      {/* close button */}
      <div className="text-primary text-xl p-4 flex justify-end">
        <button
          type="button"
          aria-label="close search bar"
          onClick={() => setSearchBarIsOpen(false)}
        >
          <CloseIcon />
        </button>
      </div>
      {/* search input */}
      <form onSubmit={handleSubmit} className="flex justify-between px-2 pb-6">
        <SearchInput input={input} setInput={setInput} />
        <SearchButton />
      </form>
      {/* sugestions */}
      <div className="px-2">
        {searchResults?.map((item, index) => {
          if (index > 4) return;
          return <SearchResultButton key={item.id} item={item} />;
        })}
      </div>
    </motion.div>
  );
};

/* 
searchResults.map((result) => {
          console.log(result.region);

          return <SearchResultButton key={result.id} item={result} />;
        })
*/

export default SearchModal;
