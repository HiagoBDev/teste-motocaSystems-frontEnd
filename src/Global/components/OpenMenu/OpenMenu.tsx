import { twMerge } from "tailwind-merge";
import closeIcon from "../../../assets/icons/CloseIcon.svg";
import Divider from "../Divider/Index";

interface OpenMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function OpenMenu({ isOpen, onClose }: OpenMenuProps) {
  return (
    <div
      className={twMerge(
        "fixed top-0 right-0 w-64 h-full bg-gray-800 text-white shadow-lg z-50 transform transition-transform duration-300",
        isOpen ? "translate-x-0" : "translate-x-full"
      )}
    >
      <div>
        <button onClick={onClose} className="text-white m-4">
          <img src={closeIcon} alt="Fechar" width={30} height={30} />
        </button>
        <ul className="mt-4">
          {/*colocaria-se aqui, os links para as devidas páginas de perfil, configurações e Sair respectivamente*/}
          <Divider />
          <li className="m-4 cursor-pointer">Perfil</li>
          <Divider />
          <li className="m-4 cursor-pointer">Configurações</li>
          <Divider />
          <li className="m-4 cursor-pointer">Sair</li>
          <Divider />
        </ul>
      </div>
    </div>
  );
}
