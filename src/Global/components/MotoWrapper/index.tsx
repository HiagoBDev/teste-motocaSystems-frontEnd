import { Link } from "react-router-dom";
import { MotoCard } from "../../components/MotoCard/index";
import MotoAction from "../MotoCard/MotoAction";
import { useMotoWrapper } from "./useMotoWrapper";
import DeleteIcon from "../../../assets/icons/DeleteIcon.svg";
import EyeEditIcon from "../../../assets/icons/EyeEditIcon.svg";
import { TailSpin } from "react-loader-spinner";
import { filterMotos } from "../../../utils/filterMotos";

interface MotoWrapperProps {
  search: string;
}

export default function MotoWrapper({ search }: MotoWrapperProps) {
  const { motos, deleteMoto, loadingMotoId } = useMotoWrapper();
  const filteredMotos = filterMotos(motos, search);
  const handleDeleteClick = (id: string) => { deleteMoto(id) };

  return (
    <section className="w-full pl-[10px] flex flex-col gap-6 mt-6 pb-40">
      {filteredMotos.map((moto) => (
        <MotoCard.Root key={moto.id}>
          <MotoCard.Content
            code={moto.code}
            color={moto.color}
            name={moto.name}
            status={moto.status}
            value={moto.value}
          />
          <MotoCard.Actions>
            {loadingMotoId === moto.id ? (
              <>
                <TailSpin
                  visible={true}
                  height="19"
                  width="19"
                  color="#FF4C51"
                  ariaLabel="tail-spin-loading"
                  radius="0"
                />
                <Link to={`/motoEdit/${moto.id}`}>
                  <MotoAction icon={EyeEditIcon} alt="Botão de editar moto" />
                </Link>
              </>
            ) : (
              <>
                <MotoAction
                  icon={DeleteIcon}
                  alt="Botão de excluir moto"
                  onClick={() => handleDeleteClick(moto.id)}
                />
                <Link to={`/motoEdit/${moto.id}`}>
                  <MotoAction icon={EyeEditIcon} alt="Botão de editar moto" />
                </Link>
              </>
            )}
          </MotoCard.Actions>
        </MotoCard.Root>
      ))}
    </section>
  );
}
