import { useState } from "react";
import Divider from "../../Global/components/Divider/Index";
import PlusIcon from '../../assets/icons/PlusIcon.svg';
import Button from "../../Global/components/Button/Index";
import SearchInput from "../../Global/components/SearchInput/Index";
import SearchIcon from "../../assets/icons/SearchIcon.svg";
import MotoWrapper from '../../Global/components/MotoWrapper/index';
import { Link } from "react-router-dom";

export default function MotoList() {
  const [search, setSearch] = useState('');

  const handleSearchChange = (value: string) => {
    setSearch(value);
    console.log("Valor da busca atual:", value); // Exemplo de uso do valor de busca
    // Aqui você pode fazer qualquer operação necessária com o valor atual da busca
  };

  return (
    <main className="bg-[#2A233C] h-full mt-14 mx-4 sm:mx-6 md:mx-8 lg:mx-10 xl:mx-12">
      <header className="text-[#CAC9CD] font-semibold text-base">
        <div className="sm:mb-4 mb-2 flex items-center justify-between">
          <span className="font-semibold text-xl sm:text-lg md:text-xl lg:text-2xl xl:text-[25px]">
            Tabela de Motos
          </span>
          <div className="flex items-center gap-4">
            <div className="hidden sm:block">
              <SearchInput
                search={search}
                setSearch={handleSearchChange}
                placeHolder="Buscar por código, nome e cor"
                icon={SearchIcon}
              />
            </div>
            <div>
              <Link to={"/motoRegister"}>
                <Button size="small" icon={PlusIcon}>NOVO REGISTRO</Button>
              </Link>
            </div>
          </div>
        </div>
        <div className="block sm:hidden mb-4">
          <SearchInput
            search={search}
            setSearch={handleSearchChange}
            placeHolder="Buscar por código, nome e cor"
            icon={SearchIcon}
          />
        </div>
        <Divider color="bg-[#CAC9CD]" />
      </header>
      <MotoWrapper search={search} />
    </main>
  );
}
