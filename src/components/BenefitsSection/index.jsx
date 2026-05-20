function BenefitsSection() {
  const benefits = [
    {
      title: "Alívio do Estresse",
      desc: "Reduza a ansiedade e encontre a paz interior.",
      index: 0,
    },
    {
      title: "Equilíbrio Energético",
      desc: "Restaure a harmonia entre corpo, mente e espírito.",
      index: 1,
    },
    {
      title: "Autoconhecimento",
      desc: "Conecte-se com sua essência e propósitos de vida.",
      index: 2,
    },
    {
      title: "Bem-estar Físico",
      desc: "Alívio de tensões musculares e dores crônicas.",
      index: 3,
    },
  ];

  return (
    <section id="beneficios" className="py-16 px-6 bg-white w-full">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-[#563A24] text-4xl font-[Cambo] mb-12">
          Benefícios das Terapias
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit) => (
            <div
              key={benefit.index}
              className="flex flex-col items-center p-6 bg-[#F1BF4C]/10 rounded-2xl border border-[#F1BF4C]/30 hover:shadow-lg hover:-translate-y-1 duration-300 transition-shadow cursor-pointer"
            >
              <div className="w-16 h-16 bg-[#F1BF4C] rounded-full flex items-center justify-center mb-4">
                <img
                  src={`/src/assets/icons/icon-${benefit.index}.png`}
                  alt={`ícone ${benefit.title}`}
                  className="w-10 h-10 object-contain"
                />
              </div>
              <h3 className="text-[#0D003D] text-xl font-[Cantarell] font-bold mb-2">
                {benefit.title}
              </h3>
              <p className="text-[#563A24] text-center font-[Cantarell]">
                {benefit.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default BenefitsSection;
