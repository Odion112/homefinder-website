import { RiSearchLine } from "react-icons/ri";
import { LuX } from "react-icons/lu";


export default function SearchBar({
  value,
  onChange,
  onSearch,
  placeholder = "Search location or property type...",
  className = "",
}) {
  const handleKeyDown = (e) => {
    if (e.key === "Enter" && onSearch) onSearch(value);
  };

  return (
    <div
      className={`flex items-center gap-2 border border-[#C6C6C6] rounded-xs px-3 h-10 bg-white focus-within:border-[#FE7C0B] transition-colors duration-150 ${className}`}
    >
      {/* Search icon*/}
      <button
        type="button"
        onClick={() => onSearch && onSearch(value)}
        className="shrink-0 cursor-pointer text-[#0E0D0C]"
        aria-label="Search"
      >
        <RiSearchLine size={16} />
      </button>

      {/* Input */}
      <input
        type="text"
        value={value}
        onChange={(e) => onChange && onChange(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder={placeholder}
        className="flex-1 bg-transparent text-sm font-rethink text-[#0E0D0C] placeholder:text-[#A5A1A1] outline-none"
      />

      {value && (
        <button
          type="button"
          onClick={() => onChange && onChange("")}
          className="shrink-0 text-[#9E9E9E] hover:text-[#0E0D0C] transition-colors duration-150 cursor-pointer"
          aria-label="Clear search"
        >
          <LuX size={14} />
        </button>
      )}
    </div>
  );
}


// HOW TO USE


 // function App() {
 // const [status, setStatus] = useState("");
 // const [query, setQuery] = useState("");

  //const handleSearch = (q) => {
    // console.log("searching:", q);
  // };

//  return (
//    <>
//      <SearchBar
//        value={query}
//        onChange={setQuery}
//        placeholder="Search by area, e.g. Lekki, Yaba..."
//        onSearch={handleSearch}
//        className="!w-100"
//      />