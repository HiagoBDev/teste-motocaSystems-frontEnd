import CreateForm from "../../Global/components/CreateForm/Index";
import Divider from "../../Global/components/Divider/Index";

export default function MotoRegister() {
  return (
    <section className=" bg-[#2A233C] h-full mt-14 mx-8 sm:mx-10 md:mx-12 mb-40">
      <header className=" text-[#CAC9CD] font-semibold text-base  ">
        <div className=" mb-4 flex items-center justify-between">
          <span className=" font-semibold text-xl text-[#E7E3FC] lg:text-2xl xl:text-[25px]">
            Registro de Motos
          </span>
        </div>
      </header>
      <Divider color=" bg-[#CAC9CD]" />
      <div className=" mt-16 flex flex-col items-center w-full gap-10">
        <h2 className=" font-semibold text-[17px] sm:text-2xl lg:text-2xl xl:text-[25px] text-[#E7E3FC]">
          Preencha as informações a baixo para registrar uma Moto 🏍️
        </h2>
        <CreateForm />
      </div>
    </section>
  );
}
