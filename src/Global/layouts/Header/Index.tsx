import userIcon from "../../../assets/icons/UserIcon.svg";
import homeIcon from "../../../assets/icons/HomeIcon.svg";
import { Link } from "react-router-dom";
import { useState } from "react";
import Menu from "../../components/OpenMenu/OpenMenu"; // Importe o novo componente Menu

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  return (
    <header className="w-screen h-20">
      <nav className="flex w-full h-full gap-6 items-center justify-end bg-[#2A233C] ">
        <div className="flex items-end gap-5 mt-7 mx-8 sm:mx-10 md:mx-12">
          <Link to={"/"}>
            <img
              src={homeIcon}
              alt="Ícone de Home"
              width={33}
              height={33}
              className="pb-1"
            />
          </Link>
          <img
            onClick={() => setIsMenuOpen((prevState) => !prevState)}
            className="cursor-pointer"
            src={userIcon}
            alt="Ícone de usuário"
            width={44}
            height={44}
          />
        </div>
      </nav>
      <Menu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </header>
  );
}
