import Divider from '../../Global/components/Divider/Index';
import EditForm from '../../Global/components/EditForm/Index';
import useMotoEdit from './useMotoEdit';
import { useParams } from 'react-router-dom';

export default function MotoEdit() {
  const { motoId } = useParams()
  const { motoData } = useMotoEdit(motoId);

  return (
    <section className="bg-[#2A233C] h-full mt-14 mx-8 sm:mx-10 md:mx-12 mb-40">
      <header className="text-[#CAC9CD] font-semibold text-base">
        <div className="mb-4 flex items-center justify-between">
          <span className="font-semibold text-xl text-[#E7E3FC] lg:text-2xl xl:text-[25px]">
            Editar
          </span>
        </div>
      </header>
      <Divider color="bg-[#CAC9CD]" />
      <div className="mt-16 flex flex-col items-center w-full gap-10">
        <h2 className="font-semibold text-[17px] sm:text-2xl lg:text-2xl xl:text-[25px] text-[#E7E3FC]">
          Edite as informações que preferir! 📝
        </h2>
        {motoData && <EditForm motoData={motoData} motoId={motoId} />}
      </div>
    </section>
  );
}
