import React from "react";

type Props = {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};
const SearchForPlace = ({ setIsOpen }: Props) => {
  return (
    <button
      onClick={() => setIsOpen(true)}
      className="bg-gray px-4 py-2 shadow-[0_4px_4px_rgba(0, 0, 0, 0.2)]"
    >
      <p className="text-base text-primary font-medium leading-[19px] ">
        Search for places
      </p>
    </button>
  );
};

export default SearchForPlace;
