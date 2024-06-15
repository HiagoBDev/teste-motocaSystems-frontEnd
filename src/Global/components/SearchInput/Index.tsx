interface SearchInputProps {
  icon: string;
  placeHolder: string;
  setSearch: (value: string) => void;
  search: string;
}

export default function SearchInput({
  icon,
  placeHolder,
  search,
  setSearch,
}: SearchInputProps) {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearch(value);
  };

  return (
    <label htmlFor="searchInput" className="w-full flex justify-center">
      <div className="flex bg-transparent border border-[#CAC9CD] text-[#CAC9CD] pl-3 py-2 rounded-[5px] gap-2 w-full sm:w-[300px] md:w-[350px] lg:w-[400px] h-[35px] items-center">
        <img src={icon} alt="icone de busca" height={14} width={14} />
        <input
          id="searchInput"
          type="text"
          onChange={handleChange}
          value={search}
          placeholder={placeHolder}
          className="bg-transparent font-normal text-[14px] sm:text-[16px] overflow-hidden text-ellipsis  h-fit w-full sm:pr-8 md:pr-12 lg:pr-16 xl:pr-24 focus:outline-none placeholder:text-[#CAC9CD]"
        />
      </div>
    </label>
  );
}
