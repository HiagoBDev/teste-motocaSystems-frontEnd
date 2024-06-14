import { MotoCard } from '../../components/MotoCard/index';
import MotoAction from '../MotoCard/MotoAction';
import { useMotoWrapper } from './useMotoWrapper';
import DeleteIcon from '../../../assets/icons/DeleteIcon.svg';
import EyeEditIcon from '../../../assets/icons/EyeEditIcon.svg';
import { TailSpin } from 'react-loader-spinner';

export default function MotoWrapper() {
  const { motos, deleteMoto, loadingMotoId } = useMotoWrapper();

  const handleDeleteClick = (id: number) => {
    deleteMoto(id);
  };

  return (
    <section className='w-full pl-[10px] flex flex-col gap-6 mt-6 pb-40'>
      {motos.map(moto => (
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
              <TailSpin 
              visible={true}
              height="19"
              width="19"
              color="#FF4C51"
              ariaLabel="tail-spin-loading"
              radius="0"
            />
            ) : (
              <>
                <MotoAction 
                  icon={DeleteIcon} 
                  alt='Botão de excluir moto' 
                  onClick={() => handleDeleteClick(moto.id)} 
                />
              </>
            )}
            <MotoAction 
              icon={EyeEditIcon} 
              alt='Botão de editar moto' 
            />
          </MotoCard.Actions>
        </MotoCard.Root>
      ))}
    </section>
  );
}
