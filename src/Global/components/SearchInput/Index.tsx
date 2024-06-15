interface SearchInputProps {
  icon: string;
  placeHolder: string;
  setSearch: (value: string) => void;
  search: string;
}

export default function SearchInput({ icon, placeHolder, search, setSearch, }: SearchInputProps) {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearch(value);
  };

  return (
    <label htmlFor="searchInput" className="w-full flex justify-center">
      <div className="flex bg-transparent border border-[#CAC9CD] text-[#CAC9CD] pl-3 py-2 rounded-[5px] gap-2 w-full h-[35px] items-center">
        <img src={icon} alt="icone de busca" height={14} width={14} />
        <input
          id="searchInput"
          type="text"
          onChange={handleChange}
          value={search}
          placeholder={placeHolder}
          className="bg-transparent font-normal text-[14px] h-fit sm:text-[16px] sm:pr-5 md:text-[16px] lg:text-[16px] xl:text-[16px] md:pr-20 lg:pr-28 xl:pr-36 focus:outline-none w-full "
        />
      </div>
    </label>
  );
}
