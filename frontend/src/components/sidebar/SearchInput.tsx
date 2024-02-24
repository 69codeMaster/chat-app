import { FiSearch } from "react-icons/fi";

const SearchInput = () => {
  return (
    <form className="flex items-center gap-2">
      <input
        type="search"
        placeholder="Search..."
        className="rounded-full input input-bordered"
      />
      <button className="btn btn-circle btn-info">
        <FiSearch size={22} color="white" />
      </button>
    </form>
  );
};

export default SearchInput;
